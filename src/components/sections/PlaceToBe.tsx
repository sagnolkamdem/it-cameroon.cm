import Image from "next/image";
import { BriefcaseIcon, CalendarDaysIcon, GlobeEuropeAfricaIcon, MapIcon, NewspaperIcon, UserGroupIcon } from "@heroicons/react/20/solid";

import small from "../../public/logo/small.png";

const PlaceToBe = () => {
    return ( 
        <div className="flex flex-col gap-8 sm:grid lg:grid-cols-3 sm:grid-cols-2 items-center mt-14 overflow-hidden mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">

            <div className="lg:col-span-2 max-w-2xl">
                
                <div className="mb-16">
                    <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-5">A platform built by and for people like you</h2>
                    <p className="text-xl font-semibold text-slate-500 dark:text-slate-300">Whether you want to participate in the country's technological transition by being a passive or active player, TECH CAMER is for you. Join us to discover the technological transition and enrich it.</p>
                </div>

                <div className="grid grid-cols-3 mt-10 gap-10">
                    <div className="flex items-center">
                        <div className="w-8 h-8 border border-primary-600 flex items-center justify-center">
                            <GlobeEuropeAfricaIcon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                        </div>
                        <p className="text-slate-900 dark:text-white text-sm font-medium ml-3">CAMER</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-8 h-8 border border-primary-600 flex items-center justify-center">
                            <CalendarDaysIcon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                        </div>
                        <p className="text-slate-900 dark:text-white text-sm font-medium ml-3">Events</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-8 h-8 border border-primary-600 flex items-center justify-center">
                            <NewspaperIcon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                        </div>
                        <p className="text-slate-900 dark:text-white text-sm font-medium ml-3">Blog</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-8 h-8 border border-primary-600 flex items-center justify-center">
                            <BriefcaseIcon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                        </div>
                        <p className="text-slate-900 dark:text-white text-sm font-medium ml-3">Jobs</p>
                    </div>
                    <div className="flex items-center ">
                        <div className="w-8 h-8 border border-primary-600 flex items-center justify-center">
                            <UserGroupIcon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                        </div>
                        <p className="text-slate-900 dark:text-white text-sm font-medium ml-3">Inspirations</p>
                    </div>
                    <div className="flex items-center ">
                        <div className="w-8 h-8 border border-primary-600 flex items-center justify-center">
                            <MapIcon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                        </div>
                        <p className="text-slate-900 dark:text-white text-sm font-medium ml-3">Carrers</p>
                    </div>
                </div>

            </div>

            <div className="relative">
                <Image height={500} width={400} className="object-cover border border-primary-600" src="https://images.unsplash.com/photo-1540304801084-0944beb20de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ubmUlMjBub2lyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="user" />
            </div>

        </div>
     );
}
 
export default PlaceToBe;