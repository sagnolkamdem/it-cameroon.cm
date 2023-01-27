import Button from "@/components/button/Button";
import Input from "@/components/input/input";
import AuthLayout from "@/components/layout/AuthLayout";

const ResetPassword = () => {
    return ( 
        <AuthLayout>

            <section className="relative z-10 w-full flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="space-y-8 max-w-sm mx-auto pt-10">
                    <div className="h-20">Logo</div>
                    <div className="space-y-3">
                        <h1 className="font-semibold text-3xl dark:text-white">Reset password</h1>
                        <p className="font-normal text-base text-slate-700 dark:text-slate-200">Happy to see you, let's continue this beautiful adventure!</p>
                    </div>

                    <form className="space-y-10">

                        <div className="space-y-5">

                        <Input type="password" name="password" label="password" placeholder="********" />
                            
                        <Input type="password" name="confirmPassword" label="confirm Password" persistType="password" placeholder="********" />
                        
                        </div>
                            
                        <Button intent="primary" className="w-full justify-center">Get continued</Button>


                    </form>
                    
                </div>
            </section>

        </AuthLayout>
     );
}
 
export default ResetPassword;