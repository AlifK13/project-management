import { useContext } from 'react'
import ProjectTab from './components/ProjectTab'
import ProjectContextProvider from './store/Project-context'
import { ProjectContext } from './store/Project-context'
import './App.css'


function App() {
  return (
    <div className='flex min-h-screen bg-slate-300'>
      <ProjectContextProvider>
        <ProjectTab/>        
      </ProjectContextProvider>
    </div>
  )
}

export default App
