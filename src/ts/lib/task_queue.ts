import { Task } from './task';

export class TaskQueue {
    queue: Array<Task>;
    limit: number;

    constructor(limit: number, queue: Array<Task> = []) {
        this.queue = queue;
        this.limit = limit;
    }

    push(task: Task): TaskQueue {
        if(this.queue.length >= this.limit) {
            return this;
        }

        let pushed_queue = this.queue.concat();
        pushed_queue.push(task);
        return new TaskQueue(this.limit, pushed_queue);
    }

    pop(): TaskQueue {
        let poped_queue: Array<Task> = this.queue.concat().reverse();

        if(!poped_queue.pop()) {
            return this;
        }

        return new TaskQueue(this.limit, poped_queue.reverse());
    }

    isFull(): Boolean {
        return this.queue.length === this.limit;
    }
}

export default TaskQueue
