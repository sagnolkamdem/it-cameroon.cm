import Link from "next/link";

import { BreadscrumpsProps } from "./breadscrumps.interface";

const Breadscrumps = ({props}: {props: BreadscrumpsProps}) => {
    return ( 
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div>
                        <Link href="/" className="text-primary-400 hover:text-primary-500">
                            <svg className="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Home</span>
                        </Link>
                    </div>
                </li>

                {
                    props.breads.map((bread) => 
                        (
                            <li key={bread.name}>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 flex-shrink-0 text-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                    <Link href={`/${bread.link}`} className="ml-4 text-sm font-medium text-primary-500 hover:text-primary-700 uppercase">{bread.name}</Link>
                                </div>
                            </li>
                        )
                    )
                }
            </ol>
        </nav>
     );
}
 
export default Breadscrumps;