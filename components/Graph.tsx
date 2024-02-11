import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  Legend,
  Tooltip,
} from 'recharts';
import { frameworks } from '@/data/Frameworks';
import { useEffect, useState } from 'react';

const Graph = ({ selectedFramework }: { selectedFramework: any }) => {
  const [frameworkObject, setFrameworkObject] = useState<any>({});

  useEffect(() => {
    setFrameworkObject(
      frameworks.find(
        (framework) => framework['Framework Name'] === selectedFramework
      )
    );
  }, [selectedFramework]);

  const data = frameworkObject
    ? [
        {
          name: 'Page Weight (kB)',
          value: frameworkObject['Page Weight (KB)'],
        },
        {
          name: 'Resources (kB)',
          value: frameworkObject['Resources (kB)'],
        },
        {
          name: 'Average Load (ms)',
          value: frameworkObject['Average Load (ms)'],
        },
        {
          name: 'EcoGrader Score',
          value: frameworkObject['EcoGrader Score'],
        },
      ]
    : [];

  return (
    <>
      <RadarChart id='test' outerRadius={250} width={1000} height={700} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='name' />
        <Radar
          name={selectedFramework}
          dataKey='value'
          stroke='#475569'
          fill='#475569'
          fillOpacity={0.3}
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </>
  );
};

export default Graph;
