const render = () => {
    return `
    <form>
        <input id="NewMessage" type="text" placeholders="Enter your message here..." maxlength="100" required>
        <button type="button" class="chatText_Button">Send message</button>
    </form>
    `
}

export const ChatForm = () => {
    return render ()
}