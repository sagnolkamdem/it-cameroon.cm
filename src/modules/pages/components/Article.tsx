import BadgeSimple from "@/components/badge/Badge-simple";
import Image from "next/image";

const Article = () => {
    return ( 
        <div className="max-w-md max-h-96">
            <div className="relative h-64 w-full aspect-square">
                <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="image"/>
                <div className="absolute bg-black blur-lg opacity-30 bottom-0 inset-x-0 flex justify-between p-6 items-center"></div>
                    {/* <h3 className="text-2xl font-bold text-white">Vulgarisations des IA au Cameroun</h3> */}
            </div>
        </div>
     );
}
 
export default Article;