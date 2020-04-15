/*
    Displays news articles from News.js using NewsProvider.js, also the delete and add buttons. Provides the event listeners to make the buttons
    do what they're supposed to do"
*/

import { getNews, useNews } from "./NewsProvider.js"
import { news } from "./News.js"



const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.news_container')

// eventHub.addEventListener("addArticleButtonClicked", customEvent => {
//     render()
// })

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