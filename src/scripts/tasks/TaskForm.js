import { saveTask } from "./TaskProvider.js"

const contentTarget = document.querySelector(".tasks_conatiner")
const eventHub = document.querySelector(".container")


//AddForm button clicked eventListner
eventHub.addEventListener("addTaskclicked", CustomEvent =>{
        document.querySelector(".taskForm").showModal()
    }
)


//closeForm button clicked eventListner
eventHub.addEventListener("click", event =>{
    if(event.target.id === closeTask){
        document.querySelector(".taskForm").close()
    }
})

eventHub.addEventListener("click", event =>{
    if(event.target.id === saveTask){
        const taskName = document.querySelector(".taskName").value
        const taskComplete = document.querySelector(".taskComplete").value

        const newTask = {
            name: taskName,
            status: taskComplete,

        }
           saveTasks(newTask)
        }
    })
   

 export const taskFormDialog = () => {
    contentTarget.innerHTML = `
        <dialog class"taskForm">
        
        <fieldset>
            <label class="label--tasks" for="taskText">Task:</label>
            <textarea id="taskText"></textarea>
        </fieldset>
        <fieldset>
            <label class="label--complete" for="completeText">Complete?:</label>
            <textarea id="completeText"></textarea>
        </fieldset>
        <section class"button">
        <button id="saveTask">Save Task</button>
        <button id="closeTask">Close Task</button>
        </section>
        </dialog>
    `
}

export const TaskForm = () => {
    render()
}