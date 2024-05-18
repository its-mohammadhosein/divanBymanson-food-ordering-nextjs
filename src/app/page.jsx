'use client';
import Image from 'next/image';
import Link from 'next/link';


export default function page() {
  return (
    <>
      <div className={'h-[100vh] w-[100vw] sm:flex-row flex flex-col '}>


          <div className="bg-blue-300  h-[50%] lg:h-[100%] lg:w-[50%] lg:hover:w-[70%] transition-all duration-[1s]">
          <Link href={'/main'}>

              top   
          </Link>
          </div>

        <div className="bg-amber-300 h-[50%] lg:h-[100%] lg:w-[50%] lg:hover:w-[70%] transition-all duration-[1s]">bot</div>
      </div>
    </>
  );
}
