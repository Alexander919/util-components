import {useState} from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export type Item = {
    label: string;
    content: string;
}

type AccordionProps = {
    items: Item[];
}

type AccordionItem = {
    id: number;
    opened: boolean;
} & Item;

function Accordion({ items }: AccordionProps) {
    const [itemsWithOpened, setItemsWithOpened] = useState<AccordionItem[]>(items.map((item, i) => ({ ...item, opened: false, id: i }) ));

    const handleOpen = (id: number) => {
        setItemsWithOpened(prevState => {
            return prevState.map(item => item.id === id ? { ...item, opened: !item.opened } : item);
        });
    };

    return (
        <div className={"w-56 bg-white space-y-1"}>
            {
                itemsWithOpened.map((item ) => {
                    return (
                        <div className={"border rounded shadow-sm"} key={item.id}>
                            <p className={"flex items-center justify-between p-1"} onClick={() => handleOpen(item.id)}>
                                {item.label}
                                {
                                    item.opened ? <FaAngleUp /> : <FaAngleDown />
                                }
                            </p>
                            {
                                item.opened &&
                                <p className={"bg-slate-100 italic"}>{item.content}</p>
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Accordion;