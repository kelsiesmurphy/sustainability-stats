import { navigationItems } from './NavBar';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function MobileDrawer() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = (link: string) => {
    setIsOpen(false);
    router.push(link);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant='ghost'>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <div className='flex flex-1 items-center'>
            <ul className='flex flex-1 flex-col gap-2 py-6'>
              {navigationItems.map((value, index) => {
                return (
                  <li key={index} className='flex flex-1'>
                    <Button
                      variant={pathname === value.link ? 'default' : 'outline'}
                      className='flex-1'
                      onClick={() => handleButton(value.link)}
                    >
                      {value.title}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
