import Task from "./Task"
import { useRef,useContext,useState } from "react"
import { ProjectContext } from "../store/Project-context";
import TaskInput from "./TaskInput";
import MainModal from "./MainModal";



export default function Project() { 
    const{initialProject,openModalHandler}=useContext(ProjectContext);    
    const id = initialProject.page_status;
    const data = initialProject.projects.filter(p=>p.id == id);   

    return(
        <div className="ml-36 mt-28 w-2/3">
            <MainModal>
                {/* <TaskModal/> */}
            </MainModal>
            {/* <MainModal>
                <ProjectModal id={id} status="project"/>
            </MainModal> */}
            
            <div className="flex w-2/3 mb-4">
                <h1 className="basis-2/3 font-bold text-3xl text-gray-700"><u>{data[0].projectName}</u></h1>
                <button onClick={()=>openModalHandler(id,'project')} className="bg-slate-700 text-slate-100 hover:bg-slate-100 hover:text-slate-700 basis-1/3 max-w-20 rounded-md px-2 py-0 font-bold ">DELETE</button>
            </div>          
            <p className="font-bold text-gray-600 mb-6">Due date : {data[0].dueDate}</p>
            <p className="w-2/3">{data[0].projectDesc}</p>
            <hr className="bg-zinc-700 h-1 my-1 w-2/3 mb-4"/>

            <TaskInput/>
            
            {data[0].tasks.length==0?<h2 className="text-center font-bold text-2xl w-2/3">There's no task yet !</h2>:""}
            <ul>
                {                    
                    data[0].tasks.map(t=>
                    <div key={t.taskId}>
                        <Task  task={t.task} idTask={t.taskId} />
                    </div>               
                    )
                }
            </ul>
        </div>
        

    )
}

// {
//     modalOn==true?<DeleteModal key={t.taskId+1} status="task" idTask={t.taskId} ref={delModal}/>:""
// }