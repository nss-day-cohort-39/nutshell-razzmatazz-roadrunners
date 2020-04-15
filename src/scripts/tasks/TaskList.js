import { TaskHTML } from "./Task.js"
import { getTasks, useTasks, deleteTask } from "./TaskProvider.js"

const contentTarget = document.querySelector(".tasks_conatiner")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("taskStateChanged", customEvent => {
    render()
})

getTasks().then(() => {
    const allTheTasks = useTasks()
    
    contentTarget.innerHTML =+ allTheTasks.map(
        currentTaskObject => {

            return TaskHTML(currentTaskObject)
        }
    ).join("")
    })

contentTarget.innerHTML += `<button class"addNewTask">Add New Task</button>`

contentTarget.addEventListener("click"), event =>{
    if(event.target.id === "addTask") {
        const showTaskForm = new customEvent("addTaskClicked")
        eventHub.dispatchEvent(showTaskForm)
    }
}

   
    contentTarget.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("deleteTask--")) {
            const [del, taskId] = clickEvent.target.id.split("--")
            deleteTask(taskId)
        }
    })


    export const TasksList  = () => {
        render()
    }
