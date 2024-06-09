import Select from "./components/Select.tsx";
import {FormEvent, useState} from "react";
import Dropdown from "./components/Dropdown.tsx";
import {Option} from "./components/Dropdown.tsx";

const options: Option[] = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
];

function App() {
    const [selection, setSelection] = useState<Option | null>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const data  = Object.fromEntries(form);
        console.log(data);
    };

    const handleSelectDropdown = (option: Option) => {
        setSelection(option);
        console.log(option);
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <Select id={"test"} name={"my_select"} options={["hello", "world", "hey", "what"]} />
                <button type="submit">Submit</button>
            </form>
            <hr/><br/>
            <Dropdown options={options} selection={selection?.label} onSelect={handleSelectDropdown} />
            <Dropdown options={options} selection={selection?.label} onSelect={handleSelectDropdown} />
        </>
    );
}

export default App
