import { Welcome } from "./welcome/welcome.js";

import { newsListComponent } from "./news/NewsList.js";
import { getNews } from "./news/NewsProvider.js";
import { newsForm } from "./news/NewsForm.js";
import { renderAddArticleButton } from "./news/ArticleButtons.js";


import { eventsListComponent } from "./events/eventList.js";
import { getEvents } from "./events/EventsProvider.js";
import { eventFormDialog } from "./events/eventForm.js";
import { renderAddEventButton } from "./events/addEventButton.js";


//Welcome()

getNews()
.then(newsListComponent)
renderAddArticleButton()
newsForm()


getEvents()
.then(eventsListComponent)
eventFormDialog()
renderAddEventButton()

