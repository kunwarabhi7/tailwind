import Link from 'next/link'

const Home = () => {
  return (
    <>
   <ul className='text-white cursor-pointer bg-cyan-800 text-4xl h-screen'>
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

