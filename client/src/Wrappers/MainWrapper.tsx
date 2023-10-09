import React from 'react'
import { IMainWrapperProps } from '../Interface/Interface'
import Navbar from '../Components/Header/Navbar';

const MainWrapper : React.FC <IMainWrapperProps> = (props) => {

    const {children} = props;

  return (
    <div className='md:w-9/12 min-h-screen max-h-max mx-auto max-w-[1400px]'>
        <Navbar />
        {children}
    </div>
  )
}

export default MainWrapper
