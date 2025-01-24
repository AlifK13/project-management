import { createPortal } from "react-dom"
import { useRef,useEffect,useContext} from "react";
import { ProjectContext } from "../store/Project-context";
import ProjectModal from "./ProjectModal";
import TaskModal from "./TaskModal";

export default function MainModal({children}) {
    const modal =useRef();
    const {openModal,closeModal}=useContext(ProjectContext);
    let modalUsed
    if (openModal.modalID == 'task') {
        modalUsed=<TaskModal/>
    }else{
        modalUsed=<ProjectModal/>
    }

    useEffect(()=>{
        if (openModal.open) {
            modal.current.showModal();
        }else{
            modal.current.close();
        }
    },[openModal])
    return createPortal(
        <dialog ref={modal} onClose={closeModal} className="border border-gray-500 min-w-96 rounded p-4 backdrop:backdrop-blur-sm bg-gray-600 shadow-md text-center">
            {modalUsed}
        </dialog>,document.getElementById("root-modal")
    )
}