'use client'
import React from 'react';
import Link from 'next/link';
import { AiOutlineForm, AiOutlinePlusCircle } from 'react-icons/ai';
import { useTasks } from '@/context/TasksContext';

const Navigation = () => {
const { tasks } = useTasks();
return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-teal-100 mr-6 hover:text-white">
                <AiOutlineForm size={30}/>
                <Link href="/" className="font-semibold text-xl tracking-tight ml-3">
                    Tasks - App
                </Link>
                <span className="text-teal-100 ms-7 text-sm shadow-sm rounded-md bg-teal-700 px-3 py-1 ml-3 mt-2 font-semibold">{tasks && tasks.length} tasks</span>

            </div>
            {/* <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            </div> */}
            <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                <div className="text-sm sm:flex-grow">
                    
                </div>
                <div>
                    <Link href="/new" className="relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-white text-teal-200 hover:text-white bg-teal-700">
                    Add task 
                    </Link>
                </div>
            </div>
        </nav>
  )
}

export default Navigation