import Image from "next/image";
import { useEffect, useState } from "react";
import { AuthLayoutProps } from "./layout.interface";

const AuthLayout = (props: AuthLayoutProps) => {

    const [theme, setTheme] = useState('dark');



    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark')
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    return ( 
        <main className="relative flex min-h-full">

            {props.children}

        </main>
     );
}
 
export default AuthLayout;