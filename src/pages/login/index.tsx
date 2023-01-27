import Image from "next/image";

import AuthLayout from "@/components/layout/AuthLayout";
import Button from "@/components/button/Button";

import monument from "../../public/img/monument.jpeg";
import Input from "@/components/input/input";

const Login = () => {
    return ( 
        <AuthLayout>
            <section className="relative z-10 flex-1 hidden w-0 lg:block">
                <div className="absolute inset-x-0 top-0 h-full">
                    <Image alt="monument" className=" object-fill w-full h-full" src={monument} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
            </section>

            <section className="relative z-10 max-lg:w-full items-center flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="space-y-8 max-w-sm mx-auto pt-20">
                    <div className="h-20">Logo</div>
                    <div className="space-y-3">
                        <h1 className="font-semibold text-3xl dark:text-white">Sign in</h1>
                        <p className="font-normal text-base text-slate-700 dark:text-slate-200">Happy to see you now, let's continue this beautiful adventure!</p>
                    </div>
                    <form className="space-y-10">

                        <div className="space-y-5">

                            <Input type="email" name="email" label="email" placeholder="Sagnolkamdem@gmail.com" />

                            <Input type="password" name="password" label="password" placeholder="********" />
                            
                            <div className="flex items-center justify-between">
                                <label htmlFor="remember-me" className="flex items-center cursor-pointer">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="w-4 h-4 rounded text-primary-600 border-slate-300 focus:ring-primary-500 dark:bg-gray-800 dark:border-slate-700 dark:focus:ring-offset-gray-800" />
                                    <span className="block ml-2 text-sm text-slate-700 dark:text-slate-300">Remember me</span>
                                </label>
                                <div className="text-sm">
                                    <a className="font-medium text-primary-600 hover:text-primary-500" href="forgot-password">Forgot password?</a>
                                </div>
                            </div>

                        </div>
                            
                        <Button intent="primary" className="w-full justify-center">Get continued</Button>

                    </form>
                    <p className="font-normal text-sm dark:text-white">
                        You don't have an account ?
                        <a href="/register" className="ml-1 whitespace-nowrap font-bold text-base text-primary-600 hover:text-primary-500">
                            Register
                        </a>
                    </p>
                </div>
            </section>
        </AuthLayout>
     );
}
 
export default Login;