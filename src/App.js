import './App.css';
import ProjectSidebar from './components/ProjectSidebar.js';
import NewProject from './components/NewProject.js';
import NoProjectSelected from './components/NoProjectSelected.js'
 import useState from 'react';

function App() {
  const[projectState,SetProjectState] =useState({selectProjectId:undefined,Projects:[]});

  function handleAddProject(){

    SetProjectState(prevState => {
             return{
              ...prevState,
              selectProjectId:null
             }
             
    });
  }

  let content;
  if(content.selectProjectId===null){
    content=<NewProject/>
  }
  else if(content.selectProjectId===undefined){
    content=<NoProjectSelected  onProjectAdd={handleAddProject}/>
  }
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      {/* <ProjectSidebar  onProjectAdd={handleAddProject}/> */}
      {/* <NewProject/>  onProjectAdd={handleAddProject} */}
      {/* <NoProjectSelected  onProjectAdd={handleAddProject}/> */}
      {/* {content} */}
    </>
  );

}

export default App;
