import React from 'react'
import auth from '../../firebase.init';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <>
        <div className="login-background relative flex justify-center">
                <div className="login-box bg-white absolute shadow-md pt-10 mt-10">
                    <h2 className='text-2xl font-semibold'>Please Login!!</h2>
                </div>
        </div>
    </>
  )
}

export default Login
