import { forwardRef } from "react"

const InputProject = forwardRef(function InputProject({inType,label,type,err},ref) {
    let now = new Date()
    let errMsg ="";
    if (err === "Project name") {
        errMsg="project title cannot be empty !";
    }else if(err === "Project description"){
        errMsg="project description cannot be empty !";
    }else if(err === "Due date"){
        errMsg="project title cannot be empty and must be after "+now.toLocaleDateString("en-GB");+" !";
    }


    let input="";    
    if (inType) {
        input=<input ref={ref} className="border rounded-md w-1/3 py-2 px-3" type={type} name="title" />
    }else 
        input=<textarea ref={ref} className="border rounded-md w-1/3 py-2 px-3" name="desc" rows="5" id=""></textarea>                    
    return(
        <div className="my-3">
            <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="title">{label} :</label>
            {input}
            <p className="text-red-500 h-1 mb-10 font-semibold">{err==label?errMsg:""}</p>        
        </div>
    )
})


export default InputProject