import Select from "../components/Select.tsx";
import Button from "../components/Button.tsx";
import {FormEvent} from "react";

function SelectPage() {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const data  = Object.fromEntries(form);
        console.log(data);
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <Select className={"w-48"} id={"test"} name={"my_select"} options={["hello", "world", "hey", "what"]}/>
            <Button id={"btn"} lg primary>Submit</Button>
        </form>
)
    ;
}

export default SelectPage;