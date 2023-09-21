import React from 'react'
import { IFormWrapper } from '../Interface/Interface'

const FormWrapper : React.FC <IFormWrapper> = (props) => {

    const {children} = props;

  return (
    <>
        <div className="flex h-[95vh] justify-center items-center min-[1120px]:bg-white min-[1120px]:w-[50%] w-full rounded-s-3xl flex-col gap-4 min-[1120px]:gap-2">
            {children}
        </div>
    </>
  )
}

export default FormWrapper
