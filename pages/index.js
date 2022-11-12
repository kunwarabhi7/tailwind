import Link from 'next/link'

const Home = () => {
  return (
    <>
    <div className='bg-black text-white text-center text-7xl py-4 '>Tailwind</div>
   <ul className='text-white cursor-pointer bg-cyan-800 text-4xl'>
   <li className='p-4 font-bold'> <Link href='/email' >Email</Link> </li>
<li className='p-4 font-bold'>    <Link href='/price' >Price</Link> </li>
<li className='p-4 font-bold'> <Link href='/product' >Product</Link> </li>
<li className='p-4 font-bold'> <Link href='/email' >Email</Link> </li>
<li className='p-4 font-bold'> <Link href='/email' >Email</Link> </li>
    </ul>   
    </>
  )
}

export default Home;

