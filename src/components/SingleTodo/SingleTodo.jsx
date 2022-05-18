import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa';

const SingleTodo = () => {
    return (
        <div >

            <div className="flex items-center border-2 rounded-md p-4 bg-slate-50 justify-between">


                <div className=" sm:flex justify-end md:justify-center hidden">
                    <h2 className="font-normal text-xs lg:text-sm w-24 md:w-48 ">TaskName</h2>
                </div>

                <div className="mx-4">
                    <h2 className="font-semibold text-sm lg:text-lg text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ratione nihil impedit id. Consequuntur quos expedita, magnam aliquid, dolorem quisquam necessitatibus ratione assumenda dolor illum blanditiis libero fugit dolores nam!</h2>
                </div>

                <div className="ml-2 flex flex-col lg:flex-row">
                    <button className="mx-3 mb-2 lg:mb-0"><FaCheckCircle className="lg:text-2xl text-green-400 hover:text-green-600" /></button>
                    <button className="mx-3 mb-2 lg:mb-0"><FaTrashAlt className="lg:text-lg text-red-400 hover:text-red-600" /></button>

                </div>


            </div>

        </div>
    );
};

export default SingleTodo;