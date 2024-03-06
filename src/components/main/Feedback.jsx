
'use client';

import { Card } from 'flowbite-react';
import { Avatar, Blockquote, Rating } from 'flowbite-react';

export default function Feedback() {
  return (
    <Card href="#" className="max-w-xl">
      <figure className="max-w-screen-xl">
      <div className="mb-4 flex items-center">
        <Rating size="md">
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
        </Rating>
      </div>
      <Blockquote>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          "Best Cake Out There"
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center space-x-3">
        <Avatar rounded size="xs" img="https://i.pinimg.com/236x/d9/03/0a/d9030a5696d2507a1dfb38a686ac93c2.jpg" alt="profile picture" />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
        </div>
      </figcaption>
    </figure>
    </Card>
  );
}
