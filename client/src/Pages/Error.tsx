import React from 'react'
import MainWrapper from '../Wrappers/MainWrapper'
import NavigationButton from '../Components/Button/NavigationButton'

const Error : React.FC = () => {
  return (
    <>
      <MainWrapper>
        <div className='flex items-center justify-center gap-6 h-screen flex-col'>
          <span className='text-white font-inconsolata text-xl'>404 Page Not Found</span>
          <NavigationButton path='/' style='text-white text-lg font-inconsolata px-6 py-1.5 border border-[#35fb7b] hover:bg-[#35fb7b] hover:text-black rounded-sm tracking-wider'>
            Back To Home
          </NavigationButton>
        </div>
      </MainWrapper>
    </>
  )
}

export default Error
