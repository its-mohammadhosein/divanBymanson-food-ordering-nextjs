import React from 'react';

export default function MenuNav() {
  const active = 'bg-white p-2 rounded-sm shadow-lg';
  return (
    <div className="flex bg-[#f5f5f788] overflow-hidden items-center sticky min-h-[2rem] py-2 px-2 top-14 pl-2 backdrop-blur-md shadow-md w-full gap-[1rem] overflow-auto">
      <div className={active}>Persians</div>
      <div>Drinks</div>
      <div>salad</div>
      <div>Desseret</div>
      <div>Appetizer</div>
      <div>Breakfast</div>
    </div>
  );
}
