import { useRef,useContext,useState } from "react";
import { ProjectContext } from "../store/Project-context";

export default function TaskInput() {
    const{addTask}=useContext(ProjectContext);
    const[err,setErr]=useState(false);
    const inputTask = useRef();
    let inputClass = "rounded-md w-36 lg:w-1/3 py-1 px-1 mr-2 border";
    function getTask() {        
        const task = inputTask.current.value;
        if (task.trim().length == 0) {
            setErr(true);                        
        }else{
            setErr(false);
            const newTask = {task,taskId:Math.random()*1000};
            addTask(newTask);
            inputTask.current.value="";            
        }
        
    }
    return(
        <>
            <label htmlFor="AddTask" className="lg:font-bold font-semibold  ">Add a new task : </label>
            <input ref={inputTask} type="text" name="AddTask" className={err?inputClass+" border-red-500":inputClass}/>        
            <button type="submit" onClick={getTask} className="rounded-md bg-slate-700 text-slate-100 hover:bg-slate-100 hover:text-slate-700 px-2 py-1 lg:px-3 lg:py-2 font-semibold lg:font-bold hover:border-slate-700 hover:border">Add Task</button>
            <p className="text-red-500 mb-10 h-1 text-center w-1/3 font-bold">{err?"Please input a task !":""}</p>
            
        </>        
    )
}