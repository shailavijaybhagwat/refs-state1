import Button from "./Button.js"


export default function ProjectSidebar({OnAddProject}) {
    return <aside>

        <h2>Projects</h2>
        {/* <div><button>+Add Projects</button></div> */}
        <Button onClick={OnAddProject}>+Add Projects</Button>
        <ul>

        </ul>
    </aside>
  }