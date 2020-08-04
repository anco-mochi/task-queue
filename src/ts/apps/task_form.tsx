import React, { ChangeEvent } from 'react'
import TaskQueue from '../lib/task_queue'
import Task from '../lib/task'
import TaskList from './task_list'

type TaskFormProps = {};
type TaskFormState = {
  taskQueue: TaskQueue;
  description: string;
};

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
      super(props);
      this.state = { taskQueue: new TaskQueue(10), description: '' }
      this.pushTaskQueue = this.pushTaskQueue.bind(this);
  }

  pushTaskQueue() {
    this.setState({
      taskQueue: this.state.taskQueue.push(
          new Task(this.state.description)
      ),
      description: ''
    });
  }

  popTaskQueue() {
    this.setState({
      taskQueue: this.state.taskQueue.pop()
    })
  }

  onChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    this.setState({
      description: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="inline-block box-border w-full h-19">
          <textarea
            className="inline-block box-border w-full h-full outline-none p-1 text-lg resize-none text-gray-600"
            placeholder="Write task"
            value={ this.state.description }
            onChange={ (e) => this.onChange(e) }>
          </textarea>
        </div>
        <div className="inline-block box-border w-full border-b-2 border-gray-400">
          <button
            className="bg-red-400 hover:bg-red-500 px-6 py-1 text-white float-right rounded mb-1 mr-1"
            onClick={() => { this.popTaskQueue() }}>Pop</button>
          <button
            className="bg-green-400 hover:bg-green-500 px-6 py-1 text-white float-right rounded mb-1 mr-1"
            onClick={() => { this.pushTaskQueue()} }>Add</button>
        </div>
        <TaskList
          task_queue={ this.state.taskQueue }
        />
      </div>
    );
  }
}

export default TaskForm
