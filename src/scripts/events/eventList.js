//this module is responsible for rendering the events container to DOM
import { getEvents, useEvents, deleteEvents } from "./EventsProvider.js"
import { eventsHTMLrep } from "./events.js"




const contentTarget = document.querySelector(".addedEvents_container")
const eventHub = document.querySelector(".container")

 eventHub.addEventListener("eventsStateChanged", e =>{
     render()
 })

 const render = () => {
    getEvents().then(()=>{
       
      const allTheEvents = useEvents()
         
      contentTarget.innerHTML = allTheEvents.map(currentEventObject =>{
          
            return eventsHTMLrep(currentEventObject)
        }).join(" ")
     })
}
export const eventsListComponent = () =>{
   render()
}

    //listening for delete button clicked
contentTarget.addEventListener("click", e =>{
    if(e.target.id.startsWith("deleteEvent--")){
        const [pefix, eventId] = e.target.id.split("--")
       deleteEvents(eventId)
    }
  })




   