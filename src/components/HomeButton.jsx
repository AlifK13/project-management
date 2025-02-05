import { useContext } from "react";
import { ProjectContext } from "../store/Project-context";

export default function HomeButton() {
    const {homePage,listProjectPage} = useContext(ProjectContext);
    return(
        <div className="lg:hidden  items-center text-center text-md my-10  font-bold underline">
            <ul className="flex gap-2 justify-center">
                <li onClick={homePage} className="block cursor-pointer text-slate-900">HOME</li>
                <li onClick={listProjectPage} className="block cursor-pointer text-slate-900">Project List</li>
            </ul>            
        </div>
        
    )
}