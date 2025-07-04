'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IMAGE } from '../Constant/ImageConstant'

export const PromptBox = ({isLoading, setIsLoading}) => {
  const [prompt ,setPrompt] =useState('')
  return (
   
    <form className={`w-full ${false ? 'max-w-3xl' :'max-w-2xl'} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>
        <textarea rows={2} onChange={(e)=>setPrompt(e.target.value)} value={prompt} placeholder='Message deepseek' required className={`outline-none w-fulll resize-none overflow-hidden break-words bg-transparent`} />
      <div className='flex items-center justify-between tex-sm'>
        <div className='flex items-center gap-2'>
        <p className='flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>
            <Image src={IMAGE.deepthink_icon} alt='' className={`h-5`} />
            Deepthin(R1) 
            
        </p>
        <p className='flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>
            <Image src={IMAGE.deepthink_icon} alt='' className={`h-5`} />
           Search
            
        </p>
        </div>
      
        <div className={ `flex items-center gap-2`}>
          <Image src={IMAGE.pin_icon} alt='' className={`w-4 cursor-pointer`} />
          <button className={`${prompt ? 'bg-primary':'bg-[#71717a]'} rounded-full cursor-pointer p-2`}>
          <Image src={ prompt ? IMAGE.arrow_icon : IMAGE.arrow_icon_dull} alt='' className={`w-3.5 aspect-square`} />

          </button>
      </div>
      </div>  

    </form>
  )
}

export default PromptBox