import classNames from "classnames";
import {DividerProps} from "./types/types.ts";

function Divider({ className, text }: DividerProps) {
    const hrClass = classNames(className, "flex items-center before:border-t after:border-t before:border-slate-300 after:border-slate-300 before:flex-1 after:flex-1", {
        "before:mr-3 after:ml-3 text-sm font-semibold": text
    });

    return (
        <div className={hrClass}>{text}</div>
    );
}

export default Divider;