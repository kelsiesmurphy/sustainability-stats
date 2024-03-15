import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SelectSorting = ({ setSortHeading }: { setSortHeading: any }) => {
  const sortHeadings = [
    'CO2 per visit (g)',
    'Resources (kB)',
    'Page Weight (KB)',
    'Average Load (ms)',
  ];
  return (
    <Select
      defaultValue={sortHeadings[0]}
      onValueChange={(value) => setSortHeading(value)} 
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Framework' />
      </SelectTrigger>
      <SelectContent>
        {sortHeadings.map((sortHeading, index) => {
          return (
            <SelectItem key={index} value={sortHeading}>
              {sortHeading}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SelectSorting;
