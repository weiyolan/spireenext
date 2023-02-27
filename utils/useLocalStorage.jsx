
import React, {useState, useEffect} from 'react'

export default function useLocalStorage(key, fallbackValue) {
    const [value, setValue] = useState(fallbackValue);
    
    useEffect(() => {
        const stored = localStorage.getItem(key);
        console.log(localStorage)

        setValue(stored ? JSON.parse(stored) : fallbackValue);
        console.log('update 1')
    }, [fallbackValue, key]);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
        console.log('update 2')
    }, [key, value]);

    return [value, setValue];
}