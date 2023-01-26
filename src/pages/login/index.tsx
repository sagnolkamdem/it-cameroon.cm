import Image from "next/image";

import AuthLayout from "@/components/layout/AuthLayout";
import Button from "@/components/button/Button";

import monument from "../../public/img/monument.jpeg";
import Input from "@/components/input/input";

const Login = () => {
    return ( 
        <AuthLayout
            
            left={
                <>
                    <div className="absolute inset-x-0 top-0 h-full">
                        <Image alt="monument" className=" object-fill w-full h-full" src={monument} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>

                    {/* <div className="absolute z-10 inset-x-0 bottom-20 flex flex-col justify-center items-center">
                        
                        <div className="relative w-full xl:max-w-[640px] mx-auto px-12 py-10 border border-gray-200 bg-white/25 rounded-lg backdrop-blur-sm dark:border-slate-800 dark:bg-gray-900/25">
                            
                            <div className="mx-auto">
                                <span className="sr-only">Sagnol Kamdem</span>
                                <img className="w-16 h-16 object-cover mx-auto border border-primary-600 rounded-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="user" />
                            </div>

                            <div className="mt-4">
                                <p className="font-semibold text-center text-slate-800 dark:text-slate-300">
                                    Sagnol Kamdem,
                                    <span className="ml-1 text-slate-500">Front-end developer</span>
                                </p>
                            </div>

                            <p className="mt-6 text-lg font-medium leading-7 text-slate-700 dark:text-white">
                                Nous avons utilisé TECH CAMER pour mettre en valeur notre bibliothèque UI et depuis la courbe des téléchergements ne cesse de croître.
                            </p>

                            <div className="absolute flex items-center space-x-6 -bottom-16 translate-x-1/2 right-1/2">
                                <button type="button" className="inline-flex items-center justify-center w-10 h-10 duration-200 ease-in-out transform bg-white rounded-md hover:scale-125 text-primary-600 backdrop-blur-lg dark:text-slate-400 dark:bg-gray-700/50 hover:bg-primary-50 dark:hover:bg-gray-700/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                    </svg>
                                </button>
                                <button type="button" className="inline-flex items-center justify-center w-10 h-10 duration-200 ease-in-out transform bg-white rounded-md hover:scale-125 text-primary-600 backdrop-blur-lg dark:text-slate-400 dark:bg-gray-700/50 hover:bg-primary-50 dark:hover:bg-gray-700/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div> */}
                </>
            }

            right={
                <div className="space-y-8 max-w-sm mx-auto pt-20">
                    <div className="h-20">Logo</div>
                    <div className="space-y-3">
                        <h1 className="font-semibold text-3xl dark:text-white">Sign in</h1>
                        <p className="font-normal text-base text-slate-700 dark:text-slate-200">Happy to see you now, let's continue this beautiful adventure!</p>
                    </div>
                    <form className="space-y-10">

                        <div className="space-y-5">

                            <Input type="email" name="email" placeholder="Sagnolkamdem@gmail.com" />

                            <Input type="password" name="password" persistType="password" placeholder="********" />

                        </div>
                            
                        <Button intent="primary" className="w-full justify-center">Get continued</Button>

                    </form>
                    <p className="font-normal text-sm dark:text-white">
                        You don't have an account ?
                        <a href="/register" className="ml-1 whitespace-nowrap text-primary-700">
                            Register
                        </a>
                    </p>
                </div>
            }

        ></AuthLayout>
     );
}
 
export default Login;