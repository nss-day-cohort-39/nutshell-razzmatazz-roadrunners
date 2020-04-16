

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const tasksStateChangedEvent = new CustomEvent("tasksStateChanged")

    eventHub.dispatchEvent(tasksStateChangedEvent)
}
/*
    Allow other modules to get a copy of the application state
*/
export const useTasks = () => {
    const sortedByDateTasks = tasks.sort((a,b)=>{
        if(a.date < b.date) {return -1}
        if(a.date > b.date) {return 1}
        return 0;
    })
    return sortedByDateTasks.slice()
}

/*
    Get the state of the notes from the API into the application
*/
let tasks = []

export const getTasks = () => {
    return fetch('http://localhost:8088/tasks')
        .then(response => response.json())
        .then(parsedNotes => {
            tasks = parsedNotes
        })
}
export const deleteTasks = (taskId) => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
    })
        .then(getTasks)
        .then(dispatchStateChangeEvent)
}

export const saveTasks = (task) => {
    return fetch('http://localhost:8088/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}