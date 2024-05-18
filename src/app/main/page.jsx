import Image from 'next/image';
import React from 'react';
import MenuNav from "@/components/MenuNav";

export default function page() {
  return (
    // k
      <>
          <MenuNav />
    <div className="mt-4 [&>div]:rounded-sm h-[80%] grid grid-cols-2 justify-items-center">

      <div
        id="f-prod"
        className={`bg-white flex flex-col w-[90%] justify-items-center h-max pb-4`}
      >
        <div className="mb-2 flex justify-center pt-3 ">
          <Image src={'/dummy.png'} width={120} height={120} />
        </div>
        <div className="mb-4 pl-2">Title</div>
        <div className="mb-2 pl-2 w-[80%] text-[12px] font-light">
          Lorem ipsum dolor sit amet
        </div>
        <div className="flex pl-2 items-center text-center gap-2">
          245,000 <p className="text-black/70 text-[13px] font-thin">TOMAN</p>
        </div>
      </div>
      <div
        id="f-prod"
        className={`bg-white flex flex-col w-[90%] justify-items-center h-max pb-4`}
      >
        <div className="mb-2 flex justify-center pt-3 ">
          <Image src={'/dummy.png'} width={120} height={120} />
        </div>
        <div className="mb-4 pl-2">Title</div>
        <div className="mb-2 pl-2 w-[80%] text-[12px] font-light">
          Lorem ipsum dolor sit amet
        </div>
        <div className="flex pl-2 items-center text-center gap-2">
          245,000 <p className="text-black/70 text-[13px] font-thin">TOMAN</p>
        </div>
      </div>
    </div>
          </>
    // k
  );
}
