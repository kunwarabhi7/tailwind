import Image from 'next/image'
import Header from '../public/image/Clipper/bg-header-desktop.png'
import HeaderMb from '../public/image/Clipper/bg-header-mobile.png'
import Logo from '../public/image/Clipper/logo.svg'
import PC from '../public/image/Clipper/image-computer.png'
import Devices from '../public/image/Clipper/image-devices.png'
import BlackList from '../public/image/Clipper/icon-blackList.svg'
import Plain from '../public/image/Clipper/icon-text.svg'
import Fb from '../public/image/Clipper/icon-facebook.svg'
import Twitter from '../public/image/Clipper/icon-twitter.svg'
import IG from '../public/image/Clipper/icon-instagram.svg'
import Preview from '../public/image/Clipper/icon-preview.svg'
import Google from '../public/image/Clipper/logo-google.png'
import IBM from '../public/image/Clipper/logo-ibm.png'
import Microsoft from '../public/image/Clipper/logo-microsoft.png'
import HP from '../public/image/Clipper/logo-hp.png'
import VG from '../public/image/Clipper/logo-vector-graphics.png'


const clipper = () => {
  return (
    <div className='relative'>
<Image src={Header} className='w-full hidden md:block h-64' />
<Image src={HeaderMb} className='block md:hidden w-full' />
<Image src={Logo} className='absolute top-10 left-[45%]  items-center flex' />
<div className='text-center'>
    <p className='text-5xl font-bold'>A history of everything you copy.</p>
    <p className='py-4 text-gray-400'>Clipboard allows you to track and organize everything you copy.<br/> Instantly access your clipboard on your devices.</p>
<div className='flex justify-center py-4'>
    <button className='bg-green-500 text-white py-2 px-3 rounded-full shadow-2xl mr-12'>Download for iOS</button>
    <button className='bg-blue-800 text-white py-2 px-3 rounded-full shadow-2xl '>Download for Mac</button>
</div>
</div>
<div className='text-center mt-16 '>
<h1 className='text-4xl '>Keep track of your snippets</h1>
<p className='text-gray-400 my-4'>Clipboard instantly stores any item you copy in the cloud, meaning you can access <br/> your snippets immediately on all your devices. Our Mav and iOS apps wil help you <br/>organize everything.</p>
</div>
<div className='flex  justify-between my-16'>
    <Image  src={PC}/>
    <div className='mr-36'>
        <h2 className='text-3xl my-4'>Quick Search</h2>
        <p className='text-gray-400'>Easily search your snippets by content, <br/> category, web address, application, and <br/> more</p>

        <h1 className='text-3xl my-4'>iCloud Sync</h1>
        <p className='text-gray-400'>Instanly saves and syncs snippets across<br/> all your devices</p>
        <h1 className='text-3xl my-4'>Completely History</h1>
        <p className='text-gray-400'>Retrieve any snippets fron the first moment <br/> you started using the app</p>
    </div>
</div>
<div className='my-16 text-center'>
<h1 className='text-4xl font-semibold my-6'>Access Clipboard anywhere</h1>
<p className='text-gray-400 mb-16'>Whether you're on the go, or at your computer, you can access all your Clipboard <br/> snippets in a few simple clicks. </p>
<Image src={Devices} className='ml-72' />
</div>
<div className='text-center my-8'>
<h1 className='text-3xl my-6'>Supercharge your Workflow</h1>
<p className='text-gray-400 mb-8'>We've got the tools to boost your productivity.</p>

<div className='flex my-16 text-center'>
    <div className='ml-64'>
<Image src={BlackList} className='ml-32 mb-4' />
<p className='text-xl mb-4'>Create blacklists</p>
<p className='text-gray-400'>Easily search your snippets by content <br/> category , web address application and <br/> more.</p>
    </div>
    <div className='ml-24'>
        <Image src={Plain} className='ml-32 mb-4' />
        <p className='text-xl mb-4'>Plain text snippets</p>
        <p className='text-gray-400'>Remove unwanted formatting frmo copied <br/> text for a consostent look.</p>
    </div>
    <div className='ml-24'>
        <Image src={Preview} className='ml-32 mb-4' />
        <p className='text-xl mb-4'>Sneak preview</p>
        <p className='text-gray-400'>Quick preview of all snippets on your <br /> Clipboard for easy access.</p>
    </div>
    
</div>
</div>

<div className='flex justify-evenly my-16 ml-10'>
<Image src={Google} className='mr-8' />
<Image src={IBM} className='mr-8'/>
<Image src={Microsoft} className='mr-8'/>
<Image src={HP} className='mr-8'/>
<Image src={VG} className='mr-8'/>
    </div>
    <div className='text-center'>
        <h1 className='text-3xl font-bold my-4'>Clipboard for iOS and Mac OS</h1>
        <p className='text-gray-400 my-4'>Available for free n the App Store. Download for Mac pr iOS , sync <br/>
         with iCloud and you're ready to start adding to your clipboard.</p>
        <div className='flex justify-center my-6'>
    <button className='bg-green-500 text-white py-2 px-3 rounded-full shadow-2xl mr-12'>Download for iOS</button>
    <button className='bg-blue-800 text-white py-2 px-3 rounded-full shadow-2xl'>Download for Mac</button>
</div>
    </div>
    {/* Footer  */}
    <div className='bg-gray-200 flex justify-evenly mt-16'>
        <div>
            <Image src={Logo} className='p-8' />
        </div>
        <div className='grid grid-cols-3 text-gray-400 pt-6'>
<h1>FAQs</h1>
<h1 className='mr-12'>Privacy Policy</h1>
<h1>Install Guide</h1>
<h1>Contact Us</h1>
<h1>Page Kit</h1>
        </div>
        <div className='flex p-12'>
            <Image src={Fb} className='mr-4'/>
            <Image src={Twitter} className='mr-4'/>
            <Image src={IG}/>
        </div>

    </div>
    </div>

  )
}

export default clipper
