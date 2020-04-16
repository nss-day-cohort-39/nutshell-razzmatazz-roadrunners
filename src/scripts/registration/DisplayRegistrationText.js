const eventHub = document.querySelector("#container")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showRegistration") {
   
        const allRegistrationEvent = new CustomEvent("allRegistrationClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(allRegistrationEvent)
    }
})

export const DisplayRegistrationText= () => {
    return "<a id='showRegistration' href='#'>Register a new account</a>"
}