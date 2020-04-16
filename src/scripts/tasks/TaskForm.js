import { saveTasks } from "./TaskProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".taskFormContainer")


export const taskFormDialog = () => {
    contentTarget.innerHTML = `
        <dialog class"dialog--taskForm" id="taskForm">

        <form action"">
        <fieldset>
            <label for="taskName">Task</label>
            <input type="text" id="TaskName"></input>
        </fieldset>
        </form>
        
        <form action"">
        <fieldset>
            <label for="taskExpectedCompletionDate">Expected Completion Date</label>
            <input type="date" id="TaskExDate"></input>
        </fieldset>
        </form>


        <section class="button">
            <button id="saveTask" type="submit">Save Task</button>    
         </section>
    `


    eventHub.addEventListener("click", e => {
        if (e.target.id === "saveTask") {
            document.querySelector("#taskForm").close()
        }
    })

}
eventHub.addEventListener("addTaskClicked", CustomEvent => {
    document.querySelector("#taskForm").showModal()
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "saveTask") {
        const taskName = document.querySelector("#TaskName").value
        const taskExpectedCompletionDate = document.querySelector("#TaskExDate").value

        const newTask = {
            task: taskName,
            date: taskExpectedCompletionDate,
        }
        saveTasks(newTask)
    }
})

