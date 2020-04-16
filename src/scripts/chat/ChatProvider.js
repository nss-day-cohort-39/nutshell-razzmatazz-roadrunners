const eventHub = document.querySelector(".container")

let chats = []

const dispatchStateChangeEvent = () => {
    const chatStateChangedEvent = new CustomEvent("chatStateChanged")
    eventHub.dispatchEvent(chatStateChangedEvent)
}

// Allow other modules to get a copy of the application state


// Get the state of the chat from the API into the application

export const getChat = () => {
    return fetch('http://localhost:8088/chats')
    .then(response => response.json())
    .then((parsedChat) => (chats = parsedChat))
}

export const useChat = () => chats.slice()


export const saveChat = chat => {
    return fetch('http://localhost:8088/chats', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })
    .then(getChat)
    .then(dispatchStateChangeEvent)
}