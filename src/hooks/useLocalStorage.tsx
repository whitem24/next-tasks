import React, {useState, useEffect} from 'react'

export const useLocalStorage = (key: string, initialState: any) => {
    const [state, setState] = useState(() => {
      if (typeof window !== 'undefined') {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialState;
      }
    });
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(state));
      }
    }, [key, state]);
  
    return [state, setState];
  };
  