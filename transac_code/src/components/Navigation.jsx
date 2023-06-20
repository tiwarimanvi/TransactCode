import React from 'react'

function Navigation (){
    return(
        <div className='flex flex-col items-center bg-[#013914]'>
            <div className='w-[1400px] flex justify-between text-white my-[20px]'>
                <div className='text-[30px] font-montserrat font-bold'>
                    <span className=''>transactcode</span>
                    <span className='text-green-600'>...</span>
                </div>
                <div className='flex gap-6 items-center font-montserrat font-medium'>
                    <span>Home</span>
                    <span>AboutUs</span>
                    <span>Sign in</span>
                    <button className='px-[20px] py-[10px] text-white bg-transparent border rounded border-solid border-white hover:bg-[#1dbf73] hover:border-[#1dbf73] '>Sell</button>
                </div>
            </div>
            <hr className='w-full h-0 border-solid border-slate-600'></hr>
            <div className='flex justify-between font-light w-[1400px] py-[10px] text-gray-500'>
                <span>Test</span>
                <span>Test2</span>                
            </div>
            
        </div>
    )
}
export default Navigation;