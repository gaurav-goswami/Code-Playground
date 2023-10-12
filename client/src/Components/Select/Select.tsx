import React from "react";
import { ISelect } from "../../Interface/Interface";

const Select: React.FC<ISelect> = (props) => {
  const { children, name, change , id } = props;

  return (
    <>
      <select name={name} onChange={change} className="px-3 py-2 cursor-pointer bg-[#1c1f1f] text-white rounded-md h-[40px]" id={id}>
        {children}
      </select>
    </>
  );
};

export default Select;
