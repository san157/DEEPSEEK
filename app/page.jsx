'use client';
import Image from "next/image";
import { useState } from "react";
import { SideBar } from "./Component/SideBar";
import PromptBox from "./Component/PromptBox";
import { IMAGE } from "./Constant/ImageConstant";
import Message from "./Component/Message";

export default function Home() {
  const [expand,setExpand]= useState(false)
  const [message,setMessage]= useState([])
  const [isLoading,setIsLoading]= useState(false)
  return (
    <div>
      <div className="flex h-screen">
    {/* sidebar */}
    <SideBar expand={expand} setExpand={setExpand} />

    <div className="flex flex-1 flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
      <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
        <Image onClick={()=>setExpand(!expand)} alt="image" src={"./assets/Hamburger_icon.svg"} width="50" height="50" className="rotate-180"/>
        <Image alt="image" src={"./assets/Hamburger_icon.svg"} width="50" height="50" className="opacity-70"/>
      </div>

      {
            message.length ? <div>
              <Message role={'user'} content={'this is coneten'} />
       </div>:<>
       <div className="flex items-center gap-3">

       <Image src={IMAGE.logo_icon} width="50" height="50" alt="" className="h-16"/>
       <p className="text-2xl font-medium">Hi I am deepseek</p>
       </div>
       <p>How I can help you </p>
       </> 
      }

          {/* searchbox */}
          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
      <p className="text-xs absolute bottom-1 text-gray-500">Ai generated for reference </p>
    </div>
      </div>
    </div>
  );
}
