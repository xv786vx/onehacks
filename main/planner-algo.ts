import TaskHandler from "./taskhandler";
import Task, { TaskPriority, Percentage } from "./task";
import path from "path";

function taskk_distribution(tasks: Task[], start_hour: number, end_hour: number) {
    let output: number[] = [];
    for (let i = 0; i < tasks.length; i++) {
        let days_left_sum: number = 0;
        let priority_sum = 0;
        let progress_sum = 0;

        for (let y = 0; y < tasks.length; y++) {
            days_left_sum += get_day_difference(Date.now(), Task[i].due_date);
            priority_sum += Task[i].priority;
            progress_sum += Task[i].progress;
        }

        let days_left: number = get_day_difference(Date.now(), Task[i].due_date);
        output.push(Math.round(60 * ((days_left + tasks[i].priotity + tasks[i].progress.value) / (days_left_sum + priority_sum + progress_sum) / (end_hour - start_hour))));

        return output
    }
}

function get_day_difference(startDate: number, endDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000

    return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);
}

const task_handler: TaskHandler = new TaskHandler(path.join(__dirname, "tasks.json"));

task_handler.add_task(new Task("Thing 1", new Date(Date.now()+10000)));// optionally add priority and percentage
task_handler.add_task(new Task("Thing 2", new Date(Date.now()+20000), TaskPriority.HIGH, new Percentage(70)));


taskk_distribution(task_handler.tasks, 2, 5);
