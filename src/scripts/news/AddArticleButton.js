import { news } from "./News.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector("#addArticle_container")

const addArticleButton = () => {
    return `
     <button id="addAnArticleButton">Add an Article</button>
    `
}

export const renderAddArticleButton = () => {
    const theAddArticleButton = addArticleButton()

    contentTarget.innerHTML = theAddArticleButton
}

contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "addAnArticleButton") {
        const showAddArticleForm = new CustomEvent("addArticleFormClicked")
        eventHub.dispatchEvent(showAddArticleForm)
    }
})