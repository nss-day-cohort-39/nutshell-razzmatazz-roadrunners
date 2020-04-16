import { saveChat, useChat } from "./ChatProvider.js"
import { Chat } from "./Chat.js"
import { ChatBox } from "./ChatBox.js"
import { useUsers } from "../registration/RegistrarionProvider.js"

const eventhub = document.querySelector('#container')
const chatContentTarget = document.querySelector(".chat_container")
const chatTextContentTarget = document.querySelector(
    '.chatText_container'
)

export const ChatList = () => {
    render()
}

const render = () => {
    const users = useUsers()
    const chat = useChat()
    const sortedChat = chat.sort((a,b) => a.timestamp - b.timestamp)
    chatContentTarget.innerHTML = sortedChat
    .map((chat) => {
        let foundUser = users.find((user) => user.id === chat.userId)
        return Chat(chat, foundUser)
    })
    .join('')
    chatTextContentTarget.innerHTML = ChatBox()
}

eventhub.addEventListener('saveChatButtonClicked', (event) => {
    if ('chat' in event.detail) {
        const newChat = {
            userId: parseInt(sessionStorage.activeUser),
            chat: event.detail.chat,
            timestamp: new Date().getTime(),
        }
        saveChat(newChat)
    }
} )

eventhub.addEventListener('chatStateChanged', () => {
    render()
    chatContentTarget.scrollTop = messagecontentTarget.scrollHeight
})