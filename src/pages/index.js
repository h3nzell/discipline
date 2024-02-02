import { Inter } from 'next/font/google';
import { Flex, Text } from '@radix-ui/themes';

import {
  Header,
  Projects,
  ProfitCard,
  CardComponent,
  SelectComponent,
  LineChartContainer,
} from '@/components';
import { projectsData, chartData } from '@/utils';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div
      className={`${inter.className}  flex items-center gap-5 flex-col w-full bg-dashboard h-full`}
    >
      <Header percent={60} />
      <div className='max-w-[640px] w-full flex items-center justify-between'>
        <Text>Good Morning</Text>
        <Flex>
          <SelectComponent
            defaultValue='#B88522s'
            options={[
              'Current month',
              'Last 3 months',
              'Last 6 months',
              '1 year ',
            ]}
          />
        </Flex>
      </div>

      <Flex justify='center' width='100%' gap='3'>
        <Flex direction='column' gap='4'>
          <CardComponent status='non-critical' />
          <ProfitCard lastYearProfit={60} profit={100} />
        </Flex>
        <Projects data={projectsData} />
      </Flex>
      <LineChartContainer data={chartData} />
    </div>
  );
}
