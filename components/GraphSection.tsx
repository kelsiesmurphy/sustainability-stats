import React, { useState } from 'react';
import Graph from './Graph';
import SelectFramework from './SelectFramework';

const GraphSection = () => {
  const [selectedFramework, setSelectedFramework] = useState('HTML');
  return (
    <div className='flex flex-col items-center'>
      <SelectFramework setSelectedFramework={setSelectedFramework} />
      <Graph selectedFramework={selectedFramework} />
    </div>
  );
};

export default GraphSection;
