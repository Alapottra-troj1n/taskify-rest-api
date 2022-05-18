import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Nav = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className="navbar bg-base-100 container mx-auto py-4">
        <div className="navbar-start">
        </div>
        <div className="navbar-center ">
        <Link to='/' className="btn btn-ghost normal-case font-bold text-2xl text-slate-50">taskify.</Link>
        </div>
        <div className="navbar-end">
        {user ? <button onClick={() => signOut(auth) } className="btn btn-info text-white">Log Out</button> : <Link to='/' className="btn btn-ghost normal-case  text-lg text-slate-50">Login</Link> }
        </div>
      </div>
    );
};

export default Nav;