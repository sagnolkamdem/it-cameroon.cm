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

            <section className="relative z-10 flex-1 hidden w-0 lg:block">{props.left}</section>

            <section className="relative z-10 max-lg:w-full items-center flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">{props.right}</section>

        </main>
     );
}
 
export default AuthLayout;