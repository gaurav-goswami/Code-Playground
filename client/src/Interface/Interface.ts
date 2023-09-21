export interface IMainWrapperProps {
    children : React.ReactNode
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
}

export interface IRegisterUserState {
    username : string,
    email : string,
    password : string
}

export interface ICTAButtonProps {
    children : React.ReactNode
    style ?: string
}