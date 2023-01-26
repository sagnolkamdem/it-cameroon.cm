import Comment from "@/components/comment/Comment";

const Feedback = () => {

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
      ];

    return ( 
        <div className="mt-14">

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
     );
}
 
export default Feedback;