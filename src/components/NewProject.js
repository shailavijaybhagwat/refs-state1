import Input from './Input.js';
export default function NewProject() {
    return <div>

        <menu>
            <li><button>Save</button></li>
            <li><button>Cancel</button></li>
       </menu>
       <div>
            {/* <p>
                    <label>Title</label>
                    <input/>
            </p>
            <p>
                    <label>Description</label>
                    <textarea/>
            </p>
            <p>
                    <label>Due Date</label>
                    <input/>
                
            </p> */}
            <Input label="Title"/>
            <Input label="Description" textarea/>
            <Input label="Due date"/>
       </div>
    </div>
  }