import { Welcome } from "./welcome/welcome.js";
import { newsListComponent } from "./news/NewsList.js";
import { renderAddArticleButton } from "./news/AddArticleButton.js";
import { newsForm } from "./news/NewsForm.js";
import { eventsListComponent } from "./events/eventList.js";
import { getEvents } from "./events/EventsProvider.js";
import { eventFormDialog } from "./events/eventForm.js";
import { renderAddEventButton } from "./events/addEventButton.js";

Welcome()
newsListComponent()
renderAddArticleButton()
newsForm()


getEvents()
.then(eventsListComponent)
eventFormDialog()
renderAddEventButton()

