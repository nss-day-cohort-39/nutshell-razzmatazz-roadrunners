import { saveChat, useChats } from "./chatProvider.js"
import { ChatHTML } from "./Chat.js"
import { ChatForm } from "./ChatForm.js"
import { useUsers } from "../registration/RegistrarionProvider.js"

const chatContentTarget = document.querySelector(".chat_container")
const eventhub = document.querySelector('#container')
let newMessage = ""

eventhub.addEventListener("chatStateChanged", (customEvent) => {
    render()
})

contentTarget.addEventListener("click", (clickEvent) => {
    if (clickEvent,target.id == "sendMessage") {
        newMessage = document.querySelector("newMessage").value

        if (newMessage !== "") {
            const userId = parseInt(sessionStorage.getItem("activeUser"))
            const newMessageObject = {
                userId: userId,
                message: newMessage,
            }
            saveChat(newMessageObject)
        } else {
            alert("Please input a chat message.")
        }
    }
})

const render = () => {
    const users = useUsers()
    const messages = useChats()
    
    contentTarget.innerHTML = `
    <article class="ChatText">
    ${messages
    .map((message) =>{
        const user = users.find((user) => user.id === message.userId)
        return chatHTML(message, user)
    })
    .join("")}
    <div class="chatForm">${ChatForm()}</div>
    </article>
    `
}

export const ChatList = () => {
    render()
}

