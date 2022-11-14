import Image from 'next/image'
import bgImage from '../public/image/image.jpg'
const login = () => {
  return (
    <div className='bg-rose-50 flex justify-center item-center min-h-screen '>
<div className='relative shadow-2xl flex flex-row justify-between bg-white my-48 mx-32 w-[90rem] '>
<div className='m-8'>
    <h1 className=' pt-4 mb-12 text-7xl font-bold'>Log In</h1>
    <p className='text-gray-400 text-xl mb-4'>Log in to your account to upload or download picture , music or video .</p>
    <input type="text" className=' mb-4 border-gray-200 border p-3 pr-12' placeholder='Enter your email address' />
    <div className='flex justify-between'>
        <button className='text-blue-400'>Forget Password</button>
        <button className='text-white bg-cyan-500 rounded-lg p-5'>Next  <span className='font-bold text-2xl'>	&#8594; </span></button>
    </div>
    <h1 className='text-center cursor-pointer text-gray-400 '>Or log in with</h1>
    <div>
        <button>Facebook</button>
        <button>Google</button>
    </div>
</div>
<div className='w-[28rem] rounded-xl'>
    <Image src={bgImage} />
</div>
</div>
    </div>
  )
}

export default login
