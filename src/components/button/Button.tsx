import clsx from "clsx";
import Link from "next/link";

import { ButtonProps } from "./button.interface";

const Button = (props: ButtonProps) => {

    const className = clsx(
        "inline-flex items-center rounded-md border border-transparent transition duration-100 px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2", 
        props.className,
        {
            "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500": props.intent === "primary",
            "bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500": props.intent === "secondary",
            "bg-danger-600 hover:bg-danger-700 text-white focus:ring-danger-500": props.intent === "secondary",
            "bg-transparent text-slate-700 dark:text-slate-200 dark:hover:bg-gray-900/40 hover:bg-slate-50 focus:ring-gray-300 dark:focus:ring-gray-700 border border-slate-300 dark:border-slate-700 dark:hover:bg-gray-800": props.intent === undefined,
        }
    )

    return props.href 
        ? 
            (    
                <Link href={props.href} className={className}>{props.children}</Link>  
            )
        :
            (   
                <button className={className} onClick={props.click} type={props.type}>{props.children}</button>   
            )
}
 
export default Button;