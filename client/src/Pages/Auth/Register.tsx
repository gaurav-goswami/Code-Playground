import React from 'react'
import MainWrapper from '../../Wrappers/MainWrapper'
import SignUp from '../../Components/Form/SignUp'
import authBg from "../../../assets/auth-bg.png";

const Register : React.FC = () => {

  return (
    <>
        <MainWrapper>
            <div className='w-[100%] h-[95vh] flex mt-4'>
              <SignUp />

              <div className='w-[50%] h-full min-[1120px]:block hidden rounded-e-3xl overflow-hidden'>
                <img src={authBg} alt="auth-image" className='w-full h-full object-center object-cover' />
              </div>

            </div>
        </MainWrapper>
    </>
  )
}

export default Register
