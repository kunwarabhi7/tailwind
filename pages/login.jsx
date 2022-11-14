import Image from 'next/image'
import bgImage from '../public/image/image.jpg'
const login = () => {
  return (
    <div className='bg-rose-50 flex justify-center item-center min-h-screen '>
<div className='relative flex flex-row justify-between bg-white m-20 w-[30rem] '>
<div>
    <h1 className='text-center pt-4 pl-12 text-3xl font-bold'>Log In</h1>
    <p>Log in to your account to upload or download picture , music or video .</p>
    <input type="text" className=' border-gray-200 border p-3 pr-12' placeholder='Enter your email address' />
    <div>
        <button>Forget Password</button>
        <button>Next 	&#8594;</button>
    </div>
    <button>Or log in with</button>
    <div>
        <button>Facebook</button>
        <button>Google</button>
    </div>
</div>
<div className='w-64 h-screen'>
    <Image src={bgImage} />
</div>
</div>
    </div>
  )
}

export default login
