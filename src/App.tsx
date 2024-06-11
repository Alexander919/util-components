import Select from "./components/Select.tsx";
import {FormEvent, useState} from "react";
import Dropdown from "./components/Dropdown.tsx";
import {Option} from "./components/Dropdown.tsx";
import Button from "./components/Button.tsx";
import Divider from "./components/Divider.tsx";
import Accordion, {Item} from "./components/Accordion.tsx";
import AccordionGrider, {ItemGrider} from "./components/AccordionGrider.tsx";

const options: Option[] = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
];

const accordionItems: Item[] = [
    {
        label: "test label",
        content: "test content"
    },
    {
        label: "another accordion label",
        content: "what a nice content"
    }
];
const accordionItemsGrider: ItemGrider[] = [
    {
        id: "kjkjkk",
        label: "test label",
        content: "test content"
    },
    {
        id: "adasdf",
        label: "another accordion label",
        content: "what a nice content"
    }
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
            <Divider text={"select"}/>
            <form action="" onSubmit={handleSubmit}>
                <Select className={"w-48"} id={"test"} name={"my_select"} options={["hello", "world", "hey", "what"]} />
                <Button id={"btn"} lg primary>Submit</Button>
            </form>
            <Divider text={"dropdown"}/>
            <Dropdown options={options} selection={selection?.label} onSelect={handleSelectDropdown} />
            <Divider text={"accordion"} />
            <Accordion items={accordionItems} />
            <Divider text={"accordion grider"}/>
            <AccordionGrider items={accordionItemsGrider}/>
        </>
    );
}

export default App
