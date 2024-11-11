import { useState } from 'react';

export const useBoolean = (defaultState: boolean = false) => {
  const [boolean, setBoolean] = useState<boolean>(defaultState);

  const setTrue = () => {
    setBoolean(true);
  };

  const setFalse = () => {
    setBoolean(false);
  };

  const toggle = () => {
    setBoolean((prevState) => !prevState);
  };

  return {
    boolean,
    setTrue,
    setFalse,
    toggle,
  };
};
