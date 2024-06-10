import {IconProps} from "./types/types.ts";
import React from "react";
import classNames from "classnames";

function Icon({ children, className, I, right, left, onClick }: IconProps) {
    let cloned: React.ReactNode = children;

    const iconContainerClass = classNames({
        "right-0 mr-1": right,
        "left-0 ml-1": left
    });

    if(React.isValidElement<HTMLInputElement>(children)) {
        cloned = React.cloneElement(children, {
            className: classNames(children.props.className, {
                "pr-5": right,
                "pl-5": left
            }),
        });
    }

    return (
        <div className="relative">
            {cloned}
            <div className={`absolute inset-y-0 ${iconContainerClass} flex items-center`} >
                <I className={className} onClick={onClick} />
            </div>
        </div>
    );
}

export default Icon;