import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

import Comment from "@/components/comment/Comment";

import { CommentProps } from "../comment/comment.interface";

const Feedback = () => {

    const comments: CommentProps[] = [
        {
          id: 1,
          message: "TECH CAMER helped us reach a bigger audience.",
          name: "Antonio Littel",
          work: "Frontend Developer",
          agency: "Google",
          photo: "https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBob3RvJTIwZGUlMjBwZXJzb25uZSUyMG5vaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
        },
        {
          id: 2,
          message: "TECH CAMER helped us reach a bigger audience.",
          name: "Antonio Littel",
          work: "Frontend Developer",
          agency: "Google",
          photo: "https://images.unsplash.com/photo-1617942798556-4c6a49582667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxwaG90byUyMGRlJTIwcGVyc29ubmUlMjBub2lyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
        },
        {
          id: 3,
          message: "TECH CAMER helped us reach a bigger audience.",
          name: "Antonio Littel",
          work: "Frontend Developer",
          agency: "Google",
          photo: "https://images.unsplash.com/photo-1611703321166-c7fdda00e5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk5fHxwaG90byUyMGRlJTIwcGVyc29ubmUlMjBub2lyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
        },
        {
          id: 4,
          message: "TECH CAMER helped us reach a bigger audience.",
          name: "Antonio Littel",
          work: "Frontend Developer",
          agency: "Google",
          photo: "https://images.unsplash.com/photo-1612582631307-9824f3a5dfd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxwaG90byUyMGRlJTIwcGVyc29ubmUlMjBub2lyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
        },
        {
          id: 5,
          message: "TECH CAMER helped us reach a bigger audience.",
          name: "Antonio Littel",
          work: "Frontend Developer",
          agency: "Google",
          photo: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHBob3RvJTIwZGUlMjBwZXJzb25uZSUyMG5vaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
        },
        {
          id: 6,
          message: "TECH CAMER helped us reach a bigger audience.",
          name: "Antonio Littel",
          work: "Frontend Developer",
          agency: "Google",
          photo: "https://images.unsplash.com/photo-1612601006505-1254db3e290d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBob3RvJTIwZGUlMjBwZXJzb25uZSUyMG5vaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
        },
      ];

    return ( 
        <div className="mt-14">

            <div className="overflow-hidden mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">

              <div className="mb-16">
                <h2 className='font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-5'>Don’t just take our word for it.</h2>
                <p className='text-xl font-semibold text-slate-500 dark:text-slate-300'>Hear from some of our amazing users who are use our platform.</p>
              </div>

              <div className="pb-16 sm:pt-10 sm:pb-24 overflow-hidden px-2">

                <ul role="list" className="[perspective:50rem] origin-center overflow-y-scroll flex gap-6 mb-8">
                { comments.map((comment) => 
                    <Comment key={comment.id} comment={comment}/>
                    )
                }
                </ul>

                <div className="flex gap-8">
                  <button className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-500 inline-flex justify-center items-center hover:scale-125">
                    <span className="sr-only">Arrow left</span>
                    <ArrowLeftIcon className="w-6 h-6 text-gray-500" aria-hidden="true" />
                  </button>
                  <button className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-500 inline-flex justify-center items-center hover:scale-125">
                    <span className="sr-only">Arrow right</span>
                    <ArrowRightIcon className="w-6 h-6 text-gray-500" aria-hidden="true" />
                  </button>
                </div>

              </div>

            </div>

        </div>
     );
}
 
export default Feedback;