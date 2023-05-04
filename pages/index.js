import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex justify-between bg-cyan-800 p-4'>
   <ul className='text-white cursor-pointer bg-cyan-800 text-4xl h-screen'>
   <li className='p-4 font-bold'> <Link href='/email' >Email</Link> </li>
<li className='p-4 font-bold'>    <Link href='/price' >Price</Link> </li>
<li className='p-4 font-bold'> <Link href='/product' >Product</Link> </li>
<li className='p-4 font-bold'> <Link href='/image' >Image Gallery</Link> </li>
<li className='p-4 font-bold'> <Link href='/login' >Loginn</Link> </li>
    </ul>   
    <ul className='text-white cursor-pointer bg-cyan-800 text-4xl h-screen'>
    <li className='p-4 font-bold'> <Link href='/clipper' >Clipper</Link> </li>
    </ul>
    </div>
  )
}

export default Home;

