import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface DataCardProps {
  label: string;
  value: number;
}

const DataCard = ({ label, value }: DataCardProps) => {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{value}</div>
      </CardContent>
      <CardFooter className='border-t p-2 shadow-sm'>
        <h4>Lihat Data</h4>
        <ArrowRight />
      </CardFooter>
    </Card>
  );
};

export default DataCard;
