import Swal from 'sweetalert2';
import { task } from '@/types/types';
import { SetStateAction } from 'react';

type AlertProps = {
    setTasks : (value: SetStateAction<task[]>) => void,
    tasks : task[],
    id:string
}
export const Delete = ({setTasks, tasks, id}:AlertProps) => {
    Swal.fire({
        title: 'Do you want to delete the task?',
        buttonsStyling: false,
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        customClass: {
          popup : 'bg-teal-600 border-4 border-teal-500',
          title: 'text-teal-50',
          actions: 'my-actions',
          confirmButton: 'relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base group md:px-4 hover:bg-teal-800 focus:ring-opacity-50 hover:ring-white text-teal-200 hover:text-teal-50 bg-teal-700',
          denyButton: 'relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base group md:px-4 hover:bg-red-600 focus:ring-opacity-50 hover:ring-white text-red-200 hover:text-red-50 bg-red-700',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          setTasks([...tasks.filter(task => task.id !== id)])
          Swal.fire({
            buttonsStyling: false,
            icon: 'success',
            title: 'The task has been deleted.',
            customClass: {
              confirmButton: 'relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base group md:px-4 hover:bg-teal-800 focus:ring-opacity-50 hover:ring-white text-teal-200 hover:text-teal-50 bg-teal-700',
              popup : 'bg-teal-600',
              container: 'border-4 border-teal-500',
              title: 'text-teal-50',
              actions: 'my-actions',
            }
          });
        } else if (result.isDenied) {
          return;
        }
      })
  
}

export default Delete