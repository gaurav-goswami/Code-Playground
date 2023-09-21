import React from 'react'
import { ICTAButtonProps } from '../../Interface/Interface'

const CTAButton : React.FC <ICTAButtonProps> = (props) => {

  const {children, style} = props;

  return (
    <>
        <button className={`px-2 py-1 border border-green-500 text-center font-inconsolata text-lg tracking-wider rounded-sm transition-all duration-150 hover:bg-green-500 hover:text-white ${style}`}>
            {children}
        </button>
    </>
  )
}

export default CTAButton
