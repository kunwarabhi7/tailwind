import Image from 'next/image'
import Header from '../public/image/Clipper/bg-header-desktop.png'
import HeaderMb from '../public/image/Clipper/bg-header-mobile.png'
import Logo from '../public/image/Clipper/logo.svg'
import PC from '../public/image/Clipper/image-computer.png'
import Devices from '../public/image/Clipper/image-devices.png'
import BlackList from '../public/image/Clipper/icon-BlackList.svg'
import Plain from '../public/image/Clipper/icon-text.svg'
import Preview from '../public/image/Clipper/icon-preview.svg'
import Google from '../public/image/Clipper/logo-google.png'
import IBM from '../public/image/Clipper/logo-ibm.png'
import Microsoft from '../public/image/Clipper/logo-microsoft.png'
import HP from '../public/image/Clipper/logo-hp.png'
import VG from '../public/image/Clipper/logo-vector-graphics.png'


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
<div className='my-16 text-center'>
<h1>Access Clipboard anywhere</h1>
<p>Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks. </p>
<Image src={Devices} />
</div>
<div className='text-center my-8'>
<h1>Supercharge your Workflow</h1>
<p>We've got the tools to boost your productivity.</p>
<div className='flex'>
    <div>
<Image src={BlackList} />
<p>Create blacklists</p>
<p>Easily search your snippets by content category , web address application and more.</p>
    </div>
    <div>
        <Image src={Plain} />
        <p>Plain text snippets</p>
        <p>Remove unwanted formatting frmo copied text for a consostent look.</p>
    </div>
    <div>
        <Image src={Preview} />
        <p>Sneak preview</p>
        <p>Quick preview of all snippets on your Clipboard for easy access.</p>
    </div>
    
</div>
</div>

<div className='flex'>
<Image src={Google} />
<Image src={IBM} />
<Image src={Microsoft} />
<Image src={HP} />
<Image src={VG} />
    </div>
    </div>

  )
}

export default clipper
