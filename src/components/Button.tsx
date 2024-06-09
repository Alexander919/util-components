import { ButtonProps } from "./types/types.ts";
import { ComponentClasses } from "./util/componentClasses.ts";
import classNames from "classnames";
import { IconType } from "react-icons";

function Button({ children, icon = {}, className, primary, secondary, danger, success, warning, info, outline, sm, md, lg, xl, ...rest }: ButtonProps) {
    const buttonClass = ComponentClasses.buttonClass({ className, primary, secondary, danger, success, warning, info, outline, sm, md, lg, xl });

    const { IconElement, pos, corner, className: IconClassName  } = icon;

    const { right, left } = {
        right: pos === "right",
        left: pos === "left"
    };

    const btnClass = classNames(buttonClass, {
        "flex items-center justify-center relative": !!IconElement,
    });

    const iconClass = classNames(IconClassName, {
        "absolute": corner,
        "right-0 mr-1": right && corner,
        "left-0 ml-1": left && corner,
    });

    const iconPresent = (Icon: IconType | undefined) => Icon && <Icon className={iconClass} />;

    return (
        <button className={btnClass} {...rest}>
            {left && iconPresent(IconElement)}
            {children}
            {right && iconPresent(IconElement)}
        </button>
    );
}

export default Button;