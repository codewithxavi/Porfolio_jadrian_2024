import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import Reveal from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';

function About() {
  return (
    <MotionWrap className="mx-auto py-16  lg:w-9/12" id="about">
      {/* TODO: Redesign for horizontal */}
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-row">
          <div className="flex flex-row items-center">
            <Reveal>
              <h2 className="text-4xl font-bold sm:text-5xl md:text-5xl lg:text-6xl">
                About Me
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="space-y-4">
          <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Skilled web developer crafting sleek, effective websites. Versed in
            diverse technologies and frameworks, hungry for new skills and
            challenges. <br />{' '}
            <span className="font-extrabold">
              2+ years deep in software engineering. From Barcelona, Spain 🇪🇸,
              making dope web apps.
            </span>
          </p>
          <Button asChild>
            <Link href="cv_empresa.pdf" target="_blank">
              View Resume <ArrowUpRightIcon className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
