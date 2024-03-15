import React from 'react';
import Timeline from './Timeline';
import { AvatarCircle } from './AvatarCircle';

const page = () => {
  return (
    <div className='mx-auto max-w-2xl space-y-12 py-12'>
      <AvatarCircle />
      <Timeline />
    </div>
  );
};

export default page;
