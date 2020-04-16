export const ChatHTML = (chatObject) => {
    return `
    <section class="chat">
    <p>${chatObject.chatText}</p>
    <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
    </section>
    `
}