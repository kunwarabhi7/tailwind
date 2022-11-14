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
    </div>
  )
}

export default clipper
