import { createContext,useState,useRef,useReducer } from "react";

import DefaultPage from "../components/DefaultPage";
import AddProject from '../components/AddProject'
import Project from '../components/Project'
import ProjectList from "../components/ProjectList";

const initial_project={
    page_status:"main",
    projects:
    [
      {
        projectName:"first project",
        projectDesc:"first project description",
        dueDate:"12-10-2024",
        id:Math.random()*100,
        tasks:[{task:"first task",taskId:Math.random()*1000},{task:"second task",taskId:Math.random()*1000}]
      },
      {
        projectName:"second project",
        projectDesc:"second project description",
        dueDate:"22-11-2024",
        id:Math.random()*100,
        tasks:[]
      },
      {
          projectName:"third project",
          projectDesc:"second project description",
          dueDate:"22-11-2024",
          id:Math.random()*100,
          tasks:[]
        },
        {
          projectName:"fourth project",
          projectDesc:"second project description",
          dueDate:"22-11-2024",
          id:Math.random()*100,
          tasks:[]
        },
        {
          projectName:"fifth project",
          projectDesc:"second project description",
          dueDate:"22-11-2024",
          id:Math.random()*100,
          tasks:[]
        },
        {
          projectName:"sixth project",
          projectDesc:"second project description",
          dueDate:"22-11-2024",
          id:Math.random()*100,
          tasks:[]
        },
        {
          projectName:"seventh project",
          projectDesc:"second project description",
          dueDate:"22-11-2024",
          id:Math.random()*100,
          tasks:[]
        }      
    ]
  }

  export const ProjectContext = createContext(
    {   
        openModal:Boolean,
        initialProject:{},
        openModalHandler:()=>{},
        closeModal:()=>{},
        addTask:()=>{},
        deleteTask:()=>{},
        addProject:()=>{},
        homePage:()=>{},
        deleteProjectHandler:()=>{},
        projectPage:()=>{},
        listProjectPage:()=>{}
    }
  )

  export default function ProjectContextProvider({children}) {
    const [project,setProject]=useState(initial_project);
    const [openModal,setOpenModal]=useState(false);
    const selectedTask = useRef();
    // console.log(project);

    function addProject() {
      setProject(prev=>{return{...prev,page_status:"add"}})
    }
    function homePage() {
      setProject(prev=>{return{...prev,page_status:"main"}})
    }
    function projectPage(id){
      setProject(prev=>{return{...prev,page_status:+id}})
    }
    function listProjectPage() {
      setProject(prev=>{return{...prev,page_status:"list"}})
    }
  
    let mainContent;   
    switch (project.page_status) {
      case "add":
        mainContent=<AddProject/>
        break;
      case "main":
        mainContent=<DefaultPage/>
        break;
      case "list":
        mainContent=<ProjectList/>
        break;    
      default:                      
        mainContent=<Project/>
        break;
    }
    function openModalHandler(id) {
      setOpenModal(true);
      selectedTask.current = id
    }
    function closeModal() {
      setOpenModal(false);
    }

    function addTaskHadler(newTask) {
      const projectId = project.page_status;
      const index=project.projects.findIndex(p=>p.id === projectId);
      const oldTask =[...project.projects[index].tasks];
      const updatedProject = {...project};
      updatedProject.projects[index].tasks=[...oldTask,newTask];
      setProject(updatedProject);
      // console.log(updatedProject);
    }

    function deleteTaskHandler() {  
      const delTaskId = selectedTask.current;    
      const projectId = project.page_status;
      const index=project.projects.findIndex(p=>p.id === projectId);
      const updatedTask =[...project.projects[index].tasks.filter(p=>p.taskId !== delTaskId)];
      const updatedProject = {...project};
      updatedProject.projects[index].tasks= [...updatedTask];
      setProject(updatedProject);
      // console.log(updatedTask);
    }

    function addProjectHandler(newProject) {
      const old_projects =[...project.projects];
      const updatedProject =[...old_projects,newProject];
      const updatedData = {page_status:newProject.id,projects:updatedProject};
      setProject(updatedData);
      // console.log(newProject.id);
    }

    function deleteProjectHandler(projectId) {
      const old_projects=[...project.projects];
      const updated_projects=[...old_projects.filter(p=>p.id !== projectId)];
      const updated_data={page_status:"main",projects:updated_projects}
      setProject(updated_data);
      // console.log(updated_data);
    }

    const projectCtx={
      openModal:openModal,
      openModalHandler:openModalHandler,
      closeModal:closeModal,
      initialProject:project,
      content:mainContent,
      addTask:addTaskHadler,
      deleteTask:deleteTaskHandler,
      addProject:addProject,
      addProjectHandler:addProjectHandler,
      deleteProjectHandler:deleteProjectHandler,
      homePage:homePage,
      projectPage:projectPage,
      listProjectPage:listProjectPage
    }

    return(
      <ProjectContext.Provider value={projectCtx}>
        {children}
        {mainContent}
      </ProjectContext.Provider>
    )
  }


// old code
  // function addTaskHadler(task,projectId) {
  //   const selectedProject = project.project.find(p=>p.id === projectId);
  //   const prevTask = selectedProject.task;
  //   const newTask =[...prevTask,{task,taskId:Math.random()*100}];
  //   selectedProject.task=newTask;
  //   let updatedProject =[];
  //   updatedProject.push(project.project.find(p=>p.id != projectId));
  //   updatedProject = [...updatedProject,selectedProject];
  //   setProject(prev=>{return {...prev,project:updatedProject} });
  //   // setProject()
  //   // console.log(projectId);
  //   console.log(updatedProject);
  // }

  // {
  //   projectName:"third project",
  //   projectDesc:"second project description",
  //   dueDate:"22-11-2024",
  //   id:Math.random()*100,
  //   tasks:[]
  // },
  // {
  //   projectName:"fourth project",
  //   projectDesc:"second project description",
  //   dueDate:"22-11-2024",
  //   id:Math.random()*100,
  //   tasks:[]
  // },
  // {
  //   projectName:"fifth project",
  //   projectDesc:"second project description",
  //   dueDate:"22-11-2024",
  //   id:Math.random()*100,
  //   tasks:[]
  // },
  // {
  //   projectName:"sixth project",
  //   projectDesc:"second project description",
  //   dueDate:"22-11-2024",
  //   id:Math.random()*100,
  //   tasks:[]
  // },
  // {
  //   projectName:"seventh project",
  //   projectDesc:"second project description",
  //   dueDate:"22-11-2024",
  //   id:Math.random()*100,
  //   tasks:[]
  // },