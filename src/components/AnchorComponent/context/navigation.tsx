import {NavigationContext, NavigationContextType} from "./util.ts";
import {PropsWithChildren, useEffect, useState} from "react";

function NavigationProvider({ children }: PropsWithChildren) {
    const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname); //this will cause our component to re-render
        }
        window.addEventListener("popstate", handler);

        return () => window.removeEventListener("popstate", handler);
    }, []);

    const navigate = (to: string) => {
         window.history.pushState(null, "", to); //change address
         setCurrentPath(to); //re-render
    };

    console.log(currentPath);

    const value: NavigationContextType = {
        currentPath,
        navigate
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
}

export default NavigationProvider;