import React, { useState } from 'react';
import Layout from './Layout';
import Graph from './Graph';
import SelectFramework from './SelectFramework';

const GraphSection = () => {
  const [selectedFramework, setSelectedFramework] = useState("HTML");
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <SelectFramework setSelectedFramework={setSelectedFramework} />
        <Graph selectedFramework={selectedFramework} />
      </div>
    </Layout>
  );
};

export default GraphSection;
