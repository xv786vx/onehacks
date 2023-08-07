enum TaskPriority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

class Task {
  name: string;
  due_date: Date;
  priority: TaskPriority;
  progress: number;

  constructor(
    name: string,
    due_date: Date,
    priority?: TaskPriority,
    progress?: number
  ) {
    this.name = name;
    this.due_date = due_date;
    this.priority = priority || TaskPriority.MEDIUM;
    this.progress = progress || percentage(0);
  }
}

function percentage(value: number): number {
  if (value < 0) return 0;
  else if (value > 100) return 100;
  else return Math.round(value);
}

export default Task;
export { TaskPriority, percentage };
