'use client';

import Intro from '@/components/Intro';
import GraphSection from '@/components/GraphSection';
import StatsTable from '@/components/StatsTable';
import APISearch from '@/components/APISearch';

export default function Home() {
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
    <APISearch />
];

  return (
    <main>
      <div id='blob'></div>
      <div id='blur' className='space-y-24'>
        {sections.map((section, index) => {
          return <div key={index}>{section}</div>;
        })}
      </div>
    </main>
  );
}
