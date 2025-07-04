import Image from 'next/image'
import React from 'react'
import { IMAGE } from '../Constant/ImageConstant'

export default function Message({role,content}) {
  return (
      <div className={`flex flex-col items-center text-sm w-full max-w-3xl`}>
          <div className={`flex flex-col w-full mb-8 ${role==='user' && 'items-end'}`}>
              <div className={`group relative flex max-w-2xl py-3 rounded-xl ${role==='user' ? 'bg-[#414158] px-5': 'gap-3'}`}>
                  <div className={`opacity-0 group-hover:opacity-100 ${role == 'user' ? '-left-16 top-2.5' : 'left-9 bottom-6'} transition-all`}>
                      <div className={`flex items-center opacity-70 gap-2`}>
                          {
                              role == 'user' ? (<>
                              <Image src={IMAGE.copy_icon} alt='' className={`w-4 cursor-pointer`} />
                              <Image src={IMAGE.pencil_icon} alt='' className={`w-4.5 cursor-pointer`} />
                              </>) : (<>
                              <Image src={IMAGE.copy_icon} alt='' className={`w-4.5 cursor-pointer`} />
                              <Image src={IMAGE.regenerate_icon} alt='' className={`w-4 cursor-pointer`} />
                              <Image src={IMAGE.like_icon} alt='' className={`w-4 cursor-pointer`} />
                              <Image src={IMAGE.dislike_icon} alt='' className={`w-4 cursor-pointer`} />
                              
                                  </>)
                          }
                      </div>
                  </div>
                  {
                      role == 'user' ? (<span className={`text-white/90`}>
                          {content}
                      </span>) : (
                              <>
                              
                                  <Image src={IMAGE.logo_icon} alt='' className={`h-9 w-9 p-1 border border-white/15 rounded-full`} />
                                  <div className={`space-y-4 w-full overflow-scroll`}>
                                      {content}
                                  </div>
                              </>
                      )
                  }
              </div>
          </div>
          
    </div>
  )
}
