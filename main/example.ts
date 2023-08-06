import { Notification } from "electron";

function testNotification(title: string, body: string) {
  if (title.length == 0 && body.length == 0)
    body = "An empty notification was provided, so this is sent instead.";
  new Notification({
    title,
    body,
  }).show();
}

export default testNotification;
