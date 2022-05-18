import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SingleTodo from '../SingleTodo/SingleTodo';

const TodoPage = () => {
    const [user, loading, error] = useAuthState(auth);
    const [tasks, setTasks] = useState([]);

    const handleAddTodo = (e) => {

        e.preventDefault();

        const taskName = e.target.taskName.value;
        const taskDes = e.target.taskDes.value;
        const userEmail = user?.email;
        const task = { taskName, taskDes, userEmail };

        const addTaskDb = async () => {

            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task)
            };
            const response = await fetch(`http://localhost:5000/addtask`, settings)
            const data = await response.json();
            if (data.insertedId) {
                toast.success('Task Added Successfully');
                e.target.reset();
            }


        }

        addTaskDb();


    }

    //fetch tasks 
    useEffect(() => {


        const fetchTasks = async () => {

            const response = await fetch(`http://localhost:5000/tasks/${user?.email}`)
            const data = await response.json();
            setTasks(data)

        }

        fetchTasks();


        




    }, [tasks])




    return (
        <div className="h-screen flex flex-col items-center container mx-auto">
            <h2 className='text-slate-50 text-lg text-bold '><span className='text-bold text-info cursor-pointer text-xl'>{user?.displayName || 'Guest'}'s</span> Todo List </h2>
            <form className=" mt-16 lg:mt-32 flex flex-col lg:flex-row gap-3" onSubmit={handleAddTodo}>
                <input required name='taskName' type="text" placeholder="Task Name" className=" bg-slate-50 input max-w-xs" />
                <input required name='taskDes' type="text" placeholder="Description" className="input input-bordered input-info w-full h-24 lg:h-auto lg:w-96 bg-slate-50 " />
                <input type="submit" value="Add Task" className="btn btn-info text-bold text-white" />
            </form>

            <div className="task-list grid grid-cols-1 items-center gap-3 mt-16 lg:mt-32 p-10 lg:p-5">
                {tasks.map(task => <SingleTodo task={task} key={task._id} />)}
            </div>

        </div>
    );
};

export default TodoPage;