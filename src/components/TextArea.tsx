import {TextAreaProps} from "./types/types.ts";
import {ComponentClasses} from "./util/componentClasses.ts";
import {ComponentWithLabel} from "./util/wrappers.tsx";

function TextArea({ className, label, id, sm, md, lg, xl, primary, secondary, danger, warning, success, info, ...rest }: TextAreaProps) {
    const textAreaClass = ComponentClasses.textAreaClass({ className, primary, secondary, danger, warning, success, info, sm, md, lg, xl });

    const labelClass = ComponentClasses.labelSize({ sm, md, lg, xl });

    return ComponentWithLabel({ className: labelClass, label, id, component: <textarea className={textAreaClass} {...rest} /> });
}

export default TextArea;