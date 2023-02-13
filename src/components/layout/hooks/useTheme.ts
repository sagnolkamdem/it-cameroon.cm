import { useEffect, useState } from "react";

const useTheme = (theme: string) => {
    
    useEffect(() => {
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);
}

export default useTheme;