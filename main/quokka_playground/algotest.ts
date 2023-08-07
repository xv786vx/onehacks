import Task from "./task";

function taskk_distribution(tasks: Task[], start_hour: number, end_hour: number) {
    let output: number[] = [];
    for (let i = 0; i < tasks.length; i++) {
        let days_left_sum: number = 0;
        let priority_sum: number = 0;
        let progress_sum: number = 0;

        for (let y = 0; y < tasks.length; y++) {
            days_left_sum += get_day_difference(new Date(), tasks[i].due_date);
            priority_sum += tasks[i].priority;
            progress_sum += tasks[i].progress;
        }

        let days_left: number = get_day_difference(new Date(), tasks[i].due_date);

        output.push(Math.round(60 * ((days_left + tasks[i].priority + tasks[i].progress) / (days_left_sum + priority_sum + progress_sum) / (end_hour - start_hour))));

        return output
    }
}

function get_day_difference(startDate: Date, endDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs(Number(endDate) - Number(startDate)) / msInDay);
}

export default taskk_distribution;