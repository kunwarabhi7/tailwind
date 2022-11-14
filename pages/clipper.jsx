import Image from 'next/image'
import Header from '../public/image/Clipper/bg-header-desktop.png'
import HeaderMb from '../public/image/Clipper/bg-header-mobile.png'
import Logo from '../public/image/Clipper/logo.svg'
import PC from '../public/image/Clipper/image-computer.png'
import Devices from '../public/image/Clipper/image-devices.png'

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
<div className='text-center'>
<h1>Keeo track of your snippets</h1>
<p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mav and iOS apps wil help you organize everything.</p>
</div>
<div className='flex  justify-between my-12'>
    <Image  src={PC}/>
    <div>
        <h2>Quick Search</h2>
        <p>Easily search your snippets by content, category, web address, application, and more</p>

        <h1>iCloud Sync</h1>
        <p>Instanly saves and syncs snippets across all your devices</p>
        <h1>Completely History</h1>
        <p>Retrieve any snippets fron the first moment you started using the app</p>
    </div>
</div>
    </div>

  )
}

export default clipper
