'use client'
import React from 'react'
import { BsCardHeading } from 'react-icons/bs';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { task } from '@/types/types';
import { useTasks } from '@/context/TasksContext';
import Link from 'next/link';

type TaskProps = { 
    task:task
};
const TaskCard = ({task}:TaskProps) => {
    const { deleteTask } = useTasks();

    return (
    
    
        <div className="flex rounded-lg h-full bg-teal-700 px-8 py-5 flex-col border-4
        border-teal-500">
            <div className="flex justify-between mb-2">
                <div className="w-8 h-8 inline-flex items-center justify-center rounded-full text-teal-50 flex-shrink-0">
                    <BsCardHeading size={30}/>
                </div>
                <h2 className="text-white text-lg font-medium">{task.title}</h2>
            </div>
            <hr className="h-px w-full bg-teal-50 border-2 dark:bg-teal-100 mb-5"/>
            <div className="flex flex-col text-justify flex-grow">
                <p className="leading-relaxed text-teal-50 text-base">{task.description}</p>
            </div>
            <div className="flex justify-between mt-5">
                <Link href={`/edit/${task.id}`} type="submit" className="relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base group md:px-4 hover:bg-teal-600 focus:ring-opacity-50 hover:ring-white text-teal-200 hover:text-teal-50 bg-teal-700">
                    <AiOutlineEdit size={24}/>
                </Link>
                <button type="submit" className="relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base group md:px-4 hover:bg-teal-600 focus:ring-opacity-50 hover:ring-white text-teal-200 hover:text-teal-50 bg-teal-700" onClick={() =>{ task.id && deleteTask(task.id)}}>
                    <AiOutlineDelete size={24}/>
                </button>
            </div>
        </div>
    
  
    
                
  )
}

export default TaskCard