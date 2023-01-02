import Image from 'next/image';
import { CommentProps } from './comment.interface';

const Comment = ({name, message, work}: {name: string, message: string, work: string}) => {

    return ( 
        <figure className="rounded-3xl p-8 shadow-md ring-1 ring-slate-900/5 border border-gray-300 dark:border-none dark:bg-gray-800 overflow-hidden mb-2">
            <blockquote>
                <p className="text-lg tracking-tight text-slate-900 dark:text-white before:content-['“'] after:content-['”']">
                    {message}
                </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center">
                <div className="overflow-hidden rounded-full bg-slate-50">
                    <Image src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="person" loading="lazy"  width="48" height="48" className="h-12 w-12 object-cover"/>
                </div>
                <div className="ml-4">
                    <div className="text-base font-medium leading-6 tracking-tight text-slate-900 dark:text-white">{name}</div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{work}</div>
                </div>
            </figcaption>
        </figure>
     );
}
 
export default Comment;