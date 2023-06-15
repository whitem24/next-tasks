"use client"
import React from 'react'
import { useTasks } from '@/context/TasksContext';
import TaskCard from '@/components/TaskCard';
import NoTasks from '@/components/NoTasks';
const List = () => {
    const { tasks } = useTasks();
    console.log(tasks);
    if(!tasks || tasks.length===0)
        return <NoTasks/>
    return (
        
        <>
          <div className="grid grid-cols-3 gap-4 py-10 px-20">
            {tasks.map(task => {
                  console.log(task)
                  return (
                    <div className="ml-6 my-5 px-5 max-w-sm" key={task.id}>
                      <TaskCard task={task}/>
                    </div>
                  )
              })}
          </div>
        </>
    )
}

export default List