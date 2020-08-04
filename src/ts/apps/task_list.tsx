import React from 'react'
import TaskQueue from '../lib/task_queue'
import Task from '../lib/task'

type Props = {
  task_queue: TaskQueue;
}

const TaskList: React.FC<Props> = (props) => {
  return (
    <div>
      {props.task_queue.queue.map((task: Task, index: number) => (
        <div className="inline-block box-border w-full h-auto bg-gray-100 px-4 py-2 border-b border-gray-400">
          <p className="inline-block text-gray-600 break-all text-lg">{ task.description }</p>
        </div>
      ))}
    </div>
  )
}

export default TaskList
