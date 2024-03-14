import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
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
          name: 'EcoGrader Score',
          value: frameworkObject['EcoGrader Score'],
        },
        {
          name: 'Average Load (ms)',
          value: frameworkObject['Average Load (ms)'],
        },
        {
          name: 'Page Weight (kB)',
          value: frameworkObject['Page Weight (KB)'],
        },
        {
          name: 'Resources (kB)',
          value: frameworkObject['Resources (kB)'],
        },
      ]
    : [];

  return (
    <ResponsiveContainer width='100%' height={700}>
      <RadarChart
        id='test'
        data={data}
        outerRadius='70%'
      >
        <PolarGrid />
        <PolarAngleAxis
          width={40}
          stroke='#344052'
          dataKey='name'
        />
        <Radar
          name={selectedFramework}
          dataKey='value'
          stroke='#27303d'
          fill='#27303d'
          fillOpacity={0.3}
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Graph;
