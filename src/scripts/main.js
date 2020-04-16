import { tasksListComponent } from "./tasks/TaskList.js";
import { getTasks } from "./tasks/TaskProvider.js";
import { taskFormDialog } from "./tasks/TaskForm.js";
import { renderAddTaskButton } from "./tasks/AddTaskButton.js";
import { eventsListComponent } from "./events/eventList.js";
import { getEvents } from "./events/EventsProvider.js";
import { eventFormDialog } from "./events/eventForm.js";
import { renderAddEventButton } from "./events/addEventButton.js"

getTasks()
.then(tasksListComponent)
taskFormDialog()
renderAddTaskButton()

getEvents()
.then(eventsListComponent)
eventFormDialog()
renderAddEventButton()

