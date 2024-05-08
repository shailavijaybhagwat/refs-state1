import noProject from '../assets/no-projects.png'
import Button from "./Button.js"

export default function NewProject({OnAddProject}) {
    return <div>

       <img src='{noProject}' alt="no-project-image"/>
       <h2>No Projects</h2>
       <p>Select a project or add a new one</p>
       <p>
        {/* <button>Create a new Project</button> */}
        <Button onClick={OnAddProject}>Create a new Project</Button>
       </p>
    </div>
  }