import { useContext } from "react";
import DefaultProjectList from "./DefaultProjectList";
import { ProjectContext } from "../store/Project-context";

export default function DefaultPage() {
    const {addProject}=useContext(ProjectContext);
    return(
        <div className="m-auto text-center">            
            <h1 className="font-bold text-4xl">There's no project selected !</h1>
            <p className="text-slate-700 font-semibold text-xl my-4">please select a project or make a new one</p>
            <button onClick={addProject} className="bg-stone-700 border rounded-md p-2 mt-2 text-slate-200 hover:bg-gray-600 "><span>&#43; </span> Start new project</button>
            <DefaultProjectList/>
        </div>
        
    )
}