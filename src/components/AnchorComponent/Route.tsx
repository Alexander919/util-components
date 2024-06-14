import {PropsWithChildren} from "react";
import {useNavigationContext} from "./context/util.ts";

type RouteProps = {
    path: string;
} & PropsWithChildren;

function Route({ path, children }: RouteProps) {
    const { currentPath } = useNavigationContext();

    return currentPath === path ? children : undefined;
}

export default Route;