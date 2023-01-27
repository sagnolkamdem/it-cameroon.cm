import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/badge/Badge";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

const Article = ({link}: {link: string}) => {
    return ( 
        <li className="mb-6 group">
            <article className="relative space-y-8"  role="article">
                <div className="flex-1">
                    <div className="">
                        <img className="object-cover md:w-full mx-auto" src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center mt-6">
                        <div className="shrink-0">
                            <p>
                                <span className="sr-only">Sagnol Kamdem</span>
                                <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="author photo" />
                            </p>
                        </div>
                        <div className="ml-3 flex justify-between w-full items-center">
                            <div className="">
                                <span className="text-sm font-medium text-slate-900 dark:text-white capitalize">Sagnol Kamdem</span>
                                <div className="flex space-x-1 text-sm text-slate-500 dark:text-slate-400">
                                    <time dateTime="2020-03-16">Mar 16, 2020</time>
                                </div>
                            </div>
                            <ArrowTopRightOnSquareIcon className="w-6 h-6 text-slate-900 dark:text-white hidden group-hover:block transition duration-300" />
                        </div>
                    </div>
                    <div>
                        <div className="block mt-4 group">
                            <Link href={`blog/${link}`} className="text-xl font-semibold text-slate-900 dark:text-white lg:text-2xl group group-link-underline">
                                <span className="link link-underline link-underline-primary">How to use vscode at 2023</span>
                            </Link>
                            <p className="mt-3 text-base text-slate-500 dark:text-slate-400">
                                Utilisez-vous toujours du Sublime text ? si oui, laissez-moi vous dire que vscode va vous simplifier la vie...
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-4 ">
                        <Badge>Web development</Badge>
                        <Badge>Web development</Badge>
                        <Badge>Web development</Badge>
                    </div>
                </div>
            </article>
        </li>        
     );
}
 
export default Article;
