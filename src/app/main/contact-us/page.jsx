import React from 'react';
import {Instagram, Mail, Mails, MapPin, Phone, PhoneCall} from "lucide-react";
import Link from "next/link";

function Page(props) {
    return (
        <div className={'px-4 flex flex-col gap-8'}>
            <div id={'contact-cards'} className={'bg-white/90 grid grid-cols-[30%,70%] h-[6rem]  rounded-md'}>
                <div className={'flex justify-center items-center'}><MapPin/></div>
                <div className={'flex flex-col justify-center items-start text-start gap-2'}><p className={'font-light underline'}>Address</p> <div><Link href={'www.google.com/maps'}>
                    <h1 className={'font-semibold text-lg underline'}>link to google map</h1>
                </Link></div></div>
            </div>
            <div id={'contact-cards'} className={'bg-white/90 grid grid-cols-[30%,70%] h-[6rem]  rounded-md'}>
                <div className={'flex justify-center items-center'}><PhoneCall/></div>
                <div className={'flex flex-col justify-center items-start text-start gap-2'}>
                    <p className={'font-light underline'}>CAll</p>
                        <div><Link href={'call:021-999-000-1'}>
                            <h1 className={'font-semibold text-lg underline'}>call: 0210000000</h1>
                        </Link></div>
                </div>
            </div>
            <div id={'contact-cards'} className={'bg-white/90 grid grid-cols-[30%,70%] h-[6rem]  rounded-md'}>
                <div className={'flex justify-center items-center'}><Instagram/></div>
                <div className={'flex flex-col justify-center items-start text-start gap-2'}>
                    <p className={'font-light underline'}>Instagram</p>
                        <div>
                            <Link href={'instagram.com'}>
                                <h1 className={'font-semibold text-lg underline'}>Link to email</h1>
                            </Link></div>
                </div>
            </div>
            <div id={'contact-cards'} className={'bg-white/90 grid grid-cols-[30%,70%] h-[6rem]  rounded-md'}>
                <div className={'flex justify-center items-center'}><Mail/></div>
                <div className={'flex flex-col justify-center items-start text-start gap-2'}><p>address</p> <div>
                    <Link href={'/somwhere'}>
                        <h1 className={'font-semibold text-lg underline'}>Link to email</h1>

                    </Link>
                </div>
                </div>
            </div>

        </div>
    );
}

export default Page;