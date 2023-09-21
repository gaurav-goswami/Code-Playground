import React, { useState } from 'react'
import MainWrapper from '../../Wrappers/MainWrapper'
import SignUp from '../../Components/Form/SignUp'
import authBg from "../../../assets/auth-bg.png";
import Login from '../../Components/Form/Login';

const Auth : React.FC = () => {

  const [isLoginPage, setIsLoginPage] = useState<boolean>(false)

  return (
    <>
        <MainWrapper>
            <div className='w-[100%] h-[95vh] flex mt-4'>
              
              {
                isLoginPage ? <Login setPage={setIsLoginPage}/> : <SignUp setPage={setIsLoginPage}/>
              }

              <div className='w-[50%] h-full min-[1120px]:block hidden rounded-e-3xl overflow-hidden'>
                <img src={authBg} alt="auth-image" className='w-full h-full object-center object-cover' />
              </div>

            </div>
        </MainWrapper>
    </>
  )
}

export default Auth
