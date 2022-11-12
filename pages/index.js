import Link from 'next/link'

const Home = () => {
  return (
    <>
    <div className='bg-black text-white text-center text-7xl py-4 '>Tailwind</div>
   <ul className='text-white cursor-pointer bg-cyan-800 text-4xl'>
    <Link href='/email' className='p-8 font-bold'>Email</Link>
    <li className='p-8 font-bold'>Email</li>
    <li className='p-8 font-bold'>Email</li>
    <li className='p-8 font-bold'>Email</li>
    </ul>   
    </>
  )
}

export default Home;

