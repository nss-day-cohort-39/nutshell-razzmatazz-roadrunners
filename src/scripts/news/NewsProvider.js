let news = []

const eventHub = document.querySelector(".container")

export const useNews = () => news.slice()

const dispatchStateChangeEvent = () => {
    const newsStateChanged = new CustomEvent("newsStateChanged")
    eventHub.dispatchEvent(newsStateChanged)
}

export const getNews = () => {
    return fetch ("http://localhost:8088/news")
    .then(response => response.json())
    .then(parsedNews => {
        news = parsedNews
    })
}

export const saveNews = (news) => {
    return fetch('http://localhost:8088/news', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(news)
    })
        .then(getNews)
        .then(dispatchStateChangeEvent)
}

export const deleteNews = (newsid) => {
    return fetch(`http://localhost:8088/news/${newsid}`, {
        method: "DELETE"
    })
        .then(getNews)
        .then(dispatchStateChangeEvent)

}