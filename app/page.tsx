'use client';

import Intro from '@/components/Intro';
import GraphSection from '@/components/GraphSection';
import StatsTable from '@/components/StatsTable';
import APISearch from '@/components/APISearch';
import Resources from '@/components/Resources';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [showBlob, setShowBlob] = useState(true);

  if (typeof window !== 'undefined') {
    const blob = document.getElementById('blob');

    window.onpointermove = (event) => {
      const { clientX, clientY } = event;
      blob?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 20000, fill: 'forwards' }
      );
    };
  }

  const sections = [
    <Intro />,
    <StatsTable />,
    <GraphSection />,
    <APISearch />,
    <Resources />,
  ];

  return (
    <main>
      <div id='blob' className={showBlob ? '' : 'hidden'}></div>
      <div id='blur' className='space-y-24'>
        {sections.map((section, index) => {
          return <div key={index}>{section}</div>;
        })}
        <div className='flex justify-center pb-4'>
          <Button
            onClick={() => setShowBlob(!showBlob)}
            variant='outline'
          >
            {showBlob ? "Hide Blob" : "Show Blob"}
          </Button>
        </div>
      </div>
    </main>
  );
}
