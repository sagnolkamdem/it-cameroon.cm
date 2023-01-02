import clsx from "clsx";
import Link from "next/link";

import { ButtonProps } from "./button.interface";

const ButtonPrimary = (props: ButtonProps) => {
    const classMeta = clsx(
        "inline-flex items-center rounded-md border border-transparent transition duration-100 bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2", 
        props.className
    )
    return props.href ? 
        (<Link href={props.href} className={classMeta} {...props} />)
        :
        (<button className={classMeta} {...props} onClick={props.click}/>)
}
 
export default ButtonPrimary;