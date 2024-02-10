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

const Graph = ({ selectedFramework }) => {
  const [frameworkObject, setFrameworkObject] = useState({});

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
          name: 'CO2 per visit (g)',
          value: frameworkObject['CO2 per visit (g)'],
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
      <RadarChart outerRadius={250} width={1000} height={700} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='name' />
        <Radar
          name={selectedFramework}
          dataKey='value'
          stroke='#82ca9d'
          fill='#82ca9d'
          fillOpacity={0.6}
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </>
  );
};

export default Graph;
