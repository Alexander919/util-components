import { createContext, useContext } from "react";

export type NavigationContextType = {
    currentPath: string;
    navigate: (to: string) => void;
};

export const NavigationContext = createContext({} as NavigationContextType);
export const useNavigationContext = () => useContext(NavigationContext);