import React, { useEffect } from 'react'
import { useState } from 'react';

function Navigation (){
    const [active,setActive] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive (true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll",isActive);

        return () => {
            window.removeEventListener("scroll",isActive)
        }
    },[])

    return(
        <div className={active ? "flex flex-col items-center transition ease-in-out duration-500 sticky top-0 bg-white text-black" : "flex flex-col items-center text-white bg-[#013914]" }>
            <div className='w-[1400px] flex justify-between my-[20px]'>
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
            {active && ( 
            <>
            <hr className='w-full h-0 border-solid border-slate-600'></hr>
            <div className='flex justify-between font-light w-[1400px] py-[10px] text-gray-500'>
                <span>Test</span>
                <span>Test2</span>                
            </div>
            </>
            )}
           
            
        </div>
    )
}
export default Navigation;