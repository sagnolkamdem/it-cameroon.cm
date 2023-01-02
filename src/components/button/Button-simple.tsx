import clsx from "clsx";
import Link from "next/link";

import { ButtonProps } from "./button.interface";

const ButtonSimple = (props: ButtonProps) => {
    const classMeta = clsx(
        "inline-flex items-center rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-700 dark:text-white shadow-sm dark:hover:bg-gray-900/40 hover:bg-slate-50 focus:outline-none focus:ring-2 transition duration-100 focus:ring-gray-300 dark:focus:ring-gray-700 focus:ring-offset-2", 
        props.className
    )
    return props.href ? 
        (<Link href={props.href} className={classMeta} {...props} />)
        :
        (<button className={classMeta} {...props} onClick={props.click}/>)
}
 
export default ButtonSimple;