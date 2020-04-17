const render = () => {
    return `
    <form>
        <input id="newMessage" type="text" placeholders="Enter your message here..." maxlength="100" required>
        <button type="button" class="chatText_Button" id="chat_button">Send message</button>
    </form>
    `
}

export const ChatForm = () => {
    return render ()
}