import React, { ComponentPropsWithoutRef } from 'react';
import {useNavigationContext} from "./context/util.ts";
import classNames from "classnames";

type LinkProps = {
    to: string;
    activeClassName?: string;
} & ComponentPropsWithoutRef<"a">;

function Link({ to, className, activeClassName, ...rest }: LinkProps) {
    const { navigate, currentPath } = useNavigationContext();

    const classes = classNames("text-blue-500", className, {
        [String(activeClassName)]: !!activeClassName && currentPath === to
    });

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if(e.ctrlKey || e.metaKey) {
            return; //do the default behaviour(go to href)
        }
        e.preventDefault();
        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick={handleClick} {...rest} />
    );
}

export default Link;