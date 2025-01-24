import { useContext } from "react"
import { ProjectContext } from "../store/Project-context";

function Task({task,idTask}) {
    const {openModalHandler}=useContext(ProjectContext);
 
    return(
        <>        
            <div className="bg-slate-400 flex py-1 px-3 w-1/2 rounded-md mt-4">
                        <li className="basis-3/4 text-xl font-bold text-gray-700">{task}</li>
                        <input className=" accent-slate-950 w-5 h-5 mt-1" type="checkbox" />
                        <button onClick={()=>{openModalHandler(idTask,'task')}} className=" font-bold  px-2 ml-3 bg-slate-200 rounded-md text-slate-800 hover:bg-slate-600 hover:text-slate-200">Delete</button>
            </div>
        </>
    )
    
}

export default Task;

// ()=>delModal("task",idTask)
// const Task =forwardRef( 