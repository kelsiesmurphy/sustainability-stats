import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function TooltipLine() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <hr className='mx-6 my-12 cursor-pointer rounded-md border-4 border-zinc-500 transition-colors hover:border-zinc-400' />
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-xl'>CodeClan, of course!. <span className='text-xs'>(G34 woo!)</span></p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
