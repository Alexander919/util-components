import {useEffect, useRef, useState} from "react";
import {GoChevronDown} from "react-icons/go";
import Panel from "./Panel.tsx";

export type Option = { value: string; label: string };

type DropdownProps = {
    options: Option[];
    onSelect: (option: Option) => void;
    selection?: string;
}

function Dropdown({ options, onSelect, selection }: DropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const docClickHandler = (e: MouseEvent) => {
            if(e.target instanceof Element) {
                if(dropdownRef.current?.contains(e.target)) {
                    console.log("inside dropdown");
                } else {
                    console.log("outside dropdown");
                    setIsOpen(false);
                }
            }
        };
        document.addEventListener("click", docClickHandler, true); //capturing phase is important here(although in this particular case does not change anything) because when we click on one of the dropdown items it still exists(the dropdown is opened); in bubbling phase it would have been null - when we reach the top of the document it is already unloaded(by handleOptionClick)

        return () => document.removeEventListener("click", docClickHandler, true);
    }, []);

    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleOptionClick = (option: Option) => {
        setIsOpen(false);
        onSelect(option);
    };

    const renderedOptions = options.map(option => {
        return (
            <div className={"hover:bg-sky-100 rounded cursor-pointer p-1"} key={option.value} onClick={() => handleOptionClick(option)}>{option.label}</div>
        );
    });

    return (
        <div ref={dropdownRef} className={"w-48 relative"}>
            <Panel className={"flex justify-between items-center cursor-pointer"} onClick={handleClick}>
                { selection ?? "Select..." }
                <GoChevronDown />
            </Panel>
            {
                isOpen &&
                <Panel className={"absolute top-full"}>
                    {renderedOptions}
                </Panel>
            }
        </div>
    );
}

export default Dropdown;