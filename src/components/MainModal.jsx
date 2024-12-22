import { createPortal } from "react-dom"
import { useRef,useEffect,useContext} from "react";
import { ProjectContext } from "../store/Project-context";

export default function MainModal({children}) {
    const modal =useRef();
    const {openModal,closeModal}=useContext(ProjectContext);

    useEffect(()=>{
        if (openModal) {
            modal.current.showModal();
        }else{
            modal.current.close();
        }
    },[openModal])
    return createPortal(
        <dialog ref={modal} onClose={closeModal} className="border border-gray-500 min-w-96 rounded p-4 backdrop:backdrop-blur-sm bg-gray-600 shadow-md text-center">
            {children}
        </dialog>,document.getElementById("root-modal")
    )
}