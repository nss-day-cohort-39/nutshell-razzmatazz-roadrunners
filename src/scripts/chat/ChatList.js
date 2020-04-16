import { ChatHTML } from "./Chat.js"
import { saveChat, useChat } from "./ChatProvider.js"
import { ChatBoxHTML } from "./ChatBox.js"

const eventhub = document.querySelector('#container')
const chatContentTarget = document.querySelector(".chat_container")
const chatTextContenttarget = document.querySelector(
    '.chatText_container'
)
export const ChatList = () => {
    render()
}





const render = (chat) => {


}

export const ChatList = () => {
    const messages = useChats()
    render(messages)
}