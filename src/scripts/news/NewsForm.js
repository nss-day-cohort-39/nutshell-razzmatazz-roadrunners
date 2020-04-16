
import { saveNews } from "./NewsProvider.js"


const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector('.addArticleFormDialog')


export const newsForm = () => {
    contentTarget.innerHTML = `
    <dialog id="newsFormContainer">
            <h3>Add Your News Article Below</h3>
            <form action="" class="newsForm">
                <fieldset>
                    <label for="title">Title:</label>
                    <textarea name="title" id="titleField" cols="60 rows="2"></textarea>
                </fieldset>
                <fieldset>
                    <label for="url">Link:</label>
                    <textarea name="url" id="urlField" cols="60" rows="2"></textarea>
                </fieldset>
                <fieldset>
                    <label for="comments">Thoughts:</label>
                    <textarea name="comments" id="commentField" cols="60" rows="2"></textarea>
                </fieldset>
                <button id="saveAnArticleButton">Save This Article</button>
                
            </form>
    </dialog>
    `
}

export const render = () => {
    contentTarget.innerHTML = newsForm()
}

eventHub.addEventListener("addArticleFormClicked", CustomEvent => {
    document.querySelector("#newsFormContainer").showModal()
})

eventHub.addEventListener("saveArticleButtonClicked", CustomEvent => {

})

eventHub.addEventListener("click", event => {
    if(event.target.id === "saveAnArticleButton") {
        const articleTitle = document.querySelector("#titleField").value
        const articleUrl = document.querySelector("#urlField").value
        const articleComment = document.querySelector("#commentField").value
        

        const newNews = {
            title: articleTitle,
            url: articleUrl,
            comment: articleComment,
            timestamp: Date.now()
        }
        saveNews(newNews)
    }
})


