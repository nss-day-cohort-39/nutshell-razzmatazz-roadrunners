import { eventsListComponent } from "./events/eventList.js";
import { getEvents } from "./events/EventsProvider.js";
import { eventFormDialog } from "./events/eventForm.js";
import { renderAddEventButton } from "./events/addEventButton.js";
import { ChatBox } from "./chat/ChatBox.js";
import { ChatList } from "./chat/ChatList.js";

getEvents()
.then(eventsListComponent)
eventFormDialog()
renderAddEventButton()

ChatBox()
.then(ChatList)
