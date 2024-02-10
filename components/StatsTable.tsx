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

const StatsTable = () => {
  return (
    <Layout>
      <Table className='max-w-5xl rounded-md bg-slate-100/30 backdrop-blur-md'>
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
            <TableHead className='w-[100px]'>Framework</TableHead>
            <TableHead>Resources on page load (kB)</TableHead>
            <TableHead>Page weight (kb)</TableHead>
            <TableHead>Average loading time (ms)</TableHead>
            <TableHead>Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {frameworks.map((framework) => (
            <TableRow key={framework['Framework Name']}>
              <TableCell className='font-medium'>
                {framework['Framework Name']}
              </TableCell>
              <TableCell>{framework['Resources (kB)']}</TableCell>
              <TableCell>{framework['Page Weight (KB)']}</TableCell>
              <TableCell>{framework['Average Load (ms)']}</TableCell>
              <TableCell>
                <a href={framework.Link} target='_blank'>
                  <LinkIcon />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Layout>
  );
};

export default StatsTable;
