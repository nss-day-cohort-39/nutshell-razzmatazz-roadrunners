import { saveChat } from "./ChatProvider.js"

const contentTarget = document.querySelector("chat_container")

eventhub.addEventListener("chatSubmitButtonClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveChat") {
        const chatText = document.querySelector("#chatText").value
        
        const newChat = {
            chatText: chatText,
            timestamp: Date.now()
        }
        saveChat(newChat)
    }
})

const render = () => {
    contentTarget.classList.add("invisible")

    contentTarget.innerHTML = `
    <fieldset>
        <textarea id="chatText"></textarea>
    </fieldset>
    <button id="saveChat">Submit Message</button>
    `
}

export const ChatBox = () => {
    render()
}