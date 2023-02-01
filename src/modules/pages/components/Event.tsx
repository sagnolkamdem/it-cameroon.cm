import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/20/solid";

import Badge from "@/components/badge/Badge";
import { EventProps } from "../interface/event.interface";

const Event = (props: EventProps) => {
    return ( 
        <li role="listitem" className="relative col-span-1 max-w-sm shadow-lg bg-white dark:bg-gray-800 p-6 mx-auto">

            <div className="absolute -top-1.5 -right-1.5">
                <Badge class={clsx(
                    "bg-danger-100 text-danger-800",
                    {
                        "bg-secondary-100 text-secondary-800": props.status === "coming",
                        "bg-danger-200 text-danger-800": props.status === "past",
                    }
                )}>
                    <svg className={clsx(
                        "mr-1.5 h-2 w-2",
                        {
                            "text-secondary-800": props.status === "coming",
                            "text-danger-800": props.status === "past",
                        }
                    )} fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                    </svg>
                    {props.status}
                </Badge>
            </div>

            <Image height={240} width={0} sizes="100vw" className="w-full object-cover mb-8" src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="event logo" />
            
            <div className="mb-6">
                <div className="flex gap-3 flex-wrap mb-3">
                    <Badge>Web development</Badge>
                    <Badge>Artificial intelligence</Badge>
                    <Badge>personnal development</Badge>
                </div>
                <Link href={`events/${123}`} className="font-semibold text-2xl text-slate-900 dark:text-white mb-2">How to stand out as a woman in tech in Cameroon ?</Link>
                <p className="text-base font-semibold text-slate-400 flex gap-2 capitalize">
                    <MapPinIcon aria-hidden="true" className="w-8 h-8 text-primary-500" />
                    <span className="mt-1">Canal olimpya bessengue dèrière mobile guinness Douala</span>
                </p>

                <p className="text-base font-semibold text-slate-400 flex gap-2 capitalize">
                    <CalendarDaysIcon aria-hidden="true" className="w-8 h-8 text-primary-500" />
                    <time className="mt-1 capitalize">23 jan 2023 à 10h30</time>
                </p>
            </div>

            <footer className="mt-4 flex gap-4 items-center">
                <div>
                    <span className="sr-only">Sagnol Kamdem</span>
                    <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="author photo" />
                </div>
                <div className="flex flex-col justify-between">
                    <p className="font-semibold text-slate-400">Sagnol Kamdem</p>
                    <time className="text-xs text-slate-400 capitalize">20 jan 2023</time>
                </div>
            </footer>
        </li>
     );
}
 
export default Event;