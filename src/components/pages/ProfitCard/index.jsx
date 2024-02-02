import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { Badge, Card, Flex, Text } from '@radix-ui/themes';
import React from 'react';

const ProfitCard = ({ profit, lastYearProfit }) => {
  const profitPercentage = ((profit - lastYearProfit) / lastYearProfit) * 100;

  return (
    <Card size='2' className='w-[204px] h-36'>
      <Flex direction='column' gap='2'>
        <Text>Profit</Text>
        <Flex justify='between' align='center'>
          <Text size='3'>${profit}</Text>
          {profitPercentage !== 0 && (
            <Badge
              size='1'
              className='max'
              color={profitPercentage > 0 ? 'green' : 'red'}
            >
              {profitPercentage > 0 ? (
                <PlusIcon width='12' height='12' />
              ) : (
                <MinusIcon width='12' height='12' />
              )}
              <Text size='1' color=''>
                {profitPercentage.toFixed(1)}%
              </Text>
            </Badge>
          )}
        </Flex>
        <Text size='1'>Compared to last year</Text>
      </Flex>
    </Card>
  );
};

export default ProfitCard;
