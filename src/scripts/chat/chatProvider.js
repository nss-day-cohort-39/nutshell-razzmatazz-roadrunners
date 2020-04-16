const eventHub = document.querySelector(".container")

let messages = []

const dispatchStateChangeEvent = () => {
    const chatStateChangedEvent = new CustomEvent("chatStateChanged")
    eventHub.dispatchEvent(chatStateChangedEvent)
}

// Allow other modules to get a copy of the application state

export const useChats = () => messages.slice()

// Get the state of the chat from the API into the application

export const getChats = () => {
    return fetch('http://localhost:8088/chats')
    .then((response) => response.json())
    .then((parsedChats) => (messages = parsedChats))
}



export const saveChat = chat => {
    return fetch('http://localhost:8088/chats', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })
    .then(getChats)
    .then(dispatchStateChangeEvent)
}