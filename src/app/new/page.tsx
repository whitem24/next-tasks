'use client'
import React, {useEffect} from 'react';
import { Form, useForm } from 'react-hook-form';
import { ResolverForm } from '@/utils/Resolver';
import { FormValues } from '@/types/types';
import { useTasks } from '@/context/TasksContext';
import { useRouter } from 'next/navigation';
import FormComponent from '@/components/Form';

type NewTaskProps = {
    params:{
        id:string;
    }
}
const NewTask = ({params}: NewTaskProps) => {
    const router = useRouter();
    const { tasks, createTask, updateTask } = useTasks();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
      } = useForm<FormValues>({
        resolver: ResolverForm
      });
    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTask(params.id, data);
        }else{
            createTask(data.title, data.description);
        }
        router.push("/");
        
    });

    const handleReset = () => {
        if (params.id) {
            const taskFound = findTask();
            if(taskFound){
                setValue("title", taskFound.title);
                setValue("description", taskFound.description);
            }
        }else{
            setValue("title", "");
            setValue("description", "");
        }
       
    }

    const findTask = () => {
        return tasks.find(task => task.id === params.id);
    }

    useEffect(() => {
        const taskFound = findTask();
        if(taskFound){
            setValue("title", taskFound.title);
            setValue("description", taskFound.description);
          }
    }, [params.id])
    
    return (
        <FormComponent values={{register, onSubmit, errors, handleReset}}/>   
    )
}

export default NewTask