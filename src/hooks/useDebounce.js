import { useRef, useState } from "react";

const DEBOUNCE_TIMER = 800;

export const useDebounce = (initialValue) => {
  const intervalRef = useRef();
  const [state, setState] = useState(initialValue);

  const setValue = (value) => {
    if (intervalRef.current) clearTimeout(intervalRef.current);
    intervalRef.current = setTimeout(() => {
      setState(value);
    }, DEBOUNCE_TIMER);
  };

  return [state, setValue];
};
