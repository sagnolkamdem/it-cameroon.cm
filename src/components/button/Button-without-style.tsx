import clsx from "clsx";
import Link from "next/link";

import { ButtonProps } from "./button.interface";

const ButtonWithoutStyle = (props: ButtonProps) => {
    const classMeta = clsx(
        "inline-flex items-center text-sm font-semibold dark:text-slate-300 text-slate-600 hover:text-slate-700 dark:hover:text-slate-400 rounded-md border border-transparent transition duration-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2", 
        props.className
    )
    return props.href ? 
        (<Link href={props.href} className={classMeta} {...props} />)
        :
        (<button className={classMeta} {...props} onClick={props.click}/>)
}
 
export default ButtonWithoutStyle;