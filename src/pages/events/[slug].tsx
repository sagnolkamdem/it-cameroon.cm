import Image from "next/image";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/20/solid";

import Badge from "@/components/badge/Badge";
import Button from "@/components/button/Button";
import Layout from "@/components/layout/Layout";

const EventDetails = () => {
    return ( 
        <Layout>
            <div className="relative py-16 sm:py-20">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                    
                    <div className="lg:sticky lg:top-10">
                        <div className="relative sm:py-16 lg:py-0">
                            <div aria-hidden="true" className="hidden md:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                                <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 dark:bg-gray-800 lg:right-72"></div>
                                <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                                    <defs>
                                        <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" className="text-slate-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                                </svg>
                            </div>
                            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                                <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                                    <Image className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="article image" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-50 via-primary-50 opacity-50"></div>
                                    <div className="relative px-8">
                                        <div className="flex flex-wrap gap-3">
                                            <Badge>Web development</Badge>
                                            <Badge>Web development</Badge>
                                            <Badge>Web development</Badge>
                                        </div>
                                        <blockquote className="mt-8">
                                            <div className="relative text-lg font-medium text-white md:flex-grow">
                                                <svg className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-5 transform text-primary-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                                </svg>
                                                <h1 className="relative font-bold text-xl text-slate-900">How to stand out as a woman in tech in Cameroon ?</h1>
                                            </div>

                                            <footer className="mt-4 flex gap-4 items-center">
                                                <div>
                                                    <span className="sr-only">Sagnol Kamdem</span>
                                                    <Image className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="author photo" />
                                                </div>
                                                <div className="flex flex-col justify-between">
                                                    <p className="font-semibold text-slate-700">Sagnol Kamdem</p>
                                                    <time className="text-xs font-semibold text-slate-500 capitalize">20 jan 2023</time>
                                                </div>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                        <div className="pt-12 lg:pt-16">
                            <div className="space-y-4 mb-6">
                                <p className="text-base font-semibold text-slate-400 flex gap-2 capitalize">
                                    <MapPinIcon aria-hidden="true" className="w-8 h-8 text-primary-500" />
                                    <time className="mt-1">Canal olimpya bessengue dèrière mobile guinness Douala</time>
                                </p>

                                <p className="text-base font-semibold text-slate-400 flex gap-2 capitalize">
                                    <CalendarDaysIcon aria-hidden="true" className="w-8 h-8 text-primary-500" />
                                    <time className="mt-1 capitalize">23 jan 2023 à 10h30</time>
                                </p>

                                <div className="mt-10">
                                    <Button intent="secondary" href="#" className="text-base font-medium text-secondary-100">
                                        Learn more about this event
                                        <span aria-hidden="true" className="ml-2"> &rarr;</span>
                                    </Button>
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">On a mission to empower teams</h2>
                            <div className="mt-6 space-y-6 text-slate-500 dark:text-slate-300">
                                <p className="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
                                <p className="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                                <p className="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default EventDetails;