import React, {useReducer} from "react";
import Button from "../components/Button.tsx";
import InputV2 from "../components/InputV2.tsx";

type CounterState = {
    count: number;
}

type CounterAction1 = {
    type: "ADD-A-LOT";
    payload: number;
}

type CounterAction2 = {
    type: "INCREMENT" | "DECREMENT";
}

type CounterAction = CounterAction1 | CounterAction2;

function reducer(state: CounterState, action: CounterAction) {
    switch(action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1,
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1,
            }
        case "ADD-A-LOT":
            return {
                ...state,
                count: state.count + action.payload
            }
    }
}

function CounterPage() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const num = Number(data["add-a-lot"]);

        if(!Number.isNaN(num)) {
            dispatch({ type: "ADD-A-LOT", payload: num });
        }
        e.currentTarget.reset();
    };

    return (
        <div className={"space-y-3"}>
            <p>Current Count: {state.count}</p>
            <Button type={"button"} id={"increment"} primary lg onClick={() => dispatch({type: "INCREMENT"})}>Increment</Button>
            <Button type={"button"} id={"decrement"} primary lg onClick={() => dispatch({type: "DECREMENT"})}>Decrement</Button>

            <form onSubmit={handleSubmit}>
                <InputV2 type={"number"} label={"Add a lot"} name={"add-a-lot"} primary lg id={"add-a-lot"}/>
                <Button name={"add-it"} primary lg id={"add-it"}>Add it</Button>
            </form>
        </div>
    );
}

export default CounterPage;