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

export interface ITabProps {
    children : React.ReactNode
    style ?: string
    setTab : () => void
}

export interface IUuidGenerate {
    () : Promise<string>
}

export interface IChangeHandler {
    <T>(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, setter: React.Dispatch<React.SetStateAction<T>>, state: T): void;
}

export interface ICreatePlayground {
    roomId : string,
    roomPassword : string
}

export interface IEditorOption {
    theme : string,
    mode : string
}

export interface ISelect {
    children : React.ReactNode
    name : string,
    change : (e : React.ChangeEvent<HTMLSelectElement>) => void
}