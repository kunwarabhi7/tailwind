import Image from "next/image"
import Image1 from '../public/image/image1.jpg'
import Image2 from '../public/image/image2.jpg'
import Image3 from '../public/image/image3.jpg'
import Image4 from '../public/image/image4.jpg'
import Image5 from '../public/image/image5.jpg'
import Image6 from '../public/image/image6.jpg'

const image = () => {
  return (
    <div className='m-16 '>
        <div className='flex justify-end'>
            <ul className='flex'>
                <div className="group">

                <li className='mr-4  cursor-pointer duration-500 '>Vector</li>
                <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
                </div>
                <div className="group">

<li className='mr-4  cursor-pointer duration-500 '>Illustrations</li>
<div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
</div>
<div className="group">

<li className='mr-4  cursor-pointer duration-500 '>Images</li>
<div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
</div>
<div className="group">

<li className='mr-4  cursor-pointer duration-500 '>Icons</li>
<div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
</div> 
            </ul>
            
        </div>
        <div className='flex justify-end mt-16'>
            <button className='bg-black text-white py-2 px-4'>Upload</button>
        </div>
        <div className='flex justify-end mt-16 '>
            <div className="grid grid-cols-3">
                <Image src={Image1} className='w-96 mr-4' />
                <Image src={Image2} className='w-96 mr-4'/>
                <Image src={Image3} className='w-96'/>
                <Image src={Image4} className='w-96 mt-4'/>
                <Image src={Image5} className='w-96 mt-4'/>
                <Image src={Image6} className='w-96 mt-4'/>
            </div>

        </div>
      
    </div>
  )
}

export default image
