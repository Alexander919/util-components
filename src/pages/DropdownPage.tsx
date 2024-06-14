import Dropdown, {Option} from "../components/Dropdown.tsx";
import {useState} from "react";

const options: Option[] = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
];

function DropdownPage() {
    const [selection, setSelection] = useState<Option | null>(null);

    const handleSelectDropdown = (option: Option) => {
        setSelection(option);
        console.log(option);
    };

    return (
        <div className={"flex"}>
            <Dropdown options={options} selection={selection?.label} onSelect={handleSelectDropdown} />
            <Dropdown options={options} selection={selection?.label} onSelect={handleSelectDropdown} />
        </div>
    );
}

export default DropdownPage;