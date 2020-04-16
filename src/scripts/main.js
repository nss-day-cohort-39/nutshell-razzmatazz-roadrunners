import { tasksListComponent } from "./tasks/TaskList.js";
import { getTasks } from "./tasks/TaskProvider.js";
import { taskFormDialog } from "./tasks/TaskForm.js";
import { renderAddTaskButton } from "./tasks/AddTaskButton.js";
import { Welcome } from "./welcome/welcome.js";

import { newsListComponent } from "./news/NewsList.js";
import { getNews } from "./news/NewsProvider.js";
import { newsForm } from "./news/NewsForm.js";
import { renderAddArticleButton } from "./news/ArticleButtons.js";


import { registrationForm } from "./registration/RegistrationForm.js";
import { eventsListComponent } from "./events/eventList.js";
import { getEvents } from "./events/EventsProvider.js";
import { eventFormDialog } from "./events/eventForm.js";
import { renderAddEventButton } from "./events/addEventButton.js"

import { getChats } from "./chat/chatProvider.js";
import { ChatList } from "./chat/ChatList.js";
import { getUsers } from "./registration/RegistrarionProvider.js";

getTasks()
.then(tasksListComponent)
taskFormDialog()
renderAddTaskButton()


//Welcome()

getNews()
.then(newsListComponent)
renderAddArticleButton()
newsForm()


getEvents()
.then(eventsListComponent)
eventFormDialog()
renderAddEventButton()
registrationForm()

getUsers()
.then(getChats)
.then(ChatList)
