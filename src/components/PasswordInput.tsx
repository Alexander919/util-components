import Input from "./Input.tsx";
import Icon from "./Icon.tsx";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IconType } from "react-icons";

import React, { useReducer } from "react";

import { PasswordProps } from "./types/types.ts";
import { getSize } from "./util/util.ts";

import Label from "./Label.tsx";

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
            return { showPassword: true, icon: FaEye, inputType: "text"};
        case "hide":
            return { showPassword: false, icon: FaEyeSlash, inputType: "password" };
        default:
            throw new Error(`Unhandled type ${action.type}`);
    }
}

const initialState: State = {
    showPassword: false,
    icon: FaEyeSlash,
    inputType: "password"
};

function PasswordInput({ id, name, label, sm, md, lg, xl, ...rest }: PasswordProps) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const size = getSize(sm, md, lg, xl);

    const handleClick = () => {
        dispatch(state.showPassword ? { type: "hide" } : { type: "show" });
    };

    const wrapWithLabel = (content: React.ReactNode) => {
        return label ? <Label htmlFor={id} label={label} {...size}>{content}</Label> : content;
    };

    const content: React.ReactNode = (
        <Icon I={state.icon} right onClick={handleClick}>
            <Input type={state.inputType} id={id} name={name} {...size} {...rest} />
        </Icon>
    );

    return wrapWithLabel(content);
}


export default PasswordInput;