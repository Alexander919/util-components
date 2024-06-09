import React from "react";
import {IconType} from "react-icons";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

interface EventListeners<T> {
    // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // onClick?: (event: React.MouseEvent) => void;
    // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<T>) => void;
    onChange?: (event: React.ChangeEvent<T>) => void;
    onSubmit?: (event: React.FormEvent<T>) => void;
}

interface Sizes {
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
}

interface Variations {
    primary: boolean;
    secondary: boolean;
    danger: boolean;
    success: boolean;
    warning: boolean;
    info: boolean;
}

interface Position {
    left?: boolean;
    center?: boolean;
    right?: boolean;
}
//INPUT PROPS
interface RestInputProps extends Props {
    id: string;
    name: string;
    type?: "text" | "password" | "email" | "number" | "tel" | "url";
    value?: string | number;
    placeholder?: string;
}

interface RestPasswordInputProps extends RestInputProps {
    type?: never;
    label?: string;
}
//END INPUT PROPS


//*****BUTTON PROPS*******

interface ButtonIcon {
    IconElement: IconType;
    pos: "right" | "left";
    corner?: boolean;
    className?: string;
}
type ButtonIconEmpty = Partial<Record<keyof ButtonIcon, never>>;
// import { PiEyeglasses } from "react-icons/pi";
//icon can be present on its own OR with pos BUT corner can't be present on its own or with icon.
type ButtonIconProps = ButtonIconEmpty | ({ pos?: never, corner?: never } & Omit<ButtonIcon, "pos" | "corner">) | ({ corner?: never } & Omit<ButtonIcon, "corner">) | ButtonIcon;

// const btnIcon: ButtonIconPropsDep = {
//     icon: PiEyeglasses,
//     pos: "right",
//     // corner: true,
//     className: "jj"
// }

interface RestButtonProps extends Props {
    id: string;
    name?: string;
    value?: string;
    type?: "button" | "submit" | "reset";
    outline?: boolean;
    icon?: ButtonIconProps
}

//*****BUTTON PROPS END********

interface RestLabelProps extends Props {
    label: string;
    htmlFor: string;
}

interface RestIconProps extends Props {
    I: IconType
}

//************INPUT PROPS VERSION 2*****************
// interface InputV2IconProps {
//     IconElement: IconType;
//     onClick?: (event: React.MouseEvent<SVGElement>) => void;
//     className?: string;
// }
// //IconElement can be on its own OR with position OR no IconElement and no position is present; onIconClick and className can't be on their own
// type IconPos = Omit<Position, "center">;
//
// //right and left are undefined(not present)
// type NoPos = Partial<Record<keyof IconPos, undefined>>;
//
// //--possible collection of icon props--
// //icon is present but no position
// type IconNoPos = InputV2IconProps & NoPos
// //position is present and icon is present
// type PosWithIcon = ExactlyOne<IconPos, keyof IconPos> & InputV2IconProps;
// //no icon and no position present; intersection with 'never' is required to avoid error during destructuring, typescript complains that 'property' is not found; can be because of the one of the intersections might not contain the property prop;
// type NoIconNoPos = Omit<InputV2IconProps, "IconElement" | "onClick" | "className"> & { IconElement?: never, onClick?: never, className?: never } & NoPos;
// //----
// type IconAloneOrPosWithIconOrNoIcon = (IconNoPos | PosWithIcon | NoIconNoPos);
//
// //for the icon that is part of the RestInputPropsV2 which is a part of the InputPropsV2
// type IconPropsV2 = IconAloneOrPosWithIconOrNoIcon;

// const example1: IconPropsV2 = {
//     IconElement: PiEyeClosed,
//     right: true, //right or left is possible
//     onClick: () => {},
//     className: "text-xl"
// }

////VERSION 2.1 (icon is a separate object passed to the InputV2 as a prop)

interface InputV2IconProps {
    IconElement: IconType;
    pos?: "right" | "left";
    onClick?: (event: React.MouseEvent<SVGElement>) => void;
    className?: string;
}
// type IconPropsV2 = InputV2IconProps | Omit<InputV2IconProps, | "IconElement" | "onClick" | "pos" | "className"> & { IconElement?: never, onClick?: never, pos?: never, className?: never };
type IconPropsV2 = InputV2IconProps | Partial<Record<keyof InputV2IconProps, never>>;//{ IconElement?: never, onClick?: never, pos?: never, className?: never };

// import { PiEyeClosed } from "react-icons/pi";
// const example2: IconPropsV2 = {
//     IconElement: PiEyeClosed,
//     pos: "right",
//     onClick: () => {},
//     className: "text-xl"
// }

//***********END INPUT PROPS VERSION 2***************

interface RestInputPropsV2 extends RestInputProps {
    label?: string;
    icon?: IconPropsV2;
}

interface RestTextAreaProps extends RestInputPropsV2 {
    type?: never;
    icon?: never;
    cols?: number;
    rows?: number;
}

type ExactlyOne<T, K extends keyof T> = {
    [P in K]: Pick<T, P> & Partial<Record<Exclude<K, P>, never>>;
}[K]

export type ExactlyOneSize = ExactlyOne<Sizes, keyof Sizes>;
type ExactlyOneVariation = ExactlyOne<Variations, keyof Variations>;
type ExactlyOnePosition = ExactlyOne<Position, keyof Position>;
export type ExactlyOneSizeAndVariation = ExactlyOneSize & ExactlyOneVariation;

export type InputProps = ExactlyOneSizeAndVariation & RestInputProps & EventListeners<HTMLInputElement>;
//label and icon can be provided to the InputV2 element
export type InputPropsV2 = ExactlyOneSizeAndVariation & EventListeners<HTMLInputElement> & RestInputPropsV2;
export type TextAreaProps = ExactlyOneSizeAndVariation & EventListeners<HTMLTextAreaElement> & RestTextAreaProps;

export type ButtonProps = ExactlyOneSizeAndVariation & RestButtonProps & EventListeners<HTMLButtonElement>;
export type LabelProps = ExactlyOnePosition & ExactlyOneSize & RestLabelProps;
export type IconProps = ExactlyOnePosition & RestIconProps & EventListeners<SVGSVGElement>; //for the Icon element
export type PasswordProps = ExactlyOneSizeAndVariation & RestPasswordInputProps & EventListeners<HTMLInputElement>;

export interface DividerProps {
    className?: string;
    text?: string;
}
// import { PiEyeClosed } from "react-icons/pi";
// const testV2: InputPropsV2 = {
//     primary: true,
//     lg: true,
//     id: "asdf",
//     name: "aawwqq",
//     icon: PiEyeClosed
// }