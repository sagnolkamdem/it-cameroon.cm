import Link from "next/link";
import Image from "next/image";

import Badge from "@/components/badge/Badge";

const ArticleDetails = () => {
    return ( 

        <div className="pt-10 sm:pt-24 py-12 px-4 sm:px-6 lg:px-8">
            {/* Hero section */}
            <div className="relative mx-auto max-w-4xl md:h-[460px] mb-16">
                <div className="md:absolute md:z-20 md:left-0 md:max-w-2xl max-w-full md:inset-y-0 md:mb-0 mb-8">
                    <div className="lg:pt-28 pt-10">
                        <div className="flex gap-4 flex-wrap mb-8 pb-6 justify-center">
                            <Badge>
                                Web development
                            </Badge>
                            <Badge>
                                Artificial intelligence
                            </Badge>
                            <Badge>
                                Personnal development
                            </Badge>
                        </div>
                        <blockquote className="mt-8 max-w-fit mx-auto">
                            <div className="relative text-lg font-medium text-white md:flex-grow flex justify-center">
                                <svg className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-5 transform text-primary-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <h1 className="mt-1 lg:font-semibold font-bold text-2xl text-slate-900 dark:text-white">How programming makes us better Data Analyst?</h1>
                                {/* <svg className="absolute bottom-0 right-0 h-8 w-8 -translate-x-3 translate-y-7 transform text-primary-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg> */}
                            </div>

                            <footer className="mt-8 flex gap-4 items-center justify-center">
                                <div>
                                    <span className="sr-only">Sagnol Kamdem</span>
                                    <Image sizes="100vw" width="0" height="0" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="author photo" />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <p className="font-semibold text-slate-500 dark:text-slate-300">Sagnol Kamdem</p>
                                    <time className="text-xs font-normal text-slate-600 capitalize">03 jan 2023</time>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </div>

                <div className="md:absolute md:z-10 md:right-0 md:inset-y-0 md:max-h-full max-h-60 max-w-full md:max-w-[50%]  mx-auto">
                    <Image sizes="100vw" height={0} width={0} className="object-fill w-full rounded-md" src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="article detail image"/>
                </div>
                
                <div className="absolute z-30 bottom-20 lg:bottom-10 w-full hidden md:block">
                    <svg className="mx-auto" width="281" height="261" viewBox="0 0 281 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1403_2950)">
                            <path d="M39.676 123.507C39.3903 124.838 39.0645 125.26 39.0567 125.794C46.3783 161.056 64.2957 189.47 95.0821 208.612C102.844 213.465 111.703 216.198 121.07 216.964C141.131 218.78 159.247 207.763 166.975 189.191C171.058 179.534 173.281 169.585 170.875 159.095C166.485 156.848 162.04 154.761 158.079 152.307C151.637 148.272 147.19 142.609 145.97 134.856C144.934 129.132 146.602 124.352 150.036 122.691C154.544 120.51 158.997 122.064 161.932 125.411C166.021 130.055 169.569 135.225 172.744 140.443C174.773 143.832 176.047 147.851 177.432 151.552C196.349 155.113 209.931 140.728 209.572 117.725C207.249 116.2 204.768 114.619 202.501 112.934C194.229 106.474 189.129 98.0814 189.125 87.3559C189.131 83.2472 190.044 79.0973 194.496 77.0759C197.874 75.5737 202.327 77.1274 205.891 81.2305C211.444 87.8148 214.206 95.7491 216.165 103.939C216.763 106.829 217.36 109.718 217.799 112.552C246.743 119.076 275.193 100.941 272.621 72.5191C274.633 73.3998 276.438 73.8509 277.17 74.8211C278.005 76.0062 278.03 77.9809 277.848 79.5259C275.667 93.9573 269.685 105.99 256.211 112.907C246.171 118.161 235.43 120.312 224.028 120.266C222.43 120.245 220.831 120.223 219.178 120.361C219.019 120.306 218.748 120.569 218.049 121.04C217.708 122.529 217.096 124.282 216.803 126.146C212.693 148.662 203.076 157.818 179.749 160.761C179.718 162.895 179.576 165.347 179.649 167.696C179.503 181.408 175.541 193.788 167.069 204.773C153.329 222.678 131.435 229.696 108.987 223.472C96.7804 220.107 86.0519 214.04 76.4199 205.854C53.2105 185.96 38.0616 161.372 33.2306 130.732C32.8802 129.179 32.7443 127.523 32.3938 125.971C32.2904 125.756 32.0279 125.486 31.2404 124.675C28.0779 129.649 26.7761 134.914 25.3153 140.124C23.751 145.119 22.4492 150.384 20.8771 155.912C16.9088 153.991 16.0966 151.206 16.0874 148.164C16.245 144.645 16.0845 141.014 17.0373 137.772C19.7211 129.057 22.6196 120.238 26.1543 111.641C29.0219 104.956 33.347 104.32 37.8573 109.289C47.3473 119.928 56.7817 130.727 66.2161 141.525C67.7354 143.306 68.8255 145.295 70.4406 147.825C65.8854 149.631 63.7855 147.469 61.789 145.521C54.7572 138.063 47.5586 131.083 39.676 123.507ZM197.599 83.5207C195.195 95.0143 199.802 104.307 209.496 108.226C207.282 99.2315 205.434 90.7225 197.599 83.5207ZM154.157 128.776C153.104 138.953 157.909 145.634 167.944 148.063C164.968 140.233 162.031 133.31 154.157 128.776Z" fill="#17A34A"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1403_2950">
                                <rect width="196.609" height="228.523" fill="white" transform="translate(280.535 75.2804) rotate(109.234)"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>

            {/* Content section */}
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-5 gap-16">


            <section className="hidden lg:block lg:col-span-1">
                <aside className="sticky top-0 py-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="mb-8">

                        <h3 className="text-lg font-bold text-primary-600 capitalize mb-4">Table of Contents</h3>

                        <div className="flex flex-col gap-3 mb-12">

                            <Link href="#" className="text-sm font-semibold max-w-fit dark:text-slate-300 text-slate-600 hover:text-slate-700 dark:hover:text-slate-400 capitalize">Introduction</Link>
                            <Link href="#" className="text-sm font-semibold max-w-fit dark:text-slate-300 text-slate-600 hover:text-slate-700 dark:hover:text-slate-400 capitalize">Propgramming</Link>
                            <Link href="#" className="text-sm font-semibold max-w-fit dark:text-slate-300 text-slate-600 hover:text-slate-700 dark:hover:text-slate-400 capitalize">Software and tools</Link>
                            <Link href="#" className="text-sm font-semibold max-w-fit dark:text-slate-300 text-slate-600 hover:text-slate-700 dark:hover:text-slate-400 capitalize">Other ressources</Link>
                            <Link href="#" className="text-sm font-semibold max-w-fit dark:text-slate-300 text-slate-600 hover:text-slate-700 dark:hover:text-slate-400 capitalize">Conclusion</Link>
                        
                        </div>

                        <div className=" flex space-x-6 md:order-2">
                            <Link href="#" className="text-slate-400 hover:text-slate-300">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </Link>

                            <Link href="#" className="text-slate-400 hover:text-slate-300">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </Link>

                            <Link href="#" className="text-slate-400 hover:text-slate-300">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </Link>

                            <Link href="#" className="text-slate-400 hover:text-slate-300">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>


                    </div>
                </aside>
            </section>

            <section className="lg:col-span-4">
                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                    <div className="">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">On a mission to empower teams</h2>
                        <div className="mt-6 space-y-6 text-slate-500 dark:text-slate-300">
                            <p className="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
                            <p className="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                            <p className="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">On a mission to empower teams</h2>
                        <div className="mt-6 space-y-6 text-slate-500 dark:text-slate-300">
                            <p className="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
                            <p className="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                            <p className="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">On a mission to empower teams</h2>
                        <div className="mt-6 space-y-6 text-slate-500 dark:text-slate-300">
                            <p className="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
                            <p className="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                            <p className="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">On a mission to empower teams</h2>
                        <div className="mt-6 space-y-6 text-slate-500 dark:text-slate-300">
                            <p className="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
                            <p className="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                            <p className="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">On a mission to empower teams</h2>
                        <div className="mt-6 space-y-6 text-slate-500 dark:text-slate-300">
                            <p className="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
                            <p className="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                            <p className="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">On a mission to empower teams</h2>
                        <div className="mt-6 space-y-6 text-slate-500 dark:text-slate-300">
                            <p className="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
                            <p className="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                            <p className="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">On a mission to empower teams</h2>
                        <div className="mt-6 space-y-6 text-slate-500 dark:text-slate-300">
                            <p className="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
                            <p className="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                            <p className="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                        </div>
                    </div>
                </div>
            </section>

            </div>

        </div>
        
     );
}
 
export default ArticleDetails;