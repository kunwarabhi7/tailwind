import Image from 'next/image'
import Headphone from '../public/image/headphone.png'

const product = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-500'>
      <div className='bg-white w-[500px] h-96 flex'>
        <div className='w-64 h-full'>
          <Image src={Headphone} width='200' height='200' className='h-48 p-8 w-60' />
        </div>
        <div className='m-1'>
          <button className='text-white bg-black rounded-3xl mt-8 p-2'>Free Shipping</button>
          <p className='text-xl font-bold'>Razer Kraken Kitty Edt Gaming Headset Quartz</p>
        </div>

      </div>
    </div>
  )
}

export default product
