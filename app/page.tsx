'use client';

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

  return (
    <main className='overscroll-none'>
      <div id='blob'></div>
      <div
        id='blur'
        className='flex min-h-screen flex-col items-center justify-between p-24'
      >
        <h1>hello</h1>
      </div>
    </main>
  );
}
