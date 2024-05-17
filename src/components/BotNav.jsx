import { Menu } from 'lucide-react';
import React from 'react';

export default function BotNav() {
  return (
    <div className="flex w-full justify-between px-4 sticky bottom-0 py-4 bg-white shadow-lg">
      <div>
        <Menu />
      </div>
      <h1>order</h1>
      <h1>tracking</h1>
      <h1>contact us</h1>
    </div>
  );
}
