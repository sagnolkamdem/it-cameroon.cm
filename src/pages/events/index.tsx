import Banner from "@/components/banner/Banner";
import Breadscrumps from "@/components/breadscrumps/Breadscrumps";
import { BreadscrumpsProps } from "@/components/breadscrumps/breadscrumps.interface";
import Search from "@/components/input/Search";
import Layout from "@/components/layout/Layout";
import Event from "@/modules/pages/components/Event";

const Events = () => {

    const breads: BreadscrumpsProps = {
        breads: [
            {
                name: "events",
                link: "events",
            }
        ]
    }

    return ( 
        <Layout>
            <Banner>
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                    <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                    <defs>
                        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#17a34a"></stop>
                        <stop offset="1" stopColor="#ca8a04"></stop>
                        </linearGradient>
                    </defs>
                    </svg>
                </div>
                <div className="flex justify-center text-center lg:text-left max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex max-w-[38rem] flex-col">
                        <div className="flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-primary-600 lg:justify-start dark:text-primary-500">
                            <Breadscrumps props={breads}/>
                        </div>
                        <h1 className="mt-6 text-[1.75rem] font-heading font-extrabold leading-9 tracking-tight text-slate-900 md:text-4xl dark:text-white">
                            Events
                        </h1>
                        <p className="mt-3 text-base text-slate-700 md:mt-5 md:text-xl dark:text-slate-300">
                            Summary of major tech events in Cameroon.
                        </p>

                        <Search classMeta="mt-8 lg:hidden" />
                    </div>

                    <div className="hidden lg:flex lg:flex-auto lg:justify-center"></div>

                </div>

                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                        <defs>
                            <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#099170"></stop>
                            <stop offset="1" stopColor="#e21b30"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </Banner>

            <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between gap-8 max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">

                <Event status="coming" />
                <Event status="past" />
                <Event status="coming" />
                <Event status="coming" />
                <Event status="past" />
                <Event status="past" />
                <Event status="past" />
                <Event status="past" />
                <Event status="past" />
                <Event status="past" />
                <Event status="past" />
                <Event status="past" />

            </ul>

        </Layout>
     );
}
 
export default Events;