let registration = []

const eventHub = document.querySelector("#container")

const dispatchStateChangeEvent = () => {
    const registrationStateChangedEvent = new CustomEvent("registrationStateChanged")

    eventHub.dispatchEvent(registrationStateChangedEvent)
}

// Allow other modules to get a copy of the application state
export const useRegistration = () => registration.slice()

export const getRegistration = () => {
    return fetch('http://localhost:8088/users')
        .then(response => response.json())
        .then(parsedRegistration => {
            registration = parsedRegistration
        })

}

export const saveRegistration = registration => {
    return fetch('http://localhost:8088/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registration)
    })
    .then(getRegistration)
    .then(dispatchStateChangeEvent)
}