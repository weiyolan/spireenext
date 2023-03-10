
import React, { useState, useEffect } from 'react'

export default function useLocalStorage(key, fallbackValue) {
    const [value, setValue] = useState(fallbackValue);

    useEffect(() => {
        const stored = localStorage.getItem(key);
        // console.log(localStorage)
        setValue(stored !== undefined ? JSON.parse(stored) : fallbackValue);
        // console.log('update 1', stored !== undefined ? JSON.parse(stored) : fallbackValue)
    }, []);

    useEffect(() => {
        if (value !== fallbackValue) {
            localStorage.setItem(key, JSON.stringify(value))
            // console.log('update 2', value)
    }}, [key, value]);

    return [value, setValue];
}