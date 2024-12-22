import { useContext} from "react"
import { ProjectContext } from "../store/Project-context"
export default function TaskModal({id}) {
    const {deleteTask,closeModal}=useContext(ProjectContext)
    // console.log(id)
    return (
        <>
            <h1 className="font-semibold text-gray-100 text-2xl">Delete Task</h1>
            <p className="text-gray-100 text-xl   mt-4 mb-2">Are you sure you want to delete this task ? </p>
            <p className="text-red-300   font-semibold"><u>all data will be deleted,this action cannot be undone</u></p>
            <form method="dialog" className="flex mt-4 gap-2 justify-center">
                <button onClick={()=>{deleteTask(id)}} className=" font-bold  p-2 bg-slate-800 rounded-md text-slate-200 hover:bg-slate-100 hover:text-slate-800">Delete</button>
                <button onClick={closeModal} className=" font-bold  p-2 rounded-md text-slate-200 hover:bg-slate-100 hover:text-slate-800">Cancel</button>                    
            </form>
        </>
    )
}
