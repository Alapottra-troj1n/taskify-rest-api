import React from 'react';
import SingleTodo from '../SingleTodo/SingleTodo';

const TodoPage = () => {
    return (
        <div className="h-screen flex flex-col items-center container mx-auto">
            <form className="mt-32 flex gap-5">
            <input type="text" placeholder="Task Name" className=" bg-slate-50 input max-w-xs" />
            <input type="text" placeholder="Description" className="input input-bordered input-info w-96 bg-slate-50 " />
            <input type="submit" value="Add Task" className="btn btn-info text-bold text-white"/>
            </form>

            <div className="task-list mt-32">
                <SingleTodo/>
            </div>
            
        </div>
    );
};

export default TodoPage;