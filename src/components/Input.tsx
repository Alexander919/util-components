import classNames from "classnames";
import { InputProps } from "./types/types.ts";


function Input({ primary, secondary, danger, warning, success, info, sm, md, lg, xl, className, ...rest }: InputProps) {

    const inputClass = classNames(className, "placeholder:italic placeholder:text-slate-400 block bg-white w-full border rounded shadow-sm focus:outline-none focus:ring-1", {
        "border-blue-500 focus:border-blue-700 focus:ring-blue-500": primary,
        "border-slate-500 focus:border-slate-700 focus:ring-slate-500": secondary,
        "border-red-500 focus:border-red-700 focus:ring-red-500": danger,
        "border-yellow-500 focus:border-yellow-700 focus:ring-yellow-500": warning,
        "border-green-500 focus:border-green-700 focus:ring-green-500": success,
        "border-sky-500 focus:border-sky-700 focus:ring-sky-500": info,
        "px-0.5 py-0 text-sm": sm,
        "px-1 py-0.5 text-base": md,
        "px-1 py-0.5 text-lg": lg,
        "px-2 py-1 text-xl": xl,
    });

    return (
        <input className={inputClass} {...rest} />
    );
}

export default Input;