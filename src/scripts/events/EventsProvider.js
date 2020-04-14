//This module is responsible for getting the events data

const eventHub = document.querySelector(".container")
//dispatch events state has changed
const dispatchStateChangeEvent = () => {
    const eventsStateChanged = new CustomEvent("eventsStateChanged")
    eventHub.dispatchEvent(eventsStateChanged)
}
export const useEvents = () => events.slice()

let events = []

export const getEvents = () => {
    return fetch('http://localhost:8088/Events')
        .then(response => response.json())
        .then(parsedEvents => {
            events = parsedEvents
        })
} 

export const deleteEvents = (eventId) => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
        .then(getEvents)
        .then(dispatchStateChangeEvent)
}

export const saveEvents = (event) => {
    return fetch('http://localhost:8088/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //convert object into string that reps object w/ json.stringify
        body: JSON.stringify(event)
    })
    .then(getEvents)
    .then(dispatchStateChangeEvent)
}
