import { BannerProps } from "./banner.interface";

const Banner = (props: BannerProps) => {
    return ( 
        <section className="relative isolate bg-gradient-to-b py-14 sm:py-16 lg:py-20 overflow-hidden">
            <div className="px-4 mx-auto sm:px-6 max-w-8xl lg:px-8">
                {props.children}
            </div>
        </section>
     );
}
 
export default Banner;