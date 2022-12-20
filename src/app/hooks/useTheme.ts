import { createContext, useContext } from "react";

export type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const themeDefault: ThemeContextType = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(themeDefault);
export const useTheme = () => useContext(ThemeContext);