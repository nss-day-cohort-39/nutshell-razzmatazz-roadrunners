let chats = []

const eventHub = document.querySelector(".container")
const dispatchStateChangeEvent = () => {
    const chatStateChangedEvent = new CustomEvent("chatStateChanged")
    eventHub.dispatchEvent(chatStateChangedEvent)
}

// Allow other modules to get a copy of the application state

export const useChat = () => chat.slice()

// Get the state of the chat from the API into the application

export const getChat = () => {
    return fetch('http://localhost:8088/chat')
        .then(response => response.json())
        .then((parsedMessages) => (messages = parsedMessages))
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