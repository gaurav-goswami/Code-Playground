import { IconType } from "react-icons"

export interface IMainWrapperProps {
    children : React.ReactNode
}

export interface IFormWrapper extends IMainWrapperProps {}

export interface ILoginWrapper extends IMainWrapperProps {
    page : boolean
}

export interface INavigationButtonProps {
    children : string
    path : string
    style : string
}

export interface ICustomInputProps {
    type : string
    name : string
    value : string
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void
    placeholder ?: string
    required ?: boolean
    style ?: string
    autocomplete ?: string
    icon ?: IconType
}

export interface IRegisterUserState {
    username : string,
    email : string,
    password : string
}

export interface ISignInUserState {
    email : string,
    password : string
}   

export interface ICTAButtonProps {
    children : React.ReactNode
    style ?: string
}

export interface ISignUpProps {
    setPage : (x : boolean) => void
}

export interface ISignInProps {
    setPage : (x : boolean) => void
}

