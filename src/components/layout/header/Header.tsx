import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Transition } from "@headlessui/react";
import { MoonIcon, SunIcon, Bars3Icon, EllipsisHorizontalIcon } from "@heroicons/react/20/solid"

import Button from "@/components/button/Button";
import Search from "../../input/Search";


import bigLogo from "../../../public/logo/complete.png";
import useTheme from "../hooks/useTheme";

const Header = () => {

    let { pathname } = useRouter();

    const [theme, setTheme] = useState('');
    const [isShowing, setIsShowing] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const [showFlyoutMenu, setShowFlyoutMenu] = useState(false);

    useTheme(theme);


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
    }


    return ( 
        <header className="mx-5 sm:px-8 py-4 z-50">
            <div className="flex items-center">

                <div className="flex items-center max-xl:w-full">
                    <Link href="/" className="h-full">
                        <Image width={200} height={40} src={bigLogo} alt="tech camer logo"/>
                    </Link>

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
                            <div className="fixed transition duration-1000 inset-0 top-14 z-10 overflow-y-auto bg-white dark:bg-gray-900 px-6 py-5 xl:hidden">
                                {/* <div className="flex h-9 items-center justify-between">
                                    <div className="h-full">
                                        <Image width={200} height={40} src={bigLogo} alt="tech camer logo"/>
                                    </div>

                                    <div className="flex">
                                        <button onClick={handleSwitchShowMobileMenu} type="button" className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                            <span className="sr-only">Close menu</span>
                                            <ArrowLongRightIcon className="w-8 h-8 text-slate-700" />
                                        </button>
                                    </div>
                                </div> */}
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            <Link 
                                                href="/made-in-cmr" 
                                                className={clsx(
                                                    "-mx-3 block rounded-lg py-2 px-10 text-base font-semibold leading-7",
                                                    {
                                                        "text-primary-600 hover:text-primary-400 dark:text-primary-600": pathname === "/made-in-cmr",
                                                        "text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100": pathname !== "/made-in-cmr",
                                                    }
                                                )}>
                                                    Made in CMR
                                            </Link>

                                            <Link 
                                                href="/jobs" 
                                                className={clsx(
                                                    "-mx-3 block rounded-lg py-2 px-10 text-base font-semibold leading-7",
                                                    {
                                                        "text-primary-600 hover:text-primary-400 dark:text-primary-600": pathname === "/jobs",
                                                        "text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100": pathname !== "/jobs",
                                                    }
                                                )}>
                                                    Jobs
                                            </Link>

                                            <Link 
                                                href="/events" 
                                                className={clsx(
                                                    "-mx-3 block rounded-lg py-2 px-10 text-base font-semibold leading-7",
                                                    {
                                                        "text-primary-600 hover:text-primary-400 dark:text-primary-600": pathname === "/events",
                                                        "text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100": pathname !== "/events",
                                                    }
                                                )}>
                                                    Events
                                                </Link>

                                            <Link 
                                                href="/blog" 
                                                className={clsx(
                                                    "-mx-3 block rounded-lg py-2 px-10 text-base font-semibold leading-7",
                                                    {
                                                        "text-primary-600 hover:text-primary-400 dark:text-primary-600": pathname === "/blog",
                                                        "text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100": pathname !== "/blog",
                                                    }
                                                )}>
                                                    Blog
                                            </Link>

                                            <Link 
                                                href="/inspiration" 
                                                className={clsx(
                                                    "-mx-3 block rounded-lg py-2 px-10 text-base font-semibold leading-7",
                                                    {
                                                        "text-primary-600 hover:text-primary-400 dark:text-primary-600": pathname === "/inspirations",
                                                        "text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100": pathname !== "/inspirations",
                                                    }
                                                )}>
                                                    Inspirations
                                                    <span className="ml-0.5 text-slate-400 text-xs">(Soon)</span>
                                            </Link>

                                            <Link 
                                                href="#" 
                                                className={clsx(
                                                    "-mx-3 block rounded-lg py-2 px-10 text-base font-semibold leading-7",
                                                    {
                                                        "text-primary-600 hover:text-primary-400 dark:text-primary-600": pathname === "/carreers",
                                                        "text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100": pathname !== "/carreers",
                                                    }
                                                )}>
                                                    Carreers
                                                    <span className="ml-0.5 text-slate-400 text-xs">(Soon)</span>
                                            </Link>
                                        </div>
                                        <div className="py-6 px-7">
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
                    <nav className="flex justify-end items-center text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100">
                        <Link 
                            href="/made-in-cmr" 
                            className={clsx(
                                "-mx-3 block mr-6 rounded-lg py-2 px-3 text-base font-semibold leading-7",
                                {
                                    "text-primary-600 hover:text-primary-400 dark:text-primary-600": pathname === "/made-in-cmr",
                                    "text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100": pathname !== "/made-in-cmr",
                                }
                            )}>
                                Made in CMR
                        </Link>

                        {/*<Link 
                            href="/jobs" 
                            className={clsx(
                                "-mx-3 block mr-6 rounded-lg py-2 px-3 text-base font-semibold leading-7",
                                {
                                    "text-primary-600 hover:text-primary-400 dark:text-primary-600": pathname === "/jobs",
                                    "text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100": pathname !== "/jobs",
                                }
                            )}>
                                Jobs
                        </Link>

                         <Link 
                            href="#" 
                            className={clsx(
                                "-mx-3 block mr-6 rounded-lg py-2 px-3 text-base font-semibold leading-7",
                                {
                                    "text-primary-600 hover:text-primary-400 dark:text-primary-600": pathname === "/inspirations",
                                    "text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100": pathname !== "/inspirations",
                                }
                            )}>
                                Inspirations
                                <span className="ml-0.5 text-slate-400 text-xs">(Soon)</span>
                        </Link>

                        <Link 
                            href="#" 
                            className={clsx(
                                "-mx-3 block mr-6 rounded-lg py-2 px-3 text-base font-semibold leading-7",
                                {
                                    "text-primary-600 hover:text-primary-400 dark:text-primary-600": pathname === "/carreers",
                                    "text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100": pathname !== "/carreers",
                                }
                            )}>
                                Carreers
                                <span className="ml-0.5 text-slate-400 text-xs">(Soon)</span>
                        </Link> */}

                        <Link 
                            href="/events" 
                            className={clsx(
                                "-mx-3 block mr-6 rounded-lg py-2 px-3 text-base font-semibold leading-7",
                                {
                                    "text-primary-600 hover:text-primary-400 dark:text-primary-600": pathname === "/events",
                                    "text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100": pathname !== "/events",
                                }
                            )}>
                                Events
                            </Link>

                        <Link 
                            href="/blog" 
                            className={clsx(
                                "-mx-3 block mr-6 rounded-lg py-2 px-3 text-base font-semibold leading-7",
                                {
                                    "text-primary-600 hover:text-primary-400 dark:text-primary-600": pathname === "/blog",
                                    "text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100": pathname !== "/blog",
                                }
                            )}>
                                Blog
                        </Link>

                        <button className="-mx-3 block mr-6 rounded-lg py-2 px-3 text-base font-semibold leading-7" type="button" onClick={()=> setShowFlyoutMenu((showFlyoutMenu)=> !showFlyoutMenu)}>

                            <EllipsisHorizontalIcon className="w-6 h-6" aria-hidden="true" />

                        </button>

                        <Transition
                            show={showFlyoutMenu}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0 z-30"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1 z-30"
                        >
                            <div className="absolute z-10 mt-3 top-10 w-screen max-w-xs px-2 sm:px-0 -translate-x-1/2 transform left-1/2">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-6 dark:bg-gray-800 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                        <Link href="/jobs" className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-700">
                                            <p className="text-base font-medium text-slate-900 dark:text-white">Jobs</p>
                                            <p className="mt-1 text-sm text-slate-500">Be aware of the latest job opportunities in tech.</p>
                                        </Link>
                                
                                        <Link href="/inspirations" className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-700">
                                            <p className="text-base font-medium text-slate-900 dark:text-white">
                                                Inspirations
                                                <span className="ml-0.5 text-slate-400 text-xs">(Soon)</span>
                                            </p>
                                            <p className="mt-1 text-sm text-slate-500">Get inspired by the careers of the most famous engineers in Cameroon.</p>
                                        </Link>
                                
                                        <Link href="careers" className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-700">
                                            <p className="text-base font-medium text-slate-900 dark:text-white">
                                                Careers
                                                <span className="ml-0.5 text-slate-400 text-xs">(Soon)</span>
                                            </p>
                                            <p className="mt-1 text-sm text-slate-500">Learn about the many careers available to you in tech.</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                        

                    </nav>

                    <div className="flex gap-4 items-center ml-20">

                        <Button href="login">Log in</Button>

                        <Button href="register" intent="primary">Register</Button>

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
                                    <button name="lightButton" id="lightButton" onClick={() => {
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
                                    <button name="darkButton" id="darkButton" onClick={() => {
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
 
export default Header;