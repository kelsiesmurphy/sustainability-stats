import { LinkIcon } from './LinkIcon';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import { frameworks } from '@/data/Frameworks';
import { useState } from 'react';
import SelectSorting from './SelectSorting';
import Constants from './Constants';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const StatsTable = () => {
  const [sortHeading, setSortHeading] = useState<string>('CO2 per visit (g)');

  const handleSortChange = (newSortHeading: string) => {
    setSortHeading(newSortHeading);
  };

  const sortedFrameworksData = [...frameworks].sort(
    (a: any, b: any) => a[sortHeading] - b[sortHeading]
  );

  return (
    <div className='flex items-center justify-center'>
      <div className='flex max-w-5xl flex-col gap-8'>
        <div className='flex items-center justify-between'>
          <h2 className='ml-4 text-lg font-medium text-slate-700 md:text-xl'>
            Benchmarks
          </h2>
          <SelectSorting setSortHeading={handleSortChange} />
        </div>
        <div className='px-4'>
          <Constants />
        </div>
        <Table>
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
              <TableHead className='hidden md:table-cell'>
                CO2 per visit (g)
              </TableHead>
              <TableHead className='hidden md:table-cell'>
                Resources on page load (kB)
              </TableHead>
              <TableHead className='hidden md:table-cell'>
                Page weight (kb)
              </TableHead>
              <TableHead className='hidden md:table-cell'>
                Average loading time (ms)
              </TableHead>
              <TableHead className='hidden md:table-cell'>
                Ecograder score
              </TableHead>
              <TableHead>Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='text-slate-600'>
            {sortedFrameworksData.map((framework, index) => (
              <Collapsible key={index} asChild>
                <>
                  <TableRow key={framework['Framework Name']}>
                    <TableCell className='font-medium'>
                      {framework['Framework Name']}
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      {framework['CO2 per visit (g)']}
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      {framework['Resources (kB)']}
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      {framework['Page Weight (KB)']}
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      {framework['Average Load (ms)']}
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      {framework['EcoGrader Score']}
                    </TableCell>
                    <TableCell>
                      <a href={framework.Link} target='_blank'>
                        <LinkIcon />
                      </a>
                    </TableCell>
                    <TableCell className='md:hidden'>
                      <CollapsibleTrigger asChild>
                        <Button variant='ghost'>
                          <ChevronDown />
                        </Button>
                      </CollapsibleTrigger>
                    </TableCell>
                  </TableRow>
                  <CollapsibleContent asChild>
                    <div className='flex flex-col px-4 py-2'>
                      <p className='p-2'>
                        CO2 per visit: {framework['CO2 per visit (g)']} g
                      </p>
                      <p className='p-2'>
                        Resources: {framework['Resources (kB)']} kB
                      </p>
                      <p className='p-2'>
                        Page Weight: {framework['Page Weight (KB)']} kB
                      </p>
                      <p className='p-2'>
                        Average Load: {framework['Average Load (ms)']} ms
                      </p>
                      <p className='p-2'>
                        EcoGrader Score: {framework['EcoGrader Score']}
                      </p>
                    </div>
                  </CollapsibleContent>
                </>
              </Collapsible>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StatsTable;
