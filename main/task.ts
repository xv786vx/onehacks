enum TaskPriority {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

class Task {
    name: string;
    due_date: Date;
    priotity: TaskPriority;
    progress: Percentage;

    constructor(name: string, due_date: Date, priotity?: TaskPriority, progress?: Percentage) {
        this.name = name;
        this.due_date = due_date;
        this.priotity = priotity || TaskPriority.MEDIUM;
        this.progress = progress || new Percentage(0);
    }
}

class Percentage {
    private _value: number;

    constructor(value: number) {
        this._value = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        if (value < 0) this._value = 0;
        else if (value > 100) this._value = 100;
        else this.value = Math.round(value);
    }
}

export default Task;
export {
    TaskPriority, Percentage
}