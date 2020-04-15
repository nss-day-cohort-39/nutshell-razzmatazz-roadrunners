export const TaskHTML = (taskObject) => {
    return `
        <article class="task">
            <header>
            <h2>${taskObject.task}</h2>
            </header>
            <p>${taskObject.complete ? "Yes" : "No"}</p>
            <p>
                <button id="deleteTask--${taskObject.id}">Delete Task</button>
            </p>
        </article>
    `
}