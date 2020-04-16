/*
    Displays news articles from News.js using NewsProvider.js, also the delete and add buttons. Provides the event listeners to make the buttons
    do what they're supposed to do"
*/

import { getNews, useNews, deleteNews } from "./NewsProvider.js"
import { news } from "./News.js"



const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('#addArticle_container')


const render = () => {
    getNews().then(() => {
        const allTheArticles = useNews()
            
        contentTarget.innerHTML = allTheArticles.map(
            currentArticle => {
                return news(currentArticle)
            }
        ).join(" ")
    })
}

export const newsListComponent = () => {
    render()
}

eventHub.addEventListener("newsStateChanged", CustomEvent => {
    render()
})

contentTarget.addEventListener("click", event =>{
    if(event.target.id.startsWith("deleteArticle--")){
        const [taco, newsId] = event.target.id.split("--")
       deleteNews(newsId)
    }
    
})

