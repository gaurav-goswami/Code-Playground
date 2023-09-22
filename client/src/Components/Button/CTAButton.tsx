import React from 'react'
import { ICTAButtonProps } from '../../Interface/Interface'

const CTAButton : React.FC <ICTAButtonProps> = (props) => {

  const {children, style} = props;

  return (
    <>
        <button className={`${style} px-2 py-1 border text-center font-inconsolata text-lg tracking-wider rounded-sm transition-all duration-150 hover:text-white`}>
            {children}
        </button>
    </>
  )
}

export default CTAButton
