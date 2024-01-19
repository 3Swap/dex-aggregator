import { useState } from "react";

export const useVisibleChains = (initialValue: number = 9) => {
  const [visibleChains, setVisibleChains] = useState<number>(initialValue);

  const handleViewAllChains = (length: number) => {
    setVisibleChains(length);
  };

  return [visibleChains, handleViewAllChains] as const;
};
