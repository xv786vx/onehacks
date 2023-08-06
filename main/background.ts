import { app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";

import testNotification from "./example";

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

  ipcMain.handle("test-notification", (_, inputTitle, inputBody) => {
    const result = testNotification(inputTitle, inputBody);
    return result;
  });
})();

app.on("window-all-closed", () => app.quit());
