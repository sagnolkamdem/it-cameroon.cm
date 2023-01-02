import clsx from "clsx";

import { ContainerProps } from "./container.interface";



const ContainerSimple = (props: ContainerProps) => {
    return ( 
        <div className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', props.className)}>
            {props.children}
        </div>
    );
}
 
export default ContainerSimple;