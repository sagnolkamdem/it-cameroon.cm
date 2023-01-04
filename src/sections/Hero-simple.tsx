import Link from "next/link";

import Button from "@/components/button/Button";

const HeroSimple = () => {
    return ( 
        <div className="isolate bg-white dark:bg-transparent overflow-hidden">

            <div className="absolute inset-x-0 top-[5rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top[-20rem]">
                <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                <defs>
                    <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#17a34a"></stop>
                    <stop offset="1" stopColor="#17a34a"></stop>
                    </linearGradient>
                </defs>
                </svg>
            </div>

            <div>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div>
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-primary-600 hover:ring-primary-900">
                                <span className="text-gray-600 dark:text-slate-200">
                                    We will be available soon. 
                                    <Link href="#" className="hover:text-primary-800 ml-1 font-semibold text-primary-600">
                                        <span className="absolute inset-0" aria-hidden="true"></span>
                                            Read more 
                                        <span className="ml-1" aria-hidden="true">&rarr;</span>
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-center dark:text-white sm:text-6xl">
                                The right platform to 
                                <span className="mx-3 relative whitespace-nowrap text-green-600">
                                    get rich
                                    <svg className="absolute bottom-0 right-0 sm:w-52 w-28 h-4" aria-hidden="true" viewBox="0 0 215 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.73413 11.2C91.0178 7.4676 275.109 1.12 313.196 5.6L3.73413 11.2Z" fill="#17A34A"/>
                                    </svg>
                                </span> 
                                and 
                                <span className="mx-3 relative whitespace-nowrap text-green-600">
                                    promote
                                    <svg className="absolute bottom-0 right-0 sm:w-52 w-32 h-4" aria-hidden="true" viewBox="0 0 215 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.73413 11.2C91.0178 7.4676 275.109 1.12 313.196 5.6L3.73413 11.2Z" fill="#17A34A"/>
                                    </svg>
                                </span> 
                                tech made in Cameroon
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 sm:text-center">
                                Do you have or are working on a digital solution that will enrich Cameroonian tech or do you want to be aware of the latest tech news from Cameroon? Join us
                            </p>
                            <div className="mt-8 flex gap-x-4 sm:justify-center">

                                <Button intent="primary">
                                    Tell us about your solution
                                    <span className="text-primary-200 ml-2 flex items-center" aria-hidden="true">&rarr;</span>
                                </Button>


                                <Button intent="secondary">
                                    Made in Cameroon
                                    <span className="text-secondary-200 ml-2 flex items-center" aria-hidden="true">&rarr;</span>
                                </Button>

                            </div>
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                            <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                            <defs>
                                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#ca8a04"></stop>
                                <stop offset="1" stopColor="#ca8a04"></stop>
                                </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HeroSimple;