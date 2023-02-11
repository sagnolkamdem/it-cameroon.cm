import { EyeDropperIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { InputProps } from "./input.interface";

const Input = (props: InputProps) => {

    return ( 
        <div>
            <label htmlFor={props.label} className="block text-sm font-medium text-slate-700 dark:text-slate-100 capitalize">{props.label}</label>
            <div className="relative mt-1.5">
                <input type={props.type} name={props.name} id={props.name} className="block w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm dark:text-white dark:placeholder-slate-400 dark:border-gray-700 dark:bg-gray-800" placeholder={props.placeholder} />
            </div>
        </div>
     );
}
 
export default Input;