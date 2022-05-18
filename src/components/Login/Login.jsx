import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


      const location = useLocation();
      const navigate = useNavigate();
      const [signInWithGoogle, googleUser,  googleLoading, googleError] = useSignInWithGoogle(auth);
      let from = location.state?.from?.pathname || "/";


      const handleLogin = async(e) => {
        e.preventDefault();

        const email = e.target.loginEmail.value;
        const password = e.target.loginPassword.value;

       await signInWithEmailAndPassword(email, password);
      
    }
    if(user || googleUser){
        navigate('/')
    }





    return (
        <div className="my-20">
        <h2 className="text-2xl text-center text-red-400 font-semibold">Access Requires Login</h2>
        <form className="mt-10 flex justify-center flex-col items-center text-slate-600" onSubmit={handleLogin}>
           
            <div className="bg-slate-100 p-10 md:p-20 lg:p-40 rounded-md">
            <div className="login-email-container">
                <input className=" bg-gray-200 border rounded-sm w-full md:w-72 lg:w-96 px-2 h-10" type="email" name="loginEmail" placeholder="Email" required  />
            </div>
            <div className="login-password-container mt-4">
                <input type="password" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-sm px-2 h-10"name="loginPassword" placeholder='Password' required />
            </div>

            <div className="mt-2">
            <Link to="/resetpassword" className="hover:underline text-sm ">Forget Password ?</Link>
            </div>
          

            <input type="submit" value="Login" disabled={loading ? 'true' : ''} className='btn text-slate-50 mt-2' />

            <div className="my-2">
            {loading ? <Spinner/>: ''}
           <p className='tex-md text-red-500'>{error?.message}</p> 
           <p className='tex-md text-red-500'>{googleError?.message}</p> 
            </div>

            <div className="mt-5 mb-2 text-center">
            <Link to="/register" className="hover:underline text-sm ">Don't Have a Account ? Register Here </Link>
            </div>
            <div class="divider">OR</div>

            <div className='mt-2 text-center'>
                <button className='btn text-slate-700 btn-outline px-10' onClick={()=>
                    signInWithGoogle()
                } >Sign In with Google <FaGoogle className="text-xl ml-2"/> </button>

            </div>

            </div>
        
        </form>
    </div>
    );
};

export default Login;