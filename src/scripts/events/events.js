//this module is responsible for the events HTML representation
import { useEvents } from "./EventsProvider.js"

export const eventsHTMLrep = (event) => {
    const events = useEvents()
    if (event === events[0]) {
        return `
        <article class="eventsNext" id="event--${event.id}"><b>
          <div id="nextEventHeader"><h2>Next Event</h2></div>
         <div><b>Event:</b> ${event.name}</div>
         <div><b>Date:</b> ${event.date} Time: ${event.time}</div>
         <div><b>Where:</b> ${event.location}</div>
         <div><b>Notes:</b> ${event.notes}</div>
         <button class="eventDelete" id="deleteEvent--${event.id}">Delete</button>
         </b></article>`
    } else {
        return `
        <article class="events" id="event--${event.id}">
         <div><b>Event:</b> ${event.name}</div>
         <div><b>Date:</b> ${event.date} Time: ${event.time}</div>
         <div><b>Where:</b> ${event.location}</div>
         <div><b>Notes:</b> ${event.notes}</div>
         <button class="eventDelete" id="deleteEvent--${event.id}">Delete</button>
        </article>
        `
    }
   
}