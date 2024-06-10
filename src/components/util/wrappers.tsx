import { ReactElement } from "react";

interface labelProps {
    label?: string;
    className?: string;
    id: string;
    component: ReactElement;
}

export const ComponentWithLabel = ({ className, id, label, component }: labelProps): ReactElement => {
    if(label) {
        return (
            <div className={"flex flex-col"}>
                <label className={className} htmlFor={id}>{label}</label>
                {component}
            </div>
        );
    }
    return component;
};