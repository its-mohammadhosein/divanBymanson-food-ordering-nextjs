'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <div className={'h-[100vh] w-[100vw] sm:flex-row flex flex-col '}>
        <Link
          className="h-[50%] sm:h-[100%] transition-all duration-[1s] lg:hover:w-[70%] w-[100%] lg:w-[50%]"
          href={'/main'}
        >
          <div className=" bg-[url('/D-r.jpg')] bg-[110%,100%]  h-[100%] flex flex-col justify-center items-center   lg:w-[100%]  ">
            <div className="text-6xl text-white font-light">DIVAN</div>
            <div className="text-white">RESTUARANT</div>
          </div>
        </Link>
        <Link
          className="h-[50%] sm:h-[100%] transition-all duration-[1s] lg:hover:w-[70%] w-[100%] lg:w-[50%]"
          href={'/main'}
        >
          <div className=" bg-[url('/D-home.jpg')] bg-[110%,100%] flex justify-center items-center text-white h-[100%] flex-col lg:w-[100%]  ">
            <div className="text-6xl font-light">DIVAN</div>
            <div className="text-white">AT HOME</div>
          </div>
        </Link>

        {/* <div className="bg-amber-300 h-[50%] lg:h-[100%] lg:w-[50%] lg:hover:w-[70%] transition-all duration-[1s]">
          bot
        </div> */}
      </div>
    </>
  );
}
