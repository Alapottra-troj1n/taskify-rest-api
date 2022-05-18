import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto py-4">
        <div className="navbar-start">
        </div>
        <div className="navbar-center ">
        <Link to='/' className="btn btn-ghost normal-case font-bold text-2xl text-slate-50">taskify.</Link>
        </div>
        <div className="navbar-end">
        <Link to='/' className="btn btn-ghost normal-case  text-lg text-slate-50">Login</Link>
        </div>
      </div>
    );
};

export default Nav;