import Button from "@/components/button/Button";
import Input from "@/components/input/input";
import AuthLayout from "@/components/layout/AuthLayout";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

const ForgotPassword = () => {
    return ( 
        <AuthLayout>

            <section className="relative z-10 w-full items-center flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="space-y-8 max-w-sm mx-auto pt-20">
                    <div className="h-20">Logo</div>
                    <div className="space-y-3">
                        <h1 className="font-semibold text-3xl dark:text-white">Forgot password</h1>
                        <p className="font-normal text-base text-slate-700 dark:text-slate-200">Happy to see you, let's continue this beautiful adventure!</p>
                    </div>
                    <form className="space-y-10">

                        <div className="space-y-5">

                            <Input type="email" name="email" label="email" placeholder="Sagnolkamdem@gmail.com" />
                            
                        </div>
                            
                        <Button intent="primary" className="w-full justify-center">Get continued</Button>

                    </form>
                    <a href="/login" className="flex justify-end ml-1 whitespace-nowrap font-bold text-base text-primary-600 hover:text-primary-500">
                        <ArrowLeftIcon className="w-6 h-6 text-primary-600" aria-hidden="true"></ArrowLeftIcon>
                        <span className="ml-1 whitespace-nowrap font-bold text-base">Log in</span>
                    </a>
                </div>
            </section>

        </AuthLayout>
     );
}
 
export default ForgotPassword;