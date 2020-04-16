import { registrationForm } from "./registration/RegistrationForm.js";
import { eventsListComponent } from "./events/eventList.js";
import { getEvents } from "./events/EventsProvider.js";
import { eventFormDialog } from "./events/eventForm.js";
import { renderAddEventButton } from "./events/addEventButton.js";
import { ChatList } from "./chat/ChatList.js";
import { getChat } from "./chat/ChatProvider.js";

getEvents()
.then(eventsListComponent)
eventFormDialog()
renderAddEventButton()
registrationForm()
getChat()
ChatList()
