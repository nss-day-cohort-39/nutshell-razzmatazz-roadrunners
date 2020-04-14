const contentTarget = document.querySelector("#addEvent")
const eventHub = document.querySelector(".container")
const addEventButton = () =>{
  return  `<button id="addEvent">Add Event</button>`
}
export const renderAddEventButton = () =>{
  const theAddEventButton = addEventButton()
    contentTarget.innerHTML = theAddEventButton
}

//listening for add event button clicked and dispatchiing that it was
contentTarget.addEventListener("click", e => {
  if(e.target.id === "addEvent") {
      const showAddEventForm = new CustomEvent("addEventClicked")
      eventHub.dispatchEvent(showAddEventForm)
     }
  })
