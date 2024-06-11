import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";

type SelectProps = {
    id: string;
    name: string;
    options: string[];
    defaultValue?: string;
    className?: string;
}

function Select({ id, name, options, defaultValue = "", className }: SelectProps) {
    const [selectedOption, setSelectedOption] = useState<string>(defaultValue);
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [opened, setOpened] = useState<boolean>(false);

    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if(selectRef.current?.contains(e.target as Element)) {
                console.log("inside select");
            } else {
                console.log("outside select");
                setOpened(false);
            }
        };
        document.addEventListener("click", handleClick, true);

        return () => document.removeEventListener("click", handleClick, true);
    }, []);

    const selectClasses = classNames("relative", className);

    return (
        <div ref={selectRef} className={selectClasses} id={id}>
            <div className={"bg-white flex items-center justify-between border rounded p-1"} onClick={() => setOpened(prevState => !prevState)}>
                <p>{ isSelected ? selectedOption : "Select..." }</p>
                <p>{ opened ? <FaAngleUp/> : <FaAngleDown /> }</p>
            </div>
            {
                opened &&
                <ul className={"z-10 absolute bg-white border rounded p-1 w-full"}>
                    {
                        options.map((option, index) => {
                            return (
                                <li
                                    className={"hover:bg-slate-200 cursor-pointer"}
                                    key={index}
                                    onClick={() => {setSelectedOption(option); setIsSelected(true); setOpened(false)}}
                                >
                                    {option}
                                </li>
                            );
                        })
                    }
                </ul>
            }
            <input name={name} type="hidden" value={selectedOption}/>
        </div>
    );
}

export default Select;