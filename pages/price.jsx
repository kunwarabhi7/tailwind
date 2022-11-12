import React from 'react'

const price = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center bg-slate-800 h-screen '>
      <div className='bg-slate-800 rounded-xl mb-8 md:mb-0 text-white border-8 border-gray-700 w-64 h-80 md:h-[360px] mr-8'>
        <div className='text-center '>
            <h1 className=' my-4'>Basic</h1>
        <h3 className=' text-2xl'>100GB</h3>
        <p className=' my-3'>$1.99/month</p>
        <button className='item-center border-purple-600 py-1 px-4 mt-2 mb-8 border-2'>Purchase</button>
            <hr />
            <div className='my-6'>

            <p className=''>&#10003; 100 GB storage</p>
            <p className=''>&#10003; Option to add members</p>
            <p className=''>&#10003; Extra members benifits</p>
            </div>
            </div>
      </div>
      <div className='bg-slate-800 rounded-xl mb-8 md:mb-0 text-white border-8 border-gray-700 w-64 h-80 md:h-[360px] mr-8'>
        <div className='text-center '>
            <h1 className=' my-4'>Basic</h1>
        <h3 className=' text-2xl'>100GB</h3>
        <p className=' my-3'>$1.99/month</p>
        <button className='item-center border-purple-600 py-1 px-4 mt-2 mb-8 border-2'>Purchase</button>
            <hr />
            <div className='my-6'>

            <p className=''>&#10003; 100 GB storage</p>
            <p className=''>&#10003; Option to add members</p>
            <p className=''>&#10003; Extra members benifits</p>
            </div>
            </div>
      </div>
      <div className='bg-slate-800 rounded-xl text-white border-8 border-gray-700 w-64 h-80 md:h-[360px]'>
        <div className='text-center '>
            <h1 className=' my-4'>Basic</h1>
        <h3 className=' text-2xl'>100GB</h3>
        <p className=' my-3'>$1.99/month</p>
        <button className='item-center border-purple-600 py-1 px-4 mt-2 mb-8 border-2'>Purchase</button>
            <hr />
            <div className='my-6'>

            <p className=''>&#10003; 100 GB storage</p>
            <p className=''>&#10003; Option to add members</p>
            <p className=''>&#10003; Extra members benifits</p>
            </div>
            </div>
      </div>
    </div>
  )
}

export default price
