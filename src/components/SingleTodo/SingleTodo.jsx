import React from 'react';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SingleTodo = ({ task }) => {



    const handleCompleteTask = async (e) => {
        e.preventDefault();
        const settings = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
         
        };

        const response = await fetch(`http://localhost:5000/completeTask/${task._id}`,settings)
        const data = await response.json();

        if(data.modifiedCount){
            toast.success('Task Completed Successfully');
        }

    }

    const handleDeleteTask = async () => {

        const settings = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
            
         
        };


        const response = await fetch(`http://localhost:5000/delete/${task._id}`,settings)
        const data = await response.json();
        if(data.deletedCount){
            toast.error('Task Deleted Successfully');
        }
        

    }

    const handleDelete = () => {
        if (window.confirm("Delete the Task?")) {
            return handleDeleteTask();
          }else{
              return;
          }
    }


    return (
        <div >

            <div className={`${task.completed ? ' bg-gray-300' : 'bg-slate-50' } flex flex-col lg:flex-row items-center border-2 rounded-md p-4 gap-3 bg-slate-50 justify-between`}>


                <div className=" sm:flex justify-end md:justify-center">
                    <h2 className={` ${task.completed ? 'line-through' : ''} font-normal text-center text-xs lg:text-sm w-24 md:w-48 text-slate-500`}>{task.taskName}</h2>
                </div>

                <div className="mx-4">
                    <h2 className={`font-semibold text-slate-500 text-sm lg:text-lg text-left ${task.completed ? 'line-through' : ''}`}>{task.taskDes}</h2>
                </div>
                <hr />

                <div className="ml-2 flex flex-col lg:flex-row">
                   <button onClick={handleCompleteTask} className="mx-3 mb-2 lg:mb-0"><FaCheckCircle className="lg:text-2xl text-green-400 hover:text-green-600" /></button>
                    <button onClick={handleDelete} className="mx-3 mb-2 lg:mb-0"><FaTrashAlt className="lg:text-lg text-red-400 hover:text-red-600" /></button>

                </div>


            </div>

        </div>
    );
};

export default SingleTodo;