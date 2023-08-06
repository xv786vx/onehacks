import { app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";

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
})();

app.on("window-all-closed", () => app.quit());
