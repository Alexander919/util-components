import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";

type SelectProps = {
    id: string;
    name: string;
    options: string[];
    defaultValue?: string;
}

function Select({ id, name, options, defaultValue = "" }: SelectProps) {
    const [selectedOption, setSelectedOption] = useState<string>(defaultValue);
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [opened, setOpened] = useState<boolean>(false);

    return (
        <div className={"relative"} id={id}>
            <div className={"m-1 bg-white flex items-center justify-between w-full border rounded p-1"} onClick={() => setOpened(prevState => !prevState)}>
                <p>{ isSelected ? selectedOption : "Select..." }</p>
                <p>{ opened ? <FaAngleUp/> : <FaAngleDown /> }</p>
            </div>
            {
                opened &&
                <ul className={"absolute bg-white w-full border rounded p-1 m-1"}>
                    {
                        options.map((option, index) => {
                            return (
                                <li
                                    key={index}
                                    onMouseEnter={(e) => e.currentTarget.classList.add("bg-slate-200")}
                                    onMouseLeave={(e) => e.currentTarget.classList.remove("bg-slate-200")}
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