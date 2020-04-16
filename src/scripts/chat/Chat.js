export const Chat = (chatObject) => {
    return `
    <section class="note">
    <p>${chatObject.chatText}</p>
    <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
    </section>
    `
}