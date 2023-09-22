import React from 'react'
import { ITabProps } from '../../Interface/Interface'

const Tab : React.FC <ITabProps> = (props) => {

  const {children, style, setTab} = props;

  return (
    <>
        <button className={`${style} w-[50%] px-2 py-2.5 rounded-md text-white font-lato tracking-wider`} onClick={setTab}>{children}</button>
    </>
  )
}

export default Tab
