import Image from 'next/image'
import Header from '../public/image/Clipper/bg-header-desktop.png'
import HeaderMb from '../public/image/Clipper/bg-header-mobile.png'
import Logo from '../public/image/Clipper/logo.svg'

const clipper = () => {
  return (
    <div className='relative'>
<Image src={Header} className='w-full hidden md:block' />
<Image src={HeaderMb} className='block md:hidden w-full' />
<Image src={Logo} className='absolute top-10 left-[45%]  items-center flex' />
<div>
    <p>A history of everything you copy</p>
    <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on your devices.</p>
<div className='flex justify-evenly'>
    <button className='bg-green-500 text-white py-2 px-3'>Download for iOS</button>
    <button className='bg-blue-800 text-white py-2 px-3'>Download for Mac</button>
</div>
</div>

    </div>

  )
}

export default clipper
