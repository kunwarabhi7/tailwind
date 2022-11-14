import Image from 'next/image'
import bgImage from '../public/image/image.jpg'
import fb from '../public/image/facebook.png'
import google from '../public/image/google.png'
const login = () => {
  return (
    <div className='bg-rose-50 flex justify-center item-center min-h-screen '>
<div className='relative shadow-2xl flex flex-row justify-between bg-white my-48 mx-32 w-[90rem] '>
<div className='m-8'>
    <h1 className=' pt-4 mb-12 text-7xl font-bold'>Log In</h1>
    <p className='text-gray-400 text-xl mb-4'>Log in to your account to upload or download picture , music or video .</p>
    <input type="text" className=' my-6 border-gray-200 border p-3 pr-12' placeholder='Enter your email address' />
    <div className='flex justify-between'>
        <button className='text-blue-400'>Forget Password</button>
        <button className='text-white bg-cyan-500 rounded-lg p-5'>Next  <span className='font-bold text-2xl'>	&#8594; </span></button>
    </div>
    <h1 className='text-center cursor-pointer text-gray-400 my-6'>Or log in with</h1>
    <div className='flex justify-around mt-12'>
        <button className='border flex  border-gray-400 shadow-xl py-2 px-4'>
            <Image src={fb} className='w-8' />
            <h1 className='ml-2 text-gray-500'>Facebook</h1>
            </button>
            <button className='border flex  border-gray-400 shadow-xl py-2 px-4'>
            <Image src={google} className='w-8' />
            <h1 className='ml-2 text-gray-500'>Google</h1>
            </button>
    </div>
</div>
<div className='w-[28rem] rounded-xl'>

    <Image src={bgImage} className='hidden md:block ' />
<p className='absolute  rounded-full top-5 right-5 bg-white py-2 px-4 cursor-pointer transform hover:translate-y-2 duration-300 '>X</p>
   
</div>
</div>
    </div>
  )
}

export default login
