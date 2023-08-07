import { app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import { get_tasks, add_task } from "./taskhandler";
import taskk_distribution from "./planner-algo";
import Task, { TaskPriority, percentage } from "./task";

const isProd: boolean = process.env.NODE_ENV === "production";

if (isProd) serve({ directory: "app" });
else app.setPath("userData", `${app.getPath("userData")} (development)`);

(async () => {
  // Temporary
  add_task(new Task("Thing 1", new Date(Date.now()+10000), TaskPriority.MEDIUM, percentage(40)));
  add_task(new Task("Thing 2", new Date(Date.now()+25000), TaskPriority.HIGH, percentage(70)));
  add_task(new Task("Thing 3", new Date(Date.now()+25000), TaskPriority.LOW, percentage(10)));
  add_task(new Task("Thing 4", new Date(Date.now()+25000), TaskPriority.HIGH, percentage(20)));

  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  if (isProd) await mainWindow.loadURL("app://./home.html");
  else await mainWindow.loadURL(`http://localhost:${process.argv[2]}/home`);

  ipcMain.handle("test-algorithm", (_, _start, _end) => {
    console.log(get_tasks());
    const result: number[] = taskk_distribution(get_tasks(), 2, 5);
    console.log(result);
    return result;
  })
})();

app.on("window-all-closed", () => app.quit());
