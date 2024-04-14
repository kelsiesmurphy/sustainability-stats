import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ImageSwitch } from './ImageSwitch';
import { useState } from 'react';

const BarChartScreen = () => {

  const [showImage, setShowImage] = useState(false)

  const data = [
    {
      name: 'CO2 per visit (g)',
      "Without Image": 0,
      "With Image": 0.01,
    },
    {
      name: 'Resources on page load (kB)',
      "Without Image": 0.46,
      "With Image": 31.2,
    },
    {
      name: 'Page weight (kB)',
      "Without Image": 0.9,
      "With Image": 32.19,
    },
    {
      name: 'Average loading time (ms)',
      "Without Image": 54.2,
      "With Image": 142.5,
    },
    {
      name: 'Ecograder score',
      "Without Image": 100,
      "With Image": 96,
    }
  ];

  return (
    <div className='space-y-12 flex flex-col items-center'>
       <ImageSwitch showImage={showImage} setShowImage={setShowImage}/>
      <ResponsiveContainer width="100%" height={500}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis 
              ticks={[0, 20, 40, 60, 80, 100, 120, 140, 160, 180]}
              type="number"  />
            <Tooltip />
            <Legend />
            <Bar dataKey="Without Image" fill="#047857" activeBar={<Rectangle fill="#065f46" stroke="#022c22" />} />
            {showImage && <Bar dataKey="With Image" fill="#be123c" activeBar={<Rectangle fill="#9f1239" stroke="#4c0519" />} />}
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default BarChartScreen;
