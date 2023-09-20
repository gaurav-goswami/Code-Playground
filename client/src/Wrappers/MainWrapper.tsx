import React from 'react'
import { IMainWrapperProps } from '../Interface/Interface'

const MainWrapper : React.FC <IMainWrapperProps> = (props) => {

    const {children} = props;

  return (
    <div className='md:w-9/12 min-h-screen max-h-max mx-auto w-11/12'>
        {children}
    </div>
  )
}

export default MainWrapper
