import OrderMenu from '@/components/OrderMenu';
import { Badge, BadgeMinus, BadgePlus } from 'lucide-react';
import Image from 'next/image';

export default function page() {
  return (
    <>
      <div className="w-full relative min-h-[90vh] px-4 flex flex-col gap-5">
        <div className="bg-amber-50/90 border border-lime-100 min-h-[6rem] py-4 px-2 grid grid-cols-2 rounded-md w-[100%]">
          <div className="flex flex-col justify-center gap-2">
            <Image src={'/dummy.png'} width={50} height={50} />
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold">Chelo Kebab</h1>
              <p className="font-light">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <div className="w-[1.4rem] h-[1.4rem] border border-black border-solid rounded-[1rem] flex justify-center items-center font-semibold">
                1
              </div>
              <BadgePlus />
              <BadgeMinus />
            </div>
            <div className="flex justify-center gap-2">
              <h2 className="font-semibold">240,000</h2>
              <p className="font-light">Toman</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50/90 border border-lime-100 min-h-[6rem] py-4 px-2 grid grid-cols-2 rounded-md w-[100%]">
          <div className="flex flex-col justify-center gap-2">
            <Image src={'/dummy.png'} width={50} height={50} />
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold">Chelo Kebab</h1>
              <p className="font-light">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <div className="w-[1.4rem] h-[1.4rem] border border-black border-solid rounded-[1rem] flex justify-center items-center font-semibold">
                1
              </div>
              <BadgePlus />
              <BadgeMinus />
            </div>
            <div className="flex justify-center gap-2">
              <h2 className="font-semibold">240,000</h2>
              <p className="font-light">Toman</p>
            </div>
          </div>
        </div>
        <OrderMenu />
      </div>
    </>
  );
}
