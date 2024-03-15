import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AvatarCircle() {
  return (
    <Avatar>
      <AvatarImage src='/kelsie-murphy.JPG' alt='Kelsie Murphy' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
