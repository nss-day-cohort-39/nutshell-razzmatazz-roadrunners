const contentTarget = document.querySelector("#addTask")
const eventHub = document.querySelector(".container")

const addTaskButton = () =>{
    return  `<button id="addTask">Add Task</button>`
  }
  export const renderAddTaskButton = () =>{
    const theAddTaskButton = addTaskButton()
      contentTarget.innerHTML = theAddTaskButton
  }

  contentTarget.addEventListener("click", e => {
    if(e.target.id === "addTask") {
        const showAddTaskForm = new CustomEvent("addTaskClicked")
        eventHub.dispatchEvent(showAddTaskForm)
       }
    })