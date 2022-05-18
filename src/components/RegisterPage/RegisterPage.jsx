import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import Spinner from '../Spinner/Spinner';

const RegisterPage = () => {

    //firebase hooks

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const [fieldError, setFieldError] = useState('');

      const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(
        auth
      );

      //others

      const navigate = useNavigate();

      const handleCreateUser = async(e) => {
        e.preventDefault();

        const email = e.target.registerEmail.value;
        const username = e.target.registerUsername.value;
        const password = e.target.registerPassword.value;
        const confirmPassword = e.target.registerConfirmPassword.value;

        console.log(email, username, password, confirmPassword);
        if(password !== confirmPassword){

            setFieldError('Passwords do not match ! Please try again');
            return;
        }

        //will not use regex but will maintain the minimum 6 length password
        if(password.length < 6){
            setFieldError('Password must be at least contain 6 characters !')
            return;

        }

        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        await updateProfile({displayName: username});

        setFieldError('')





      }
      if(user){
          navigate('/')
      }



    return (
        <div className="my-20">
                <h2 className="text-2xl text-center text-slate-50 font-bold">Register</h2>
        <form className="mt-10 flex justify-center flex-col items-center" onSubmit={handleCreateUser}>
            <div className="bg-slate-100 p-10 md:p-20 lg:p-40 rounded-md">

            <div className="register-email-container ">
                <input className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-10" type="email" name="registerEmail" placeholder="Email" required  />
            </div>
            <div className="register-username-container mt-4">
                <input className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-10" type="text" name="registerUsername" placeholder="Username" required  />
            </div>

            <div className="register-password-container mt-4">
                <input type="password" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-sm px-2 h-10"name="registerPassword" placeholder='Password' required  />
            </div>

            <div className="register-confirm-password-container mt-4">
                <input type="password" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-sm px-2 h-10"name="registerConfirmPassword" placeholder='Confirm Password' required  />
            </div>

          

            <input type="submit" value="Register" disabled={loading ? 'true' : ''} className='btn text-slate-50 mt-4' />

            <div className="error mt-2">
            <p className="text-md text-red-500">{fieldError}</p>
            </div>
            <div className="error mt-2">
            <p className="text-md text-red-500">{error?.message}</p>
            </div>
           {loading ?  <Spinner/> : ''}
            <div className="mt-5 mb-2 text-center text-slate-600">
            <Link to="/login" className="hover:underline text-sm ">Already Have a Account ? Login </Link>
            </div>


            </div>
        
        </form>
    </div>
    );
};

export default RegisterPage;