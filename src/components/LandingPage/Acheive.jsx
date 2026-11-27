import { article } from '../../lib/util'

const Acheive = () => {
  return (
    <section className='px-16 mt-3.5'>
        <div className='flex justify-center w-full flex-col gap-6'>
            <h1 className='text-3xl font-bold text-green-950 text-center'>What you'll get</h1>
            <div className='grid grid-cols-3 gap-1.5'>
                {article.map((cont)=>(
                    <div className='flex flex-col gap-3.5 p-4' key={cont.title}>
                        <cont.Icon />
                        <h3 className='font-bold text-[18px] text-green-950'>{cont.title}</h3>
                        <article className='text-[15px] text-green-950'>{cont.desc}</article>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Acheive