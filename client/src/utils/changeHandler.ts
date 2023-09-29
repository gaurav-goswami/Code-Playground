import { IChangeHandler } from "../Interface/Interface";

const changeHandler: IChangeHandler = (e, setter, state) => {
  const { name, value } = e.target;
  setter({ ...state, [name]: value });
};

export default changeHandler;
