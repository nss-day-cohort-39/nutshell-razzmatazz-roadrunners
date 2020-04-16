let chats = []

const eventHub = document.querySelector(".container")
const dispatchStateChangeEvent = () => {
    const chatStateChangedEvent = new CustomEvent("chatStateChanged")
    eventHub.dispatchEvent(noteStateChangedEvent)
}

// Allow other modules to get a copy of the application state

export const useChat = () => chat.sort((c,n) =>n.timestamp - c.timestamp).slice()

// Get the state of the chat from the API into the application

export const getChat = () => {
    return fetch('http://localhost:8088/chat')
        .then(response => response.json())
        .then(parsedChat => {
            notes = parsedChat
        })
}

export const saveChat = chat => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })
    .then(getChat)
    .then(dispatchStateChangeEvent)
}