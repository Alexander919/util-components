import { LabelProps } from "./types/types.ts";
import classNames from "classnames";

function Label({ children, right, center, sm, md, lg, xl, label, htmlFor, className, ...rest }: LabelProps) {

    const labelClass = classNames(className, {
        "text-right": right,
        "text-center": center,
        "text-xs": sm,
        "text-sm": md,
        "text-base": lg,
        "text-lg": xl
    });

    return (
        <div className={"flex flex-col"} {...rest}>
            <label className={labelClass} htmlFor={htmlFor}>{label}</label>
            {children}
        </div>
    );
}

export default Label;