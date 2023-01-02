import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/20/solid"
import { Transition } from "@headlessui/react";

import ButtonPrimary from "../../button/Button-primary";
import ButtonSimple from "../../button/Button-simple";
import { useEffect, useState } from "react";
import Search from "../../input/Search";
import clsx from "clsx";

const HeaderOffline = () => {

    const [theme, setTheme] = useState('dark');
    const [isShowing, setIsShowing] = useState(false);



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
        } else {
          document.documentElement.classList.remove('dark')
        }

        localStorage.setItem('theme', theme);

    }, [theme]);



    const handleClick = () => {
        isShowing ? setIsShowing(false) : setIsShowing(true);
    }

    const handleSwitchTheme = (value: string) => {
        setTheme(value);
        localStorage.setItem('theme', value);
        handleClick();
    }


    return ( 
        <header className="mx-5 sm:px-8 py-4 z-50">
            <div className="flex items-center">

                <div className="flex items-center max-xl:w-full">
                    <div className="w-10 h-6">
                        logo
                    </div>

                    <Search classMeta="ml-7 xl:w-60 w-full"/>

                    <Bars3Icon className="hidden ml-6 w-10 h-10 text-slate-700 max-xl:block" />

                </div>

                <div className="hidden xl:flex justify-end flex-1 ml-7">
                    <nav className="flex justify-end gap-6 items-center text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100">
                        <a href="made-in-cmr" className="font-medium">Made in Cmr</a>
                        <a href="carreers" className="font-medium">Careers</a>
                        <a href="inspirations" className="font-medium">Inspirations</a>
                        <a href="events" className="font-medium">Events</a>
                        <a href="blog" className="font-medium">Blog</a>
                    </nav>

                    <div className="flex gap-4 items-center ml-20">

                        <ButtonSimple type="button">
                            Se connecter
                        </ButtonSimple>

                        <ButtonPrimary>
                            Partager votre solution
                        </ButtonPrimary>

                        <button className="relarive w-8 h-8 rounded-full shadow-md flex justify-center items-center dark:bg-gray-700" onClick={handleClick}>
                            {
                                theme === 'light' ?
                                    <SunIcon className="w-6 h-6 text-green-600" />
                                    :
                                    <MoonIcon className="w-6 h-6 text-green-600" />
                            }
                        </button>

                        <Transition
                            show={isShowing}
                            enter="transition-opacity duration-75"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            className="fixed z-50"
                        >

                            <ul aria-labelledby="tailwind-list-label" aria-orientation="vertical" id="tailwind-listbox-options" role="listbox" className="fixed z-50 p-3 mt-3 space-y-1 text-sm font-medium bg-white shadow-md top-16 right-5 w-36 rounded-xl shadow-black/5 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/5 ng-star-inserted">
                                <li className={clsx(
                                    "flex cursor-pointer select-none items-center rounded-[0.625rem] p-1 hover:bg-gray-100 dark:hover:bg-gray-900/40 ng-star-inserted",
                                    {
                                        "bg-gray-50": theme === "light"
                                    }
                                )}>
                                    <button onClick={() => {
                                        handleSwitchTheme('light');
                                    }} className="p-1 bg-white rounded-md shadow ring-1 ring-slate-900/5 dark:bg-gray-700 dark:ring-inset dark:ring-white/5">
                                        <SunIcon className="w-6 h-6 text-green-600" />
                                    </button>
                                    <div className="ml-3 text-green-500">Light</div>
                                </li>
                                
                                <li className={clsx(
                                    "flex cursor-pointer select-none items-center rounded-[0.625rem] p-1 hover:bg-gray-100 dark:hover:bg-gray-900 ng-star-inserted",
                                    {
                                        "bg-gray-50 dark:bg-gray-900/40": theme === "dark"
                                    }
                                )}>
                                    <button onClick={() => {
                                        handleSwitchTheme('dark');
                                    }}  className="p-1 bg-white rounded-md shadow ring-1 ring-slate-900/5 dark:bg-gray-700 dark:ring-inset dark:ring-white/5">
                                        <MoonIcon className="w-6 h-6 text-green-600" />
                                    </button>
                                    <div className="ml-3 text-slate-700 dark:text-slate-400">Dark</div>
                                </li>
                            </ul>
                        </Transition>
                        
                    </div>
                </div>

            </div>
        </header>
     );
}
 
export default HeaderOffline;