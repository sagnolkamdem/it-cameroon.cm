import Link from "next/link";
import { BanknotesIcon, BookmarkIcon, BriefcaseIcon } from "@heroicons/react/20/solid";

import Badge from "@/components/badge/Badge";
import Image from "next/image";

const Job = () => {
    return ( 
        <li className="relative mb-6 group p-8 border border-gray-200 dark:border-gray-800 rounded-md hover:shadow-lg dark:hover:shadow-2xl cursor-pointer hover:border-none">
            <Link href="https://jobs-staging.laravel.cm/jobs" target="_blank" className="absolute inset-0 z-10" />
            <article className="relative space-y-6" role="article">
                <div className="flex justify-between">
                    <div className="flex space-x-4 items-center">
                        <Image height={40} width={40} className="shadow-sm object-contain" src="https://laravelshopper.io/images/logomark-light.svg" alt="shopper logo" />

                        <div className="flex flex-col justify-between">
                            <h3 className="text-lg font-semibold capitalize text-slate-900 dark:text-white lg:text-2xl group group-link-underline">
                                Front end developer
                                (CDI)
                            </h3>
                            <p className="text-base font-medium text-slate-700 dark:text-slate-200 capitalize">Shopper labs</p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-100">Posted 10 days ago</p>
                </div>
                <div className="flex flex-wrap ml-16 gap-5">
                    <div className="flex space-x-2">
                        <BriefcaseIcon  aria-hidden="true" className="w-6 h-6 text-slate-800 dark:text-slate-100" />
                        <p className="text-slate-800 dark:text-slate-100 capitalize underline">Experience: intermediate</p>
                    </div>
                    <div className="flex space-x-2">
                        <BanknotesIcon aria-hidden="true" className="w-6 h-6 text-slate-800 dark:text-slate-100" />
                        <p className="text-slate-800 dark:text-slate-100 capitalize underline">Salary: 3.5M-4.5M fcfa/an</p>
                    </div>
                    <div className="flex space-x-2">
                        <BookmarkIcon aria-hidden="true" className="w-6 h-6 text-slate-800 dark:text-slate-100" />
                        <p className="text-slate-800 dark:text-slate-100 capitalize underline">Source: Laravel Jobs</p>
                    </div>
                </div>
                <div className="ml-16 flex space-x-2">
                    <Badge>Typescript</Badge>
                    <Badge>Javascript</Badge>
                    <Badge>Angular</Badge>
                    <Badge>React</Badge>
                    <Badge>Nextjs</Badge>
                    <Badge>Mysql</Badge>
                    <Badge>Github actions</Badge>
                    <Badge>Ngrx</Badge>
                    <Badge>etc...</Badge>
                </div>
                <p className="ml-16 text-red-500 underline">Expires on: 03/12/2023</p>
            </article>
        </li>
     );
}
 
export default Job;