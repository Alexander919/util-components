import classNames from "classnames";
import {ComponentPropsWithoutRef} from "react";

type PanelProps = ComponentPropsWithoutRef<"div">;

// const Panel = forwardRef<HTMLDivElement, PanelProps>(({ children, className, ...rest }, ref) => {
//     const finalClassNames = classNames("border rounded p-3 shadow bg-white w-full", className);
//
//     return (
//         <div ref={ref} {...rest} className={finalClassNames}>{children}</div>
//     );
// });
const Panel = ({ children, className, ...rest }: PanelProps) => {
    const finalClassNames = classNames("border rounded p-3 shadow bg-white w-full", className);

    return (
        <div {...rest} className={finalClassNames}>{children}</div>
    );
};

export default Panel;