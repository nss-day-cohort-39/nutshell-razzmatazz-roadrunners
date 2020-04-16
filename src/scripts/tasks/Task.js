

export const TaskHTML = (taskObject) => {
    return `
        <article class="tasks" id="task--${taskObject.id}">
            <div><b>Task:</b>${taskObject.task}</div>
            <div><b>Expected Completion Date:</b>${taskObject.date}</div>
            <button class="taskDelete" id="deleteTask--${taskObject.id}">Delete Task</button>
        </article>
    `
}