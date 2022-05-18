import React from 'react';

const TodoPage = () => {
    return (
        <div className="h-screen flex flex-col items-center">
            <form className="mt-32 flex gap-5">
            <input type="text" placeholder="Task Name" className=" bg-slate-50 input max-w-xs" />
            <input type="text" placeholder="Description" class="input input-bordered input-info w-96 bg-slate-50 " />
            <input type="submit" value="Add Task" className="btn btn-info text-bold text-white"/>
            </form>
            
        </div>
    );
};

export default TodoPage;