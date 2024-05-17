'use client'
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function Home() {
    const [Top,setTop]= useState(false)
    const [Bot,setBot]= useState(true)
  return (
    <>
      <div className={'h-[100vh] w-[100vw]  flex flex-col lg:flex-row'}>

          <div className={`${Bot?'h-[50%]':'h-0'} ${Top?'h-full':''} relative transition-all duration-700 bg-green-600  lg:w-[50%] `} onClick={()=>setTop(!Top)}>

              <div className={`absolute bottom-0 ${Top?'':'hidden'} transition-all animate-pulse duration-[1s]`}>
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

                  LOREM IPSUM GENERATO
              </div>
          </div>

<div className={`bg-amber-400 w-full ${Bot?'h-[50%]':'h-full'} lg:w-[50%] ${Top?'h-0':'h-[50%]'} transition-all duration-700 ` } onClick={()=>setBot(!Bot)}>bot section</div>
      </div>
    </>
  );
}
