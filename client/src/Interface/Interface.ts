import { IconType } from "react-icons";

export interface IMainWrapperProps {
  children: React.ReactNode;
}

export interface IFormWrapper extends IMainWrapperProps {}

export interface ILoginWrapper extends IMainWrapperProps {
  page: boolean;
}

export interface INavigationButtonProps {
  children: string;
  path: string;
  style: string;
}

export interface ICustomInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  style?: string;
  autocomplete?: string;
  icon?: IconType;
}

export interface IRegisterUserState {
  username: string;
  email: string;
  password: string;
  otp?: string | number;
}

export interface ISignInUserState {
  email: string;
  password: string;
}

export interface ICTAButtonProps {
  children: React.ReactNode;
  style?: string;
  disable ?: boolean;
  fn?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ISignUpProps {
  setPage: (x: boolean) => void;
}

export interface ISignInProps {
  setPage: (x: boolean) => void;
}

export interface ITabProps {
  children: React.ReactNode;
  style?: string;
  setTab: () => void;
}

export interface IUuidGenerate {
  (): Promise<string>;
}

export interface IChangeHandler {
  <T>(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    setter: React.Dispatch<React.SetStateAction<T>>,
    state: T
  ): void;
}

export interface ICreatePlayground {
  roomId: string | any;
  roomPassword : string | any;
}

export interface IEditorOption {
  theme: string;
  mode: string;
}

export interface ISelect {
  children: React.ReactNode;
  name: string;
  change: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id ?: string
}

export interface IMember {
  username: string;
}

// service interfaces

export interface ISendOtpRequestBody {
  email: string;
}

export interface ISendOtpResponseBody {
  success: boolean;
  status?: number;
  message: string;
}

export interface ISignUpRequestBody {
  username: string;
  email: string;
  password: string;
  otp : string
}

export interface ISignUpResponseBody {
  success?: boolean;
  status?: number;
  message?: string;
}

export interface ILoginRequestBody {
  email: string;
  password: string;
}

export interface ILoginResponseBody {
  success: boolean;
  status: number;
  message: string;
  username?: string;
}

export interface ICreatePlaygroundResponseBody {
  success ?: boolean
  message ?: string
}

export interface ICreatePlaygroundRequestBody {
  roomId : string | any,
  roomPassword : string | any
}

export interface IJoinPlaygroundRequestBody extends ICreatePlaygroundRequestBody {}

export interface ILeavePlaygroundResponseBody extends ICreatePlaygroundResponseBody {}

export interface IJoinPlaygroundResponseBody extends ICreatePlaygroundResponseBody {}

// api function interfaces

export interface ICommonInterface {
  setDisable: (x: boolean) => void;
  navigate: (to: string) => void;
}

export interface ISendOtp extends ICommonInterface {
  otpFunc: (userDetails: any) => void | any;
  userDetails: IRegisterUserState;
}

export interface ISignupUser extends ICommonInterface {
  signUpFunc: (userDetails: any) => void | any;
  userDetails: IRegisterUserState | null;
}

export interface ILoginUser extends ICommonInterface {
  loginFunc: (userDetails: any) => void | any;
  userDetails: ISignInUserState;
}

export interface IPlaygroundCommonFnParam {
  (
    createPlaygroundFn: (playgroundDetails: ICreatePlayground) => Promise<unknown> | any,
    playgroundDetails: ICreatePlayground,
    setDisable: (x: boolean) => void,
    navigate: (path: string) => void
  ): void;
}

export interface ILeavePlayground {
  (
    leavePlaygroundFn : (playgroundId : string | any) => Promise<any | unknown> | any,
    playgroundId : string | undefined,
    setDisable: (x: boolean) => void,
    navigate: (path: string) => void
  ) : void;
}