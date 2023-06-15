import Link from 'next/link'
import React from 'react'

const NoTasks = () => {
  return (
    
<section className="bg-transparent dark:bg-transparent mt-20">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h3 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-teal-100 md:text-3xl lg:text-4xl dark:text-white">Add your first task by clicking the button in the Top/Right corner.</h3>
        <p className="mb-8 text-lg font-normal text-teal-400 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Thanks for the support.</p>
        {/* <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="/new" className="relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-white text-teal-200 hover:text-white bg-teal-700">
                Add task
            </Link>
            
        </div> */}
    </div>
</section>

  )
}

export default NoTasks