import path from "path";
import Task, { TaskPriority, percentage } from "./task";
import fs from "fs";

class TaskHandler {
  tasks: Task[];
  file_path: string;

  constructor(file_path: string) {
    this.file_path = file_path;
    this.tasks = this.read_tasks();
  }

  private read_tasks(): Task[] {
    if (!fs.existsSync(this.file_path)) {
      fs.writeFileSync(this.file_path, JSON.stringify([]), {
        encoding: "utf8",
      });

      return [];
    }

    const tasks_raw =
      JSON.parse(fs.readFileSync(this.file_path, { encoding: "utf8" })) ?? [];
    let tasks: Task[] = [];

    for (const task of tasks_raw) {
      tasks.push(
        new Task(
          task.name ?? "",
          task.due_date ?? new Date(null),
          number_to_task_priority(task.priority ?? 2),
          percentage(task.progress ?? 0)
        )
      );
    }

    return tasks;
  }

  private save_tasks(): void {
    fs.writeFileSync(this.file_path, JSON.stringify(this.tasks), {
      encoding: "utf8",
    });
  }

  add_task(task: Task): void {
    this.tasks.push(task);
    this.save_tasks();
  }

  remove_task(task_to_remove: Task): void {
    const index: number = this.tasks.indexOf(task_to_remove);
    if (index > -1) {
      this.tasks.splice(index, 1);
      this.save_tasks();
    }
  }
}

function number_to_task_priority(x: number): TaskPriority {
  switch (x) {
    case 1:
      return TaskPriority.LOW;
    case 2:
      return TaskPriority.MEDIUM;
    case 3:
      return TaskPriority.HIGH;
    default:
      return TaskPriority.MEDIUM;
  }
}

const handler: TaskHandler = new TaskHandler(
  path.join(__dirname, "tasks.json")
);

const get_tasks = () => handler.tasks;
const add_task = (task: Task) => handler.add_task(task);
const remove_task = (task: Task) => handler.remove_task(task);

export { get_tasks, add_task, remove_task };
