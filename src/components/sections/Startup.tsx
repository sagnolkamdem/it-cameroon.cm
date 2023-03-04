import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Button from "../button/Button";

import shopper from "../../public/companies/shopper-labs.svg";
import isdg from "../../public/companies/isdg.png";
import job from "../../public/companies/logomark.svg";
import dikalo from "../../public/companies/dikalo_logo_orange.png";

const Startup = () => {
    return ( 
        <div className="mb-14 mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2">

                <div className="flex flex-col justify-between max-w-lg">
                    <h2 className='font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-5'>Join over 100 startups and 200 users growing with TECH CAMER.</h2>
                    <Button href="/register" intent="primary" class="max-w-fit">
                        Join us to participate in this adventure
                        <ArrowRightIcon className="w-6 h-6 ml-2" aria-hidden="true" />
                    </Button>
                </div>

                <div className="grid grid-rows-3 gap-10">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                            <Image width={40} height={40} className="max-h-[40px] object-contain" src={shopper} alt="logo" />
                            <p className="text-slate-900 dark:text-white font-semibold text-lg mt-1">Shopper Labs</p>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Image width={40} height={40} className="max-h-[40px] object-contain" src={isdg} alt="logo" />
                            <p className="text-slate-900 dark:text-white font-semibold text-lg mt-1">ISDG SARL</p>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Image width={40} height={40} className="max-h-[40px] object-contain" src={job} alt="logo" />
                            <p className="text-slate-900 dark:text-white font-semibold text-lg mt-1">Laravel CM</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                            <Image width={40} height={40} className="max-h-[40px] object-contain" src={dikalo} alt="logo" />
                            <p className="text-slate-900 dark:text-white font-semibold text-lg mt-1">DIKALO</p>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Image width={40} height={40} className="max-h-[40px] object-contain" src={shopper} alt="logo" />
                            <p className="text-slate-900 dark:text-white font-semibold text-lg mt-1">Shopper Labs</p>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Image width={40} height={40} className="max-h-[40px] object-contain" src={shopper} alt="logo" />
                            <p className="text-slate-900 dark:text-white font-semibold text-lg mt-1">Shopper Labs</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                            <Image width={40} height={40} className="max-h-[40px] object-contain" src={shopper} alt="logo" />
                            <p className="text-slate-900 dark:text-white font-semibold text-lg mt-1">Shopper Labs</p>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Image width={40} height={40} className="max-h-[40px] object-contain" src={shopper} alt="logo" />
                            <p className="text-slate-900 dark:text-white font-semibold text-lg mt-1">Shopper Labs</p>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Image width={40} height={40} className="max-h-[40px] object-contain" src={shopper} alt="logo" />
                            <p className="text-slate-900 dark:text-white font-semibold text-lg mt-1">Shopper Labs</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Startup;