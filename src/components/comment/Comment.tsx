import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';

import { CommentProps } from './comment.interface';

const Comment = ({comment}: {comment: CommentProps}) => {

    return ( 
        <div className='relative min-w-[360px]'>
            <Image width={360} height={480} className="object-cover max-h-[480px]" src={comment.photo} alt='user image' />
            
            <div className="absolute z-10 inset-x-6 bottom-6 flex flex-col justify-center items-center">
                    
                <div className="relative w-full xl:max-w-full mx-auto px-4 py-5 border border-gray-200 bg-white/25 rounded-lg backdrop-blur-sm dark:border-slate-800 dark:bg-gray-900/25">
                    
                    <p className='font-semibold text-xl text-slate-800 dark:text-white mb-6'>“{comment.message}”</p>

                    <div className="mb-4">
                        <div className="flex gap-1 mb-4">
                            <StarIcon className='w-5 h-5 text-secondary-700' aria-hidden="true" />
                            <StarIcon className='w-5 h-5 text-secondary-700' aria-hidden="true" />
                            <StarIcon className='w-5 h-5 text-secondary-700' aria-hidden="true" />
                            <StarIcon className='w-5 h-5 text-secondary-700' aria-hidden="true" />
                            <StarIcon className='w-5 h-5 text-slate-800' aria-hidden="true" />
                        </div>
                        <p className='text-3xl font-semibold text-slate-800 dark:text-white'>{comment.name}</p>
                    </div>

                    <div className="">
                        <p className='font-semibold text-lg text-slate-800 dark:text-white'>{comment.work}</p>
                        <p className='font-medium mt-1 text-slate-800 dark:text-white'>{comment.agency}</p>
                    </div>

                </div>
            </div>

        </div>
     );
}
 
export default Comment;