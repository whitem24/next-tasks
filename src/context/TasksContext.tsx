"use client"
import { createContext, ReactNode, useContext, useState } from "react";
import { task } from "@/types/types";
import {v4 as uuidv4} from 'uuid';
import Delete from "@/utils/Delete";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type TaskContextProps = {
  children: ReactNode;
};
type TasksContextType = {
  tasks: task[],
  createTask: (title: string, description: string) => void,
  deleteTask: (id : string) => void,
  updateTask : (id: string, updatedTask: task) => void,
};

export const TaskContext = createContext<TasksContextType | undefined>(undefined);

export const useTasks = () => {
  const context = useContext(TaskContext);
  if(!context) throw new Error('useTasks should be used within provider');
  return context;
}
export const TaskProvider = ({ children }: TaskContextProps) => {

  /* const [tasks, setTasks] =  useState<task[]>([]); */
  const [tasks, setTasks] =  useLocalStorage("tasks", []);

  //Crud
  const createTask = (title:string, description:string) => 
    setTasks([...tasks, {title, description, id:uuidv4()}]);

  const updateTask = (id:string, updatedTask:task) => {
    console.log(updatedTask);
    setTasks([...tasks.map((task:task) => {
      if(task.id === id){
        return {...task,...updatedTask}
      }else{
        return task;
      }
    })]);
    /* task.id === id ? {...task, updatedTask} : task) */
  }
  const deleteTask = (id:string) => {
    Delete({setTasks, tasks, id});
  }
  //Crud

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};




