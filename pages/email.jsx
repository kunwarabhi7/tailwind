import Head from 'next/head'
import Image from 'next/image'
import Email from '../public/image/email.jpg'
const email = () => {
    
  return (
    <>
    <Head>
        <title>Email App</title>
        <meta name="description" content="Tailwind app created by Abhishek" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full  bg-zinc-700 flex text-center justify-center h-screen'>
<div className='h-96 md:h-64 rounded-xl rounded-r-none bg-zinc-800 w-[680] my-36  flex flex-col md:flex-row'>
<Image src={Email} width='270' className='rounded-xl mr-4' />
<div className='my-4 w-full'>
  <h1 className='text-white text-xl  mt-6 mb-2' >Get diet and fitness tips in your inbox</h1>
  <p className='text-white text-sm mb-4'>Eat better and exercise better . Sign up for the <br/> Diet&Fitness newsLetter.</p>
 <div className='flex '>
  <input type="text" placeholder='Enter your email address' className='bg-transparent ml-16 px-4 py-3 mt-4 border border-gray-400' />
<button className='bg-lime-500 ml-8 hover:bg-lime-700 hover:text-white duration-500 mt-4 rounded-xl px-8 py-6  '>Subsribe</button>
 </div>
  </div> 
</div>
      </div>
    </>
  )
}

export default email
