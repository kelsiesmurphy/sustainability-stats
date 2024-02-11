import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Constants = () => {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Parameters</AccordionTrigger>
        <AccordionContent>
          <ul className='list-inside list-disc'>
            <li>Used pnpm (not npm or yarn)</li>
            <li>Created basic Hello World application</li>
            <li>Hosted on CloudFlare Pages</li>
            <li>Benchmarks recorded in Chrome browser with no extensions</li>
            <li>Tests included:</li>
            <ul className='ml-6 list-inside list-disc'>
              <li>
                Using{' '}
                <a
                  className='underline'
                  href='https://ecograder.com/'
                  target='_blank'
                >
                  Ecograder
                </a>{' '}
                to get the Ecograder score (/100), the page weight (kB), the C02
                per visit (g)
              </li>
              <li>
                Confirmed C02 per visit using the{' '}
                <a
                  className='underline'
                  href='https://www.websitecarbon.com/'
                  target='_blank'
                >
                  Website Carbon Calculator
                </a>
              </li>
              <li>
                Using Chrome DevTools to get the resources (kB) and average
                loading time (ms)
              </li>
            </ul>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Constants;
