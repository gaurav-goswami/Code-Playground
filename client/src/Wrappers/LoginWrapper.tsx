import React from 'react'
import { ILoginWrapper } from '../Interface/Interface';

const LoginWrapper : React.FC <ILoginWrapper> = (props) => {

    const {children, page} = props;

  return (
    <>
        <div className='w-screen min-h-screen max-h-max bg-white relative'>
          <div className={`hidden min-[1120px]:block absolute top-0 bottom-0 w-[25%] ${page ? 'bg-blue-600' : 'bg-[#1aebb6]'} z-20 opacity-70 right-0`}/>
            {children}
        </div>
    </>
  )
}

export default LoginWrapper
