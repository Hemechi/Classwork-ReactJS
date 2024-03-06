
'use client';

import { Card } from 'flowbite-react';

export default function Product() {
  return (
    <Card
      className="max-w-[300px]"
      imgAlt="jelly cake"
      imgSrc="https://i.pinimg.com/564x/39/1d/07/391d07082b14dd6a8ba8552136db36fc.jpg"
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Cloud Jelly cake
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$50</span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}
