import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";


import cosna from "../../public/companies/cosna_Afrique_Logo.png";
import shopper from "../../public/companies/shopper.svg";
import job from "../../public/companies/laravel-job-logo.png";
import loov from "../../public/companies/loov-logo.png";
import tranzak from "../../public/companies/tranzak_logo.png";

const MadeInCmr = () => {
    return ( 
        <div className="mt-14">
        
            <h2 className='font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-center mb-10'>Solutions made in cmr</h2>
            <p className='text-center text-xl font-semibold text-slate-500 dark:text-slate-300 mb-10 px-6'>companies promote their solution through our channel and trust us to reach as many people as possible</p>
        
            <div className="bg-gray-100 dark:bg-gray-800 z-50">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                        <Link href="/made-in-cmr/cosna-afrique" className="group col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <Image className="group-hover:grayscale-0 h-12 object-contain grayscale" src={cosna} alt="cosna afrique" />
                        </Link>
                        <Link href="/made-in-cmr/dikalo" className="group col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <Image className="group-hover:grayscale-0 h-12 object-contain grayscale" src={shopper} alt="shopper" />
                        </Link>
                        <Link href="/made-in-cmr/laravel-cameroon-job" className="group col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <Image className="group-hover:grayscale-0 h-12 object-contain grayscale" src={job} alt="laravel cameroon job" />
                        </Link>
                        <Link href="/made-in-cmr/ln-ui" className="group col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                            <Image className="group-hover:grayscale-0 h-12 object-contain grayscale" src={tranzak} alt="tranzak" />
                        </Link>
                        <Link href="/made-in-cmr/loov-solution" className="group col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                            <Image className="group-hover:grayscale-0 h-12 object-contain grayscale" src={loov} alt="loov solution" />
                        </Link>
                        </div>

                        <div className="mt-10 h-10 flex justify-center">
                        <Button href='#'>
                            See more
                            <span className="ml-2" aria-hidden="true">&rarr;</span>
                        </Button>
                    </div>

                </div>
            </div>

        </div>
     );
}
 
export default MadeInCmr;