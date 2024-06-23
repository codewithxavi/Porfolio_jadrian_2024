import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';

import { metadata as meta } from '@/app/config';
import { hero } from '@/components/sections/hero/config';

function Hero() {
  return (
    <MotionWrap className=" w-full py-16 md:mt-0">
      <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <div className="inline-block rounded-lg  px-3 py-1 text-sm">
            <a
              href="#"
              target="_blank"
              rel="noopener"
              className="flex items-center transition md:justify-center md:hover:scale-105"
            >
              {' '}
              <div className="flex items-center ">
                {' '}
                <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                  {' '}
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,#FFD700_0%,#FFD700_50%,#FFFAF0_100%)]"></span>{' '}
                  <div className="inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-yellow-100 px-3 py-1 text-sm text-green-800 backdrop-blur-3xl dark:bg-gray-800 dark:text-white/80">
                    {' '}
                    Web developer & IT Support{' '}
                  </div>{' '}
                </span>{' '}
              </div>{' '}
            </a>
          </div>

          <div className="inline-block rounded-lg  px-3 py-1 text-sm">
            <a
              href="#"
              target="_blank"
              rel="noopener"
              className="flex items-center transition md:justify-center md:hover:scale-105"
            >
              {' '}
              <div className="flex items-center ">
                {' '}
                <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                  {' '}
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>{' '}
                  <div className="inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 backdrop-blur-3xl dark:bg-gray-800 dark:text-white/80">
                    {' '}
                    Available for work{' '}
                  </div>{' '}
                </span>{' '}
              </div>{' '}
            </a>
          </div>

          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl/none">
            Hey, I&apos;m Javi Adrián
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {hero.description}
          </p>
        </div>
      </div>
      <Image
        alt="Image"
        className="mx-auto mt-16 w-80 overflow-hidden rounded-full object-contain"
        height="550"
        width="600"
        src={'/images/me.jpg'}
        priority={true}
      />
    </MotionWrap>
  );
}

export default Hero;
