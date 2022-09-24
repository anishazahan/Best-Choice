import React from 'react'
import auth from '../../firebase.init';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleIcon from '../../assets/googleIcon.png'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
  return (
    <>
        <div className="login-background relative flex justify-center">
                <div className="login-box bg-white absolute shadow-md pt-10 mt-10 pl-7 pr-10 pb-14">
                    <h2 className='text-2xl font-semibold mb-7'>Please Login!!</h2>
                    <div onClick={() => signInWithGoogle()} className="border flex">
                    <img className='w-10' src={googleIcon} alt="" />
                    <button className='py-2 pr-10 pl-5 font-medium'> Continue With Google</button>
                    </div>
                    <div className="divider">OR</div>
                </div>
        </div>
    </>
  )
}

export default Login
