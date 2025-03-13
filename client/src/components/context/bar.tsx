import { createContext } from "react";

type BarContextType = {
  bar: string | null;
  changeBar: (val: string) => void;
}

export const BarContext = createContext<BarContextType>({
  bar: null,
  changeBar: () => {}
});