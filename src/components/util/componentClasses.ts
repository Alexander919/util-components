import classNames from "classnames";

// type BoolUndef = boolean | undefined;
// type StrUndef = string | undefined;
// type Varargs<T> = ( ...args: T[]) => string;
// type ArgVarargs<T, K> = ( arg: T, ...args: K[]) => string;
interface TextElement {
    className?: string;
}

interface WithIcon extends TextElement {
    left?: boolean;
    right?: boolean;
    IconPresent?: boolean;
}

interface Sizes {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
}

interface Variations {
    primary?: boolean;
    secondary?: boolean;
    danger?: boolean;
    warning?: boolean;
    success?: boolean;
    info?: boolean;
}

interface ButtonVariations extends Variations {
    outline?: boolean;
}

type TextElementProps = Sizes & Variations;
type InputElementProps = TextElementProps & WithIcon;
type TextAreaElementProps = TextElementProps & TextElement;
type ButtonElementProps = TextElement & Sizes & ButtonVariations

//static class
export abstract class ComponentClasses {
    public static textSize = ({ sm, md, lg, xl }: Sizes) => {
        return classNames({
            "text-sm": sm,
            "text-base": md,
            "text-lg": lg,
            "text-xl": xl
        });
    }

    public static textElementClass = ({ primary, secondary, danger, warning, success, info, sm, md, lg, xl }: TextElementProps) => {
        return classNames(this.textSize({ sm, md, lg, xl }), "placeholder:italic placeholder:text-slate-400 block bg-white w-full border rounded shadow-sm focus:outline-none focus:ring-1", {
            "border-blue-500 focus:border-blue-700 focus:ring-blue-500": primary,
            "border-slate-500 focus:border-slate-700 focus:ring-slate-500": secondary,
            "border-red-500 focus:border-red-700 focus:ring-red-500": danger,
            "border-yellow-500 focus:border-yellow-700 focus:ring-yellow-500": warning,
            "border-green-500 focus:border-green-700 focus:ring-green-500": success,
            "border-sky-500 focus:border-sky-700 focus:ring-sky-500": info,
            "px-0.5 py-0": sm,
            "px-1 py-0.5": md || lg,
            "px-2 py-1": xl,
        });
    }

    public static inputClass = ({ className, IconPresent, primary, secondary, danger, warning, success, info, sm, md, lg, xl, right, left }: InputElementProps) => {
        return classNames(className, this.textElementClass({ primary, secondary, danger, warning, success, info, sm, md, lg, xl }), {
            "pr-5": right || (IconPresent && (!right && !left)),
            "pl-5": left,
        });
    }

    public static textAreaClass = ({ className, primary, secondary, danger, warning, success, info, sm, md, lg, xl }: TextAreaElementProps) => {
        return classNames(
            className,
            this.textElementClass({ primary, secondary, danger, warning, success, info, sm, md, lg, xl }),
            this.labelSize({ sm, md, lg, xl })
        );
    }

    public static labelSize = ({ sm , md, lg, xl }: Sizes) => {
        return classNames(this.textSize({ sm, md, lg, xl }), {
            "leading-tight": sm,
            "leading-snug": md,
            "leading-normal": lg,
            "leading-relaxed": xl
        });
    }

    public static buttonClass = ({ className, primary, secondary, danger, warning, success, info, outline, sm, md, lg, xl }: ButtonElementProps) => {
        return classNames(className, this.textSize({ sm, md, lg, xl }), "border shadow rounded", {
            "bg-blue-500 hover:bg-blue-600": primary,
            "bg-slate-400 hover:bg-slate-500": secondary,
            "bg-red-500 hover:bg-red-600": danger,
            "bg-green-500 hover:bg-green-600": success,
            "bg-yellow-500 hover:bg-yellow-600": warning,
            "bg-sky-500 hover:bg-sky-600": info,
            "!bg-white": outline,
            "text-white": !outline && (primary || secondary || danger || success || warning || info),
            "text-blue-500 hover:text-blue-600 border-blue-500": outline && primary,
            "text-slate-500 hover:text-slate-600 border-slate-500": outline && secondary,
            "text-red-500 hover:text-red-600 border-red-500": outline && danger,
            "text-green-500 hover:text-green-600 border-green-500": outline && success,
            "text-yellow-500 hover:text-yellow-600 border-yellow-500": outline && warning,
            "text-sky-500 hover:text-sky-600 border-sky-500": outline && info,
            "px-0.5 py-0": sm,
            "px-1 py-0.5": md || lg,
            "px-2 py-1": xl,
        });
    }
}