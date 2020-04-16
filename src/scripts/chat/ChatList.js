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

chatContentTarget.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "chat_button") {
        newMessage = document.querySelector("#newMessage").value

        if (newMessage !== "") {
            const newMessageObject = {
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
    
    chatContentTarget.innerHTML = `
    <article class="ChatText">
    ${messages
    .map((message) =>{
        const user = users.find((user) => user.id === message.userId)
        return ChatHTML(message, user)
    })
    .join("")}
    <div class="chatForm">${ChatForm()}</div>
    </article>
    `
}

export const ChatList = () => {
    render()
}

