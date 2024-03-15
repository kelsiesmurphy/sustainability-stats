import React from 'react';
import { TooltipLine } from './TooltipLine';

const Timeline = () => {
  const timelineItems = [
    {
      date: 'September 2015 - November 2019',
      title: 'Music Degree',
      description:
        'Studied music with education at the University of Aberdeen, with the goal of becoming a music teacher',
    },
    {
      date: 'June 2019 - November 2021',
      title: 'Apple',
      description:
        'Worked at an Apple Store as a Creative, teaching how to use Apple technology to customers',
    },
    {
      date: 'November 2021 - November 2022',
      title: 'Momentum Group',
      description: 'Joined a consultancy building low-code applications',
    },
  ];

  const bjss = {
    date: 'May  2023 - onwards',
    title: 'BJSS',
    description:
      'Joined BJSS, a technology consultancy with enterprise clients including Specsavers, NHS and DVSA. I joined via the BJSS Academy.',
  };

  return (
    <ul className='relative border-l border-gray-200'>
      {timelineItems.map((item) => {
        return (
          <li className='mb-10 ml-4'>
            <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-400'></div>
            <time className='mb-1 text-sm font-normal leading-none text-gray-500'>
              {item.date}
            </time>
            <h3 className='text-lg font-semibold text-gray-900'>
              {item.title}
            </h3>
            <p className='mb-4 text-base font-normal text-gray-500'>
              {item.description}
            </p>
          </li>
        );
      })}
      <TooltipLine />
      <li className='mb-10 ml-4'>
        <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-400'></div>
        <time className='mb-1 text-sm font-normal leading-none text-gray-500'>
          {bjss.date}
        </time>
        <h3 className='text-lg font-semibold text-gray-900'>{bjss.title}</h3>
        <p className='mb-4 text-base font-normal text-gray-500'>
          {bjss.description}
        </p>
      </li>
    </ul>
  );
};

export default Timeline;
