import { saveEvents } from "./EventsProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eventFormContainer")

export const eventFormDialog = () => {
      contentTarget.innerHTML = `
      <dialog class="dialog--eventForm" id="eventForm">
      <form action="">
      <fieldset>
          <label for="eventName">Event Name</label>
          <input type="text" id="eventName"></input>
      </fieldset>
    </form>
      <form action="">
      <fieldset class="entryDataForm">
          <label for="eventDate">Date of Event</label>
          <input type="date" name="eventDate" id="eventDate">
      </fieldset>
  </form>
  <form action="">
      <fieldset>
          <label for="eventTime">Time</label>
          <input type="time" name="eventTime" id="eventTime">
      </fieldset>
  </form>
  <form action="">
      <fieldset>
          <label for="eventLocation">Event Location</label>
          <input type="text" id="eventLocation"></textarea>
      </fieldset>
  </form>
  <form action="">
  <fieldset>
      <label for="eventNotes">Event Notes</label>
      <textarea name="eventNotes" id="eventNotes"></textarea>
  </fieldset>
</form>
 
  <section class="button">
     <button id="saveEvent" type="submit">Save Event</button>    
  </section>
  <button class ="button" id= "button--close">Close</button>
  </dialog>`
//listening for close button clicked
  eventHub.addEventListener("click", e =>{
    if(e.target.id === "button--close"){
     document.querySelector("#eventForm").close()
    }
 })
  
}

//listening for add event button clicked
eventHub.addEventListener("addEventClicked", CustomEvent => {
    document.querySelector("#eventForm").showModal()
})

//listening for save event button clicked
eventHub.addEventListener("click", e => {
    if(e.target.id === "saveEvent") {
        const eventName = document.querySelector("#eventName").value
        const eventDate = document.querySelector("#eventDate").value
        const eventTime = document.querySelector("#eventTime").value
        const eventLocation = document.querySelector("#eventLocation").value
        const eventNotes = document.querySelector("#eventNotes").value

        const newEvent = {
            name: eventName,
            date: eventDate,
            time: eventTime,
            location: eventLocation,
            notes: eventNotes
        }
        saveEvents(newEvent)
    }
})
