
import React, { useState, useEffect } from 'react'

export default function useLocalStorage(key, fallbackValue) {
    const [value, setValue] = useState(fallbackValue);

    useEffect(() => {
        const stored = localStorage.getItem(key);
        // console.log(localStorage)
        if (stored !== undefined) {
            setValue(JSON.parse(stored));
        }
        // console.log('update 1', stored !== undefined ? JSON.parse(stored) : fallbackValue)
    }, [key]);

    useEffect(() => {
        if (value !== fallbackValue) {
            localStorage.setItem(key, JSON.stringify(value))
            // console.log('update 2', value)
        }
    }, [key, value]);

    return [value, setValue];
}