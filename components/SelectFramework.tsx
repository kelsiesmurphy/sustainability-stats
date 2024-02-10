import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { frameworks } from '@/data/Frameworks';

const SelectFramework = ({ setSelectedFramework }) => {
  return (
    <Select onValueChange={(value) => setSelectedFramework(value)}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Framework' />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((framework, index) => {
          return (
            <SelectItem
              key={index}
              value={framework['Framework Name']}
            >
              {framework['Framework Name']}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectFramework;
