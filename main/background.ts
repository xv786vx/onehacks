import { app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import { get_tasks, add_task } from "./taskhandler";
import task_distribution from "./planner-algo";

import Task, { TaskPriority, percentage } from "./task";

const isProd: boolean = process.env.NODE_ENV === "production";

if (isProd) serve({ directory: "app" });
else app.setPath("userData", `${app.getPath("userData")} (development)`);

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
  });

  if (isProd) await mainWindow.loadURL("app://./home.html");
  else await mainWindow.loadURL(`http://localhost:${process.argv[2]}/home`);

  ipcMain.handle("add-task", (_, name: string, due_date, priorityStr: string, progress: number) => {
    let priority: TaskPriority;

    switch (priorityStr) {
      case "Low": priority = TaskPriority.LOW; break;
      case "Medium": priority = TaskPriority.MEDIUM; break;
      case "High": priority = TaskPriority.HIGH; break;
      default: priority = TaskPriority.MEDIUM; break;
    }

    const result: void = add_task(new Task(name, new Date(due_date), priority, percentage(progress)));
    return result;
  })

  // unused
  ipcMain.handle("distribute-tasks", (_, start_hour, end_hour) => {
    const result: number[] = task_distribution(get_tasks(), start_hour, end_hour);
    return result;
  });
})();

app.on("window-all-closed", () => app.quit());
