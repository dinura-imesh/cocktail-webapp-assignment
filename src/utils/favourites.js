const FAVOURITES_KEY = "favourites";

const Favourites = {
  add: (id) => {
    if (Favourites.isFavourite(id)) return;
    localStorage.setItem(
      FAVOURITES_KEY,
      JSON.stringify([...Favourites.getFavourites(), id])
    );
  },
  remove: (id) => {
    const removedArray = Favourites.getFavourites().filter((e) => e !== id);
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify([...removedArray, id]));
  },
  isFavourite: (id) => {
    return Favourites.getFavourites().includes(id);
  },
  getFavourites: () => {
    return JSON.parse(localStorage.getItem(FAVOURITES_KEY) ?? "[]");
  },
};

export default Favourites;
