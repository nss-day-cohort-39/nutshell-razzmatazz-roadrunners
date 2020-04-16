const eventHub = document.querySelector(".container")

export const ChatBox = () => {
    return `
    <section class="messageContainer">
    <input id="chatText" placeholder="Input your mssage here"
    <button id="saveChat>Send Message</button>
    </section>
    `
}

eventHub.addEventListener('click', (event) => {
    if (event.target.id === 'saveChat') {
        const chatMessage = document.querySelector('#chatText').value
        if (chatMessage) {
            const saveChatClickEvent = new CustomEvent('saveChatButtonClicked', {
                detail: { 
                    message: message
                }
            })
            eventHub.dispatchEvent(saveChatClickEvent)
        }
    }
})