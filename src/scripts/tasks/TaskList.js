import { TaskHTML } from "./Task.js"
import { getTasks, useTasks, deleteTasks } from "./TaskProvider.js"

const contentTarget = document.querySelector(".addedTasks_container")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("tasksStateChanged", customEvent => {
    render()
})

const render = () => {
    getTasks().then(() => {

        const allTheTasks = useTasks()

        contentTarget.innerHTML = allTheTasks.map(
            currentTaskObject => {

                return TaskHTML(currentTaskObject)
            }
        ).join("")
    })
}
export const tasksListComponent = () => {
    render()
}

contentTarget.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteTask--")) {
        const [pefix, taskId] = e.target.id.split("--")
        deleteTasks(taskId)
    }
    
})

