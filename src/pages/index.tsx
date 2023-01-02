import ButtonSimple from '@/components/button/Button-simple';
import Comment from '@/components/comment/Comment'
import HeroSimple from '@/components/hero/Hero-simple'
import LayoutWithFooter from '@/components/layout/Layout-with-footer'
import NewsletterSimple from '@/components/newsletter/Newsletter-simple';
import Link from 'next/link';

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
        <p className='text-center text-xl font-semibold text-slate-500 dark:text-slate-300 mb-10'>companies promote their solution through our channel and trust us to reach as many people as possible</p>
      
        <div className="bg-gray-100 dark:bg-gray-800 z-50">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <Link href="#" className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
              </Link>
              <Link href="#" className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
              </Link>
              <Link href="#" className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
              </Link>
              <Link href="#" className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
              </Link>
              <Link href="#" className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
              </Link>
            </div>

            <div className="mt-10 h-10 flex justify-center">
              <ButtonSimple href='#'>
                See more
                <span className="ml-2" aria-hidden="true">&rarr;</span>
              </ButtonSimple>
            </div>

          </div>
        </div>

        <div className="overflow-hidden mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">

          <h2 className='font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-center mb-10'>Only positive feedback</h2>

          <p className='text-center text-xl font-semibold text-slate-500 dark:text-slate-300 mb-10'>Our partners are full of praise for us in relation to the service provided</p>

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
