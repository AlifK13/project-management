import ProjectTab from './components/ProjectTab'
import ProjectContextProvider from './store/Project-context'
import HomeButton from './components/HomeButton'
import './App.css'


function App() {
  return (
    <div className='lg:flex min-h-screen overflow-auto bg-slate-300'>
      <ProjectContextProvider>        
        <ProjectTab/>
        <HomeButton/>
      </ProjectContextProvider>
    </div>
  )
}

export default App
