export const Chat = (chatObject, userObject) => {
    return `
    <section class="chat">
    <div class="username">${userObject.username}</div>
    <div class="message">${chatObject.chat}</div>
    </section>
    `
}