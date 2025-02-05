import { useContext } from "react"
import { ProjectContext } from "../store/Project-context"

export default function DefaultProjectList() {
    const {initialProject,listProjectPage,projectPage} = useContext(ProjectContext);
    const latestProject = [...initialProject.projects];
    latestProject.reverse()
    // console.log(latestProject);
    return(
        <section className="mt-5 lg:hidden">
            <h2 className="font-bold mb-5 text-xl underline uppercase">Latest Project</h2>
            <ul className="grid grid-cols-3 gap-2">
                {
                    latestProject.slice(0,6).map(p=>{
                        return(
                            <li key={p.id} onClick={()=>projectPage(p.id)} className="bg-slate-800 border hover:cursor-pointer hover:bg-gray-600 text-slate-300 p-3 hover:text-slate-200 rounded-md border-gray-400"> 
                                <h5 className="font-bold">{p.projectName}</h5>
                                <p>{p.dueDate}</p>
                            </li>
                        )
                    })
                }                                            
            </ul>
            <a className="text-slate-700 underline mt-5 hover:text-slate-700 cursor-pointer" onClick={listProjectPage}>show all project ...</a>
        </section>
    )
}