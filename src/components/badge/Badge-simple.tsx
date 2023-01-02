import { BadgeProps } from "./badge.interface";

const BadgeSimple = (props: BadgeProps) => {

    return ( 
        <span className="inline-flex capitalize items-center rounded-full bg-primary-100 px-3 py-0.5 text-sm font-medium text-primary-800">
            {props.children}
        </span>
     );
}
 
export default BadgeSimple;