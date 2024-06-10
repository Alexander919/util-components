import { useReducer } from 'react';
import { PasswordProps } from "./types/types.ts";
import { PiEye } from "react-icons/pi";
import { PiEyeClosed } from "react-icons/pi";
import {IconType} from "react-icons";
import InputV2 from "./InputV2.tsx";

interface State {
    showPassword: boolean;
    icon: IconType;
    inputType: "password" | "text"
}

interface Action {
    type: "show" | "hide";
}

function reducer(_state: State, action: Action): State {
    switch(action.type) {
        case "show":
            return { showPassword: true, icon: PiEye, inputType: "text" };
        case "hide":
            return { showPassword: false, icon: PiEyeClosed, inputType: "password" };
        default:
            throw new Error(`action ${action.type} not recognized!`);
    }
}

const initialState: State = {
    showPassword: false,
    icon: PiEyeClosed,
    inputType: "password"
};

function PasswordInputV2(props: PasswordProps) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIconClick = () => {
        dispatch(state.showPassword ? { type: "hide" } : { type: "show" });
    }
    return (
        <InputV2 icon={{ IconElement: state.icon, pos: "right", onClick: handleIconClick }} {...props} type={state.inputType} />
    );
}

export default PasswordInputV2;