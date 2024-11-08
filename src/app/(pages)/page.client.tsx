'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

import { PublicEvent } from '@/next/utils/events';
import { EventPublicDisplay } from '@/next/components/event';
import { useAnimation } from '@/next/animation/context';

type PublicHomePageClientProps = {
  events: PublicEvent[];
};

export const PublicHomePageClient: React.FC<PublicHomePageClientProps> = ({ events }) => {
  const { setAnimateHeaderOnScroll } = useAnimation();
  useEffect(() => {
    setAnimateHeaderOnScroll(true);
  }, [setAnimateHeaderOnScroll]);

  return (
    <div>
      <section className="relative w-screen h-dvh">
        <Image
          src="/homepage_hero.webp"
          alt="R(h)einblech in Deidesheim"
          fill={true}
          style={{ objectPosition: '50% 35%', objectFit: 'cover' }}
          priority
        />
      </section>

      <section className="bg-transparent">
        <div className="absolute inset-0 flex items-end justify-center pb-20 w-full">
          <div className="relative w-3/4 h-1/6 md:w-1/2 animate-moveup">
            <Image
              src="/logo/letters_white.webp"
              alt="R(h)einblech Piktogramme"
              fill
              style={{ objectFit: 'scale-down' }}
            />
          </div>
        </div>
      </section>

      <section className="">
        <div className="middle-column">
          <h2 className="text-2xl font-bold my-8 text-center">Termine</h2>
          <div className="space-y-24">
            {events?.map((event, index) => <EventPublicDisplay key={index} event={event} index={index} />)}
          </div>
        </div>
      </section>
    </div>
  );
};
