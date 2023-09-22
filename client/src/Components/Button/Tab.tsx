import React from 'react'
import { ITabProps } from '../../Interface/Interface'

const Tab : React.FC <ITabProps> = (props) => {

  const {children, style} = props;

  return (
    <>
        <button className={`${style} w-[50%] px-2 py-2.5 rounded-md text-white font-lato tracking-wider bg-[#282a2a]`}>{children}</button>
    </>
  )
}

export default Tab
