export const ChatHTML = (chatObject, userObject) => {
    return `
    <section class="chat">
    <div class="message">${chatObject.message}</div>
    </section>
    `
}