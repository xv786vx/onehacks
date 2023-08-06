function task_distribution(matrix: number[][], start: number, end: number) {
    let output: number[] = [];
    for (let i = 0; i < matrix.length; i++) {
        output.push((matrix[i][0] + 
                     matrix[i][1] + 
                     matrix[i][2]) / (matrix[0].reduce((a, b, c) => a + b +c) + 
                                      matrix[1].reduce((a, b, c) => a + b +c) + 
                                      matrix[2].reduce((a, b, c) => a + b +c)));
    } 

    return determine_study_time(output, start, end)
}

function determine_pomodoro_blocks(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        array[i] = 1 - array[i];
    }

    let output: number[] = [];
    for (let i = 0; i < array.length; i++) {
        output.push(Math.ceil((30 / array[i]) / 10) * 10);
    }

    return output;
}

function determine_study_time(array: number[], start: number, end: number): number[] {
    let study_time = end - start;
    for (let i = 0; i < array.length; i++) {
        array[i] * study_time;
    }

    return array;
}

let tasks: number[][] = [[5, 2, 0.4], 
                         [3, 3, 0.6], 
                         [3, 1, 0.8]];

task_distribution(tasks, 2, 4)
/*
days_left = due date - current date
priority = priority
progress left = 1 - current_progress

1st column = days_left
2nd column = priority enum (1 = lowest, 3 = highest)
3rd column = progress left 
*/