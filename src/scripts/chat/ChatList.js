import { Chat } from "./Chat.js"
import { getChat, useChat } from "./ChatProvider.js"

const contentTarget = document.querySelector(".chat_container")
const eventhub = document.querySelector(".container")

contentTarget.addEvent("chatStateChanged", customEvent => {
    render()
})


const render = () => {

getChat().then(() => {
    const allTheChat = useChat()
    
    contentTarget.innerHTML = allTheChat.map(
        currentChatObject => {

            return Chat(currentChatObject)
        }
        ).join("")
    })
}

export const ChatList = () => {
    render()
}