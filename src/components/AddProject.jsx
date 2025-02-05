import { useContext,useRef,useState } from "react"
import { ProjectContext } from "../store/Project-context"
import InputProject from "./InputProject";

function checkInput(addedTitle,addedDesc,addedDate) { 
    let date = new Date(addedDate);
    let now = new Date();     
    if (addedTitle.trim().length <= 0) {            
        return"Project name";            
    }else if (addedDesc.trim().length <= 0) {            
        return"Project description";
    }else if (addedDate.trim().length <=0 || date <= now) {            
        return"Due date";
    }else{
        // console.log(true);
        return true;
    }
}


export default function AddProject() {
    const {addProjectHandler}=useContext(ProjectContext);
    const title =useRef("");
    const desc =useRef("");
    const date =useRef("");
    const [errInput,setErr]=useState("");
    

    function formHandler() {
        const addedTitle=title.current.value;
        const addedDesc = desc.current.value;
        const addedDate = date.current.value;
        let valid = checkInput(addedTitle,addedDesc,addedDate);        
        if (valid !== true) {
            setErr(checkInput(addedTitle,addedDesc,addedDate));
        }else{
            setErr("");
            const newProject =  {
                projectName:addedTitle,
                projectDesc:addedDesc,
                dueDate:addedDate,
                id:Math.random()*100,
                tasks:[]
            }
            addProjectHandler(newProject);
        }
        
        // console.log(newProject);
        title.current.value="";
        desc.current.value="";
        date.current.value="";
    }

    return(
        <div className="lg:ml-36 ml-10 lg:mt-28 mt-20 lg:w-2/3">
            <h1 className="font-bold lg:text-3xl text-2xl text-gray-700 mb-5"><u>ADD NEW PROJECT</u></h1>
            <InputProject label={"Project name"} type={"text"} inType ref={title} err={errInput}/>
            <InputProject label={"Project description"} err={errInput} ref={desc}/>
            <InputProject label={"Due date"} err={errInput} type={"date"} inType ref={date}/>
            <div className="flex lg:flex-row-reverse justify-center mr-12 lg:w-1/3 gap-2">                
                <button  className="border rounded-md font-semibold   bg-stone-500 p-2 hover:bg-slate-200 ">Cancel</button>
                <button onClick={formHandler} className="font-semibold border rounded-md text-slate-100 bg-gray-700 p-2  hover:bg-slate-600">Save</button>
            </div>
            
        </div>
        
    )
}