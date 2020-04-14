export const eventsHTMLrep = (event) => {
    return `
    <article class="events" id="event--${event.id}>
     <div>Event: ${event.name}</div>
     <div>${event.date} ${event.time}</div>
     <div>${event.location}</div>
     <div>${event.notes}</div>
     <button id="deleteEvent--${event.id}">Delete</button>
    </article>
    `
}