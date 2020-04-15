let news = []

export const useNews = () => news.slice()


export const getNews = () => {
    return fetch ("http://localhost:8000/news")
    .then(response => response.json())
    .then(parsedNews => {
        news = parsedNews
    })
}