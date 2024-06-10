import classNames from "classnames";
import { ReactElement } from "react";
import { IconType } from "react-icons";

import { InputPropsV2 } from "./types/types.ts";
import { ComponentClasses } from "./util/componentClasses.ts";
import { ComponentWithLabel } from "./util/wrappers.tsx";

function InputV2({ label, icon = {}, primary, secondary, danger, warning, success, info, sm, md, lg, xl, className, id, ...rest }: InputPropsV2) {
    const { IconElement, pos, ...restIconProps } = icon;

    const { right, left } = {
        right: pos === "right",
        left: pos === "left"
    };
    const IconPresent = !!IconElement;

    const inputClass = ComponentClasses.inputClass({ className, IconPresent, primary, secondary, danger, warning, success, info, sm, md, lg, xl, right, left });
    const labelClass = ComponentClasses.labelSize({ sm, md, lg, xl });

    const iconContainerClass = classNames("absolute inset-y-0 flex items-center", {
        "right-0 mr-1": right || (!left && !right),
        "left-0 ml-1": left,
        "cursor-pointer": !!restIconProps.onClick
    });

    const inputWithIcon = (Icon: IconType | undefined, component: ReactElement<HTMLInputElement>): ReactElement => {
        if(Icon) {
            return (
                 <div className={"relative"}>
                     {component}
                     <div className={iconContainerClass}>
                         <Icon {...restIconProps} />
                     </div>
                 </div>
            );
        }
        return component;
    };
    const withIcon = inputWithIcon(IconElement, <input className={inputClass} id={id} {...rest} />);

    return ComponentWithLabel({ className: labelClass, component: withIcon, id, label });
}

export default InputV2;