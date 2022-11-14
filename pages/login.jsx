import Image from 'next/image'
import bgImage from '../public/image/image.jpg'
const login = () => {
  return (
    <div className='bg-rose-50 flex justify-center item-center min-h-screen '>
<div className='relative flex flex-row justify-between bg-white m-20 w-[30rem] '>
<div>
    <h1 className='text-center pt-4 pl-12 text-3xl font-bold'>Log In</h1>
    <p>Log in to your account to upload or download picture , music or video .</p>
</div>
<div className='w-64 h-screen'>
    <Image src={bgImage} />
</div>
</div>
    </div>
  )
}

export default login
