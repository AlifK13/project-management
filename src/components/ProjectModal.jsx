import { forwardRef } from "react"
import { useContext,useRef } from "react"
import { ProjectContext } from "../store/Project-context"
import { createPortal } from "react-dom"

function DeleteModal() {
    const {deleteProjectHandler,closeModal}=useContext(ProjectContext);
    return(
        <>        
            <h1 className="font-semibold text-gray-100 text-2xl">Delete {status}</h1>
            <p className="text-gray-100 text-xl   mt-4 mb-2">Are you sure you want to delete this project ? </p>
            <p className="text-red-300   font-semibold"><u>all data will be deleted,this action cannot be undone</u></p>
            <form method="dialog" className="flex mt-4 gap-2 justify-center">
                <button onClick={deleteProjectHandler} className=" font-bold  p-2 bg-slate-800 rounded-md text-slate-200 hover:bg-slate-100 hover:text-slate-800">Delete</button>
                <button onClick={closeModal} className=" font-bold  p-2 rounded-md text-slate-200 hover:bg-slate-100 hover:text-slate-800">Cancel</button>
            </form>
        </>
    )
}

export default DeleteModal
// ()=>{deleteTask(idTask)}
// old code using forward ref
// const DeleteModal =forwardRef( function DeleteModal({status,id},ref) {
//     // function closeDelModal() {
//     //     ref.current.close();
//     // }
//     // console.log(idTask+" "+status);
//     const {deleteProjectHandler,closeModal}=useContext(ProjectContext);
//     function delTest(){
//         // console.log(id);
//         deleteProjectHandler(id);

//     }