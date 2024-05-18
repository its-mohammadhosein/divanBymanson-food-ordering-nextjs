import {
  AudioWaveform,
  AudioWaveformIcon,
  Grid2x2Check,
  Menu,
  Phone,
} from 'lucide-react';
import React from 'react';
import Link from "next/link";

export default function BotNav() {
  return (
    <div className="flex w-full justify-between px-6 sticky bottom-0 py-4 bg-white shadow-lg">
      <div>
        <Link href={'/main'}>

            <Menu />
        </Link>
      </div>
      <div>
       <Link href={'/main/order'}>

           <Grid2x2Check />
       </Link>
      </div>
      <div>
        <Link href={'/main/tracking'}>

            <AudioWaveform />
        </Link>
      </div>
      <div>
          <Link href={'/main/contact-us'}>

              <Phone />
          </Link>
      </div>
    </div>
  );
}
