/*
    HTML representation of a single news article, including title and URL. Needs to be added to NewsList.js
*/

export const news = (newsObject) => {
    return `
        <div id="news__container">
            <section class="newsItem">
                <h2 class="newsTitle">
                    <a href="${newsObject.url}">${newsObject.title}</a>
                </h2>
                <h3>${newsObject.comment}</h3>
                <button class="deleteArticleButton" id="deleteArticle--${newsObject.id}">Delete</button>
                <p>${new Date(newsObject.timestamp).toLocaleDateString()}</p>

            </section>
        </div>
    `
}