import Link from 'next/link';
import Image from 'next/image';

import Button from '@/components/button/Button';
import Comment from '@/components/comment/Comment';
import LayoutWithFooter from '@/components/layout/Layout-with-footer';
import HeroSimple from '@/sections/Hero-simple';
import NewsletterSimple from '@/sections/Newsletter-simple';

import cosna from "../public/companies/cosna_Afrique_Logo.png";
import dikalo from "../public/companies/dikalo_logo_orange.png";
import job from "../public/companies/laravel-job-logo.png";
import lnui from "../public/companies/lnui-logo.svg";
import loov from "../public/companies/loov-logo.png";
import tranzak from "../public/companies/tranzak_logo.png";

export default function Home() {

  const comments = [
    {
      id: 1,
      message: "Mira’s teaching style is second to none. Everything was easy to follow every step of the way.",
      name: "Antonio Littel",
      work: "Frontend Developer",
    },
    {
      id: 2,
      message: "Mira’s teaching style is second to none. Mira’s teaching style is second to none. Everything was easy to follow every step of the way.",
      name: "Antonio Littel",
      work: "Frontend Developer",
    },
    {
      id: 3,
      message: "Mira’s teaching style is second to none. Mira’s teaching style is second to none. Mira’s teaching style is second to none. Everything was easy to follow every step of the way.",
      name: "Antonio Littel",
      work: "Frontend Developer",
    },
    {
      id: 4,
      message: "Mira’s teaching style is second to none. Everything was easy to follow every step of the way.",
      name: "Antonio Littel",
      work: "Frontend Developer",
    },
    {
      id: 5,
      message: "Mira’s teaching style is second to none. Mira’s teaching style is second to none. Everything was easy to follow every step of the way.",
      name: "Antonio Littel",
      work: "Frontend Developer",
    },
    {
      id: 6,
      message: "Mira’s teaching style is second to none. Mira’s teaching style is second to none. Mira’s teaching style is second to none. Everything was easy to follow every step of the way.",
      name: "Antonio Littel",
      work: "Frontend Developer",
    },

    {
      id: 7,
      message: "Mira’s teaching style is second to none. Mira’s teaching style is second to none. Everything was easy to follow every step of the way.",
      name: "Antonio Littel",
      work: "Frontend Developer",
    },
    {
      id: 8,
      message: "Mira’s teaching style is second to none. Mira’s teaching style is second to none. Mira’s teaching style is second to none. Everything was easy to follow every step of the way.",
      name: "Antonio Littel",
      work: "Frontend Developer",
    },
    {
      id: 9,
      message: "Mira’s teaching style is second to none. Mira’s teaching style is second to none. Mira’s teaching style is second to none. Everything was easy to follow every step of the way.",
      name: "Antonio Littel",
      work: "Frontend Developer",
    }
  ];

  const comment = comments.map((comment) => {
    <Comment key={comment.id} name={comment.name} message={comment.message} work={comment.work}/>
  });

  return (
    <LayoutWithFooter>

      <HeroSimple />
      
      <div className="mt-14">
        
        <h2 className='font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-center mb-10'>Solutions made in cmr</h2>
        <p className='text-center text-xl font-semibold text-slate-500 dark:text-slate-300 mb-10 px-6'>companies promote their solution through our channel and trust us to reach as many people as possible</p>
      
        <div className="bg-gray-100 dark:bg-gray-800 z-50">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <Link href="/made-in-cmr/cosna-afrique" className="group col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Image className="group-hover:grayscale-0 h-12 object-contain grayscale" src={cosna} alt="cosna afrique" />
              </Link>
              <Link href="/made-in-cmr/dikalo" className="group col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Image className="group-hover:grayscale-0 h-12 object-contain grayscale" src={dikalo} alt="dikalo" />
              </Link>
              <Link href="/made-in-cmr/laravel-cameroon-job" className="group col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Image className="group-hover:grayscale-0 h-12 object-contain grayscale" src={job} alt="laravel cameroon job" />
              </Link>
              <Link href="/made-in-cmr/ln-ui" className="group col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <Image className="group-hover:grayscale-0 h-12 object-contain grayscale" src={tranzak} alt="tranzak" />
              </Link>
              <Link href="/made-in-cmr/loov-solution" className="group col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                <Image className="group-hover:grayscale-0 h-12 object-contain grayscale" src={loov} alt="loov solution" />
              </Link>
            </div>

            <div className="mt-10 h-10 flex justify-center">
              <Button href='#'>
                See more
                <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Button>
            </div>

          </div>
        </div>

        <div className="overflow-hidden mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">

          <h2 className='font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-center mb-10'>Only positive feedback</h2>

          <p className='text-center text-xl font-semibold text-slate-500 dark:text-slate-300 mb-10 px-6'>Our partners are full of praise for us in relation to the service provided</p>

          <div className="pt-6 pb-16 sm:pt-10 sm:pb-24 overflow-hidden">

            <ul className="mx-auto [perspective:50rem] origin-center overflow-hidden grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mb-2">
              { comments.map((comment) => 
                  <Comment key={comment.id} name={comment.name} message={comment.message} work={comment.work}/>
                )
              }
            </ul>

          </div>

        </div>

      </div>
      
      <NewsletterSimple />
    
    </LayoutWithFooter>
  );
}
