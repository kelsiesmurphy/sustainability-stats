import { LinkIcon } from './LinkIcon';
import Layout from './Layout';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { frameworks } from '@/data/Frameworks';
import { useState } from 'react';
import SelectSorting from './SelectSorting';
import Constants from './Constants';

const StatsTable = () => {
  const [sortHeading, setSortHeading] = useState<string>('CO2 per visit (g)');

  const handleSortChange = (newSortHeading: string) => {
    setSortHeading(newSortHeading);
  };

  const sortedFrameworksData = [...frameworks].sort(
    (a: any, b: any) => a[sortHeading] - b[sortHeading]
  );

  return (
    <Layout>
      <div className='flex max-w-5xl flex-col gap-8'>
        <div className='flex items-center justify-between'>
          <h2 className='ml-4 text-xl font-medium text-slate-700'>
            Benchmarks
          </h2>
          <SelectSorting setSortHeading={handleSortChange} />
        </div>
        <div className='px-4'>
          <Constants />
        </div>
        <Table className='rounded-md bg-slate-100/30 backdrop-blur-md'>
          <TableCaption>
            <a
              href='https://github.com/kelsiesmurphy/sustainable-framework-testing'
              target='_blank'
              className='hover:underline'
            >
              Frontend framework sustainability benchmarks (02/2024)
            </a>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[200px]'>Framework</TableHead>
              <TableHead>CO2 per visit (g)</TableHead>
              <TableHead>Resources on page load (kB)</TableHead>
              <TableHead>Page weight (kb)</TableHead>
              <TableHead>Average loading time (ms)</TableHead>
              <TableHead>Ecograder score</TableHead>
              <TableHead>Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='text-slate-600'>
            {sortedFrameworksData.map((framework) => (
              <TableRow key={framework['Framework Name']}>
                <TableCell className='font-medium'>
                  {framework['Framework Name']}
                </TableCell>
                <TableCell>{framework['CO2 per visit (g)']}</TableCell>
                <TableCell>{framework['Resources (kB)']}</TableCell>
                <TableCell>{framework['Page Weight (KB)']}</TableCell>
                <TableCell>{framework['Average Load (ms)']}</TableCell>
                <TableCell>{framework['EcoGrader Score']}</TableCell>
                <TableCell>
                  <a href={framework.Link} target='_blank'>
                    <LinkIcon />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
};

export default StatsTable;
