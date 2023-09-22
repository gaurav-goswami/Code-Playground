import React, { useState } from 'react'
import MainWrapper from '../../Wrappers/MainWrapper'
import SignUp from '../../Components/Form/SignUp'
import authBg from "../../../assets/auth-bg.png";
import Login from '../../Components/Form/Login';
import LoginWrapper from '../../Wrappers/LoginWrapper';

const Auth : React.FC = () => {

  const [isLoginPage, setIsLoginPage] = useState<boolean>(false)

  return (
    <>
      <LoginWrapper page={isLoginPage}>
          <MainWrapper>
              <div className='w-[100%] min-[1120px]:h-[95vh] relative translate-y-[50%] flex items-center p-1 min-[1120px]:translate-y-[2%] shadow-2xl shadow-gray-950-500/40 py-2'>
                
                {
                  isLoginPage ? <Login setPage={setIsLoginPage}/> : <SignUp setPage={setIsLoginPage}/>
                }

                <div className='w-[50%] h-full min-[1120px]:block hidden rounded-e-sm overflow-hidden'>
                  <img src={authBg} alt="auth-image" className='w-full h-full object-center object-cover' />
                </div>

              </div>
          </MainWrapper>
      </LoginWrapper>
    </>
  )
}

export default Auth
