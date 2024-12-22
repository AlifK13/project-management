import { useContext } from "react";
import { ProjectContext } from "../store/Project-context";

export default function ProjectTab() {
    const {homePage,addProject,projectPage,initialProject}=useContext(ProjectContext)
    return <div className="w-64 p-4 text-center bg-slate-500">
        <h2 onClick={homePage} className="cursor-pointer text-slate-300 text-3xl font-bold mb-10"><u>PM-V2</u></h2>
        <h2 className="text-2xl font-bold mt-10 mb-3"><u>Your Project</u></h2>
        <button onClick={addProject} className="hover:bg-gray-600 hover:text-slate-200 mt-2 rounded-md p-3 text-sm bg-slate-800 text-slate-300"><span>&#43; </span>Add Project</button>
        <ul className="mt-2">
            {
                initialProject.projects.map(p=>{
                    return(
                        <li key={p.id} onClick={()=>projectPage(p.id)} className="cursor-pointer my-2 rounded-md p-2 bg-slate-800 text-slate-300 hover:bg-gray-600 hover:text-slate-200">{p.projectName}</li>
                    )
                    
                })
            }
            
        
        </ul>
    </div>
}