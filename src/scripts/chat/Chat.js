export const ChatHTML = (chatObject, userObject) => {
    return `
    <section class="chat">
    <div class="username">${userObject.username}</div>
    <div class="message">${chatObject.message}</div>
    </section>
    `
}