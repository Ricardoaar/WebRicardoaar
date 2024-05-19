import { useState, useCallback } from "react";

interface useToggleValue {
  state: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

export const useToggle = (initialState: boolean = false): useToggleValue => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => setState(prevState => !prevState), []);
  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);
  return {
    state,
    toggle,
    setTrue,
    setFalse
  };
};


