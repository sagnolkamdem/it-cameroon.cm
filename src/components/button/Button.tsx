import clsx from "clsx";
import Link from "next/link";

import { ButtonProps } from "./button.interface";

const Button = (props: ButtonProps) => {

    const className = clsx(
        "inline-flex items-center rounded-md border border-transparent transition duration-100 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2", 
        props.className,
        {
            "bg-primary-600 hover:bg-primary-700 focus:ring-primary-500": props.intent === "primary",
            "bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500": props.intent === "secondary",
            "bg-danger-600 hover:bg-danger-700 focus:ring-danger-500": props.intent === "secondary",
            "bg-transparent text-slate-700 dark:text-white dark:hover:bg-gray-900/40 hover:bg-slate-50 focus:ring-gray-300 dark:focus:ring-gray-700 border border-slate-300 dark:border-slate-700 dark:hover:bg-gray-800": props.intent === undefined,
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