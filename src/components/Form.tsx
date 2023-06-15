import React from 'react'
import { FormValues } from '@/types/types';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

type FormProps = {
    values:{
        register: UseFormRegister<FormValues>,
        onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>,
        errors: FieldErrors<FormValues>
        handleReset:any
    }

}
const Form = ({values}:FormProps) => {
  return (
    <div className="flex justify-center mt-20 px-8">
            <form className="max-w-2xl" onSubmit={values.onSubmit}>
                <div className="flex flex-wrap border-4 shadow-xl rounded-lg p-3 border-teal-500">
                    <h2 className="text-xl text-teal-100 dark:text-gray-300 pb-2">New Task</h2>

                    <div className="flex flex-col gap-2 w-full border-gray-400">

                        <div>
                            <label className="text-teal-100 dark:text-gray-400">Title</label>
                            <input
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                type="text" {...values.register("title")} placeholder="Title" />
                                {values.errors?.title && <p className={"text-red-300 bg-teal-700 shadow-lg mt-2 text-center rounded-md animate-bounce "}>{values.errors.title.message}</p>}

                        </div>

                        <div>
                            <label className="text-teal-100 dark:text-gray-400">Description</label>
                            <textarea
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                {...values.register("description")} placeholder="Description"/>
                                {values.errors?.description && <p className={"text-red-300 bg-teal-700 shadow-lg mt-2 text-center rounded-md animate-bounce "}>{values.errors.description.message}</p>}
                                
                        </div>

                        <div className="flex justify-between">
                        <button type="button" className="relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-white text-teal-200 hover:text-white bg-teal-700"
                        onClick={values.handleReset}>
                            Reset
                        </button>
                        <button type="submit" className="relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-white text-teal-200 hover:text-white bg-teal-700">
                            Save
                        </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default Form