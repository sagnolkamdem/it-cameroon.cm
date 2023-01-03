import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Transition } from "@headlessui/react";
import { MoonIcon, SunIcon, Bars3Icon, ClockIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid"

import Button from "@/components/button/Button";
import Search from "../../input/Search";

const HeaderOffline = () => {

    const [theme, setTheme] = useState('dark');
    const [isShowing, setIsShowing] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);



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

    const handleSwitchShowMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
        console.log(showMobileMenu);
    }


    return ( 
        <header className="mx-5 sm:px-8 py-4 z-50">
            <div className="flex items-center">

                <div className="flex items-center max-xl:w-full">
                    <div className="w-10 h-6">
                        logo
                    </div>

                    <Search classMeta="ml-7 xl:w-60 w-full"/>


                    <div className="flex xl:hidden">
                        <button onClick={handleSwitchShowMobileMenu} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="hidden ml-6 w-8 h-8 text-slate-700 max-xl:block" />
                        </button>
                    </div>

                </div>

                {/* Mobile menu */}
                {
                    showMobileMenu && (
                        <div role="dialog" aria-modal="true">
                            <div className="fixed transition duration-1000 inset-0 z-10 overflow-y-auto bg-white dark:bg-gray-900 px-6 py-5 xl:hidden">
                                <div className="flex h-9 items-center justify-between">
                                    <div className="flex">
                                        <a href="#" className="-m-1.5 p-1.5">
                                            <span className="sr-only">Your Company</span>
                                            logo
                                        </a>
                                    </div>
                                    <div className="flex">
                                        <button onClick={handleSwitchShowMobileMenu} type="button" className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                            <span className="sr-only">Close menu</span>
                                            <ArrowLongRightIcon className="w-8 h-8 text-slate-700" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            <Link href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100">Made in CMR</Link>

                                            <Link href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100">Carreers</Link>

                                            <Link href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100">Inspirations</Link>

                                            <Link href="/events" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100">Events</Link>

                                            <Link href="/blog" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100">Blog</Link>
                                        </div>
                                        <div className="py-6">
                                            <div className="flex flex-col gap-6 items-start justify-start">

                                                <Button href="login">Se connecter</Button>

                                                <Button href="share-made-in-cameroon" intent="primary">Partager votre solution</Button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                

                <div className="hidden xl:flex justify-end flex-1 ml-7">
                    <nav className="flex justify-end gap-6 items-center text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100">
                        <a href="made-in-cmr" className="font-medium">Made in Cmr</a>
                        <a href="carreers" className="font-medium">Careers</a>
                        <a href="inspirations" className="font-medium">Inspirations</a>
                        <a href="events" className="font-medium">Events</a>
                        <a href="blog" className="font-medium">Blog</a>
                    </nav>

                    <div className="flex gap-4 items-center ml-20">

                        <Button href="login">Se connecter</Button>

                        <Button href="share-made-in-cameroon" intent="primary">Partager votre solution</Button>

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