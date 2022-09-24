import React from 'react'
import auth from '../../firebase.init';
import './Login.css'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleIcon from '../../assets/googleIcon.png'
import { useForm } from "react-hook-form";
import Loading from './Loading';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    if(gloading || loading){
        return <Loading></Loading>
    }
      
        let loginError;

        if(gerror || error){
            loginError =<p className='text-sm text-red-600'>{error?.message || gerror?.message} </p>
        }

    const onSubmit = data =>{
       signInWithEmailAndPassword(data.email,data.password)
       console.log(data);
      
    };
    
    
  return (
    <>
        <div className="login-background relative flex justify-center">
                <div className="login-box bg-white absolute shadow-md pt-10 mt-10 pl-7 pr-10 pb-16 w-[90%] md:w-[70%] lg:w-[35%]">
                    <h2 className='text-2xl font-semibold mb-7'>Please SignUp!!</h2>
                    <div onClick={() => signInWithGoogle()} className="border flex justify-center">
                    <img className='w-10' src={googleIcon} alt="" />
                    <button className='py-2 pr-10 pl-5 font-medium'> Continue With Google</button>
                    </div>
                    <div className="divider my-7">OR</div>

                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
     
     <input
       type="text"
       className=" pl-3 py-[10px] placeholder-black form-control w-full bg-transparent border border-2 outline-none text-sm text-black font-medium mb-5 focus:border-secondary"
       placeholder="Your Name"
       {...register("name", {
         required: {
           value: true,
           message: "Name must be Required",
         }
       })}
     />
     <div className="mb-2">
       {errors.name?.type === "required" && (
         <p className="text-sm text-red-600 mb-2 ">
           {errors.name.message}
         </p>
       )}
      
     </div>
     <input
       type="email"
       className=" pl-3 py-[10px] placeholder-black form-control w-full bg-transparent border border-2 outline-none text-sm text-black font-medium mb-5 focus:border-secondary"
       placeholder="Your Email"
       {...register("email", {
         required: {
           value: true,
           message: "Email must be Required",
         },
         pattern: {
           value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
           message: "Enter Valid Email",
         },
       })}
     />
     <div className="mb-2">
       {errors.email?.type === "required" && (
         <p className="text-sm text-red-600 mb-2 ">
           {errors.email.message}
         </p>
       )}
       {errors.email?.type === "pattern" && (
         <p className="text-sm text-red-600 mb-2 ">
           {errors.email.message}
         </p>
       )}
     </div>
   

  
     <input
       type="password"
       className="pl-3 py-[10px] placeholder-black form-control w-full bg-transparent border border-2 outline-none text-sm text-black font-medium mb-2 focus:border-secondary "
       placeholder="Your Password"
       {...register("password", {
         required: {
           value: true,
           message: "Password must be Required",
         },
         minLength: {
           value: 6,
           message: "Password must be min six character",
         },
       })}
     />

     <div className=" mb-2 ">
       {errors.password?.type === "required" && (
         <p className="text-sm text-red-600 mb-2 ">
           {errors.password.message}
         </p>
       )}
       {errors.password?.type === "minLength" && (
         <p className="text-sm text-red-600">
           {errors.password.message}
         </p>
       )}
     </div>
        { loginError}
       
  <input type="submit" value="Sign-Up" className="w-full bg-primary text-white hover:opacity-70 cursor-pointer font-semibold px-4 py-2 mt-3 mb-5" />
 </form>
 <div className="flex justify-between">
    <p className='font-medium text-gray-500'>Already Have an account?</p>
    <Link to='/login' className='text-meduim link text-secondary'>Please Login.</Link>
 </div>
        </div>
        </div>
    </>
  )
}

export default SignUp
