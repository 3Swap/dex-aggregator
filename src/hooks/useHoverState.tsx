import { useState } from "react";

export const useHoverState = (initialValue: boolean[] = []) => {
  const [state, setState] = useState<boolean[]>(initialValue);

  const handleMouseEnter = (index: number) => {
    setState((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index: number) => {
    setState((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  return [state, handleMouseEnter, handleMouseLeave] as const;
};

