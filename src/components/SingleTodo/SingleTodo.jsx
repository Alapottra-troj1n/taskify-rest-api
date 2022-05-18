import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa';

const SingleTodo = ({task}) => {
    return (
        <div >

            <div className="flex flex-col lg:flex-row items-center border-2 rounded-md p-4 gap-3 bg-slate-50 justify-between">


                <div className=" sm:flex justify-end md:justify-center">
                    <h2 className="font-normal text-center text-xs lg:text-sm w-24 md:w-48 text-slate-500">{task.taskName}</h2>
                </div>

                <div className="mx-4">
                    <h2 className="font-semibold text-slate-500 text-sm lg:text-lg text-left">{task.taskDes}</h2>
                </div>
                <hr />

                <div className="ml-2 flex flex-col lg:flex-row">
                    <button className="mx-3 mb-2 lg:mb-0"><FaCheckCircle className="lg:text-2xl text-green-400 hover:text-green-600" /></button>
                    <button className="mx-3 mb-2 lg:mb-0"><FaTrashAlt className="lg:text-lg text-red-400 hover:text-red-600" /></button>

                </div>


            </div>

        </div>
    );
};

export default SingleTodo;