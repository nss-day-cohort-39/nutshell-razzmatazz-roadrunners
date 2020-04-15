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
                <h3>${newsObject.comments}</h3>
                <button id="deleteArticleBtn">Delete</button>
            </section>
        </div>
    `
}