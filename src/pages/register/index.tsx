import Image from "next/image";

import AuthLayout from "@/components/layout/AuthLayout";
import Button from "@/components/button/Button";
import Input from "@/components/input/input";

import monument from "../../public/img/monument.jpeg";
import bigLogo from "../../public/logo/complete.png";

const Register = () => {
    return ( 
        <AuthLayout>
            <section className="relative z-10 flex-1 hidden w-0 lg:block">
                <div className="absolute inset-x-0 top-0 h-full">
                    <Image alt="monument" className=" object-fill w-full h-full" src={monument} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>

                <div className="absolute z-10 inset-x-0 bottom-10 flex flex-col justify-center items-center">
                    
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                </svg>
                            </button>
                            <button type="button" className="inline-flex items-center justify-center w-10 h-10 duration-200 ease-in-out transform bg-white rounded-md hover:scale-125 text-primary-600 backdrop-blur-lg dark:text-slate-400 dark:bg-gray-700/50 hover:bg-primary-50 dark:hover:bg-gray-700/30">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="relative z-10 max-lg:w-full items-center flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="space-y-8 max-w-sm mx-auto">
                    <div className="">
                        <Image width={200} height={40} src={bigLogo} alt="tech camer logo"/>
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-semibold text-3xl dark:text-white">Sign up</h1>
                        <p className="font-normal text-base text-slate-700 dark:text-slate-200">Join us to share with us this beautiful adventure!</p>
                    </div>
                    <form className="space-y-10">

                        <div className="space-y-5">

                            <Input type="text" name="name" label="name" placeholder="Sagnol Kamdem" />

                            <Input type="email" name="email" label="email" placeholder="Sagnolkamdem@gmail.com" />

                            <Input type="password" name="password" label="password" placeholder="********" />

                            <Input type="password" name="confirmPassword" label="Confirm password" placeholder="********" />

                        </div>
                            
                        <Button intent="primary" className="w-full justify-center">Get started</Button>

                    </form>
                    <p className="font-normal text-sm dark:text-white">
                        Already have an account ?
                        <a href="/login" className="ml-1 whitespace-nowrap font-bold text-base text-primary-600 hover:text-primary-500">
                            Log in
                        </a>
                    </p>
                </div>
            </section>
        </AuthLayout>
     );
}
 
export default Register;