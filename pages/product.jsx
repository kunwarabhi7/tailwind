import Image from 'next/image'
import Headphone from '../public/image/headphone.png'
import Weight from '../public/image/weight.png'
import Heart from '../public/image/heart.png'
const product = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className='bg-white w-[500px] h-[440px] flex shadow-lg shadow-white'>
        <div className='w-64 h-full'>
          <Image src={Headphone} width='200' height='200' className='h-48 p-8 w-60' />
        </div>
        <div className='m-1'>
          <button className='text-white bg-black rounded-3xl mt-8 p-2'>Free Shipping</button>
          <p className='text-xl font-bold'>Razer Kraken Kitty Edt Gaming Headset Quartz</p>
          <p className='font-bold line-through ' >$700</p>
          <p className='font-bold text-4xl'>$499</p>
          <p>The offer is valid untill April 3 or as long as stock lasts!</p>
          <button className='w-full bg-blue-500 text-white py-2 px-5 rounded-xl mt-2'>Add to Cart</button>
          <h1><span className='text-green-500 text-4xl'> &#x2022; </span> 50+ pcs. in stock.</h1>
          <div className='flex w-full h-12 mt-4'>
            <div className='flex justify-between border w-32 p-4 h-full border-gray-400'>
              <Image src={Weight} className='h-4 w-4 ' />
              <p className='text-xs '>Add to Cart</p>
            </div>
            <div className='flex justify-between border w-32 p-4 h-full ml-8 border-gray-400'>
              <Image src={Heart} className='h-4 w-4 ' />
              <p className='text-xs '>Add to wishlist</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default product
