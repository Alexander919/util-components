import {useState} from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export type ItemGrider = {
    id: string;
    label: string;
    content: string;
}

type AccordionGriderProps = {
    items: ItemGrider[];
}

function AccordionGrider({ items }: AccordionGriderProps) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleExpandedIndex = (newIndex: number) => {
        setExpandedIndex(prevState => prevState === newIndex ? -1 : newIndex);
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = (
            <span>
                { isExpanded ? <GoChevronDown /> : <GoChevronLeft /> }
            </span>
        );

        return (
            <div key={item.id}>
                <div className={"flex items-center p-3 bg-gray-50 border-b cursor-pointer justify-between"} onClick={() => handleExpandedIndex(index)}>
                    {item.label}
                    {icon}
                </div>
                {
                    isExpanded &&
                    <div className={"border-b p-5 "}>{item.content}</div>
                }
            </div>
        );
    });

    return (
        <div className={"border-x border-t rounded"}>
            {renderedItems}
        </div>
    );
}

export default AccordionGrider;