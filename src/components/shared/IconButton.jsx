'use client';
import { IconButton, Flex } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export default function SomeComponent() {
  return (
    <Flex align='center' gap='3'>
      <IconButton color='blue' size='3' variant='classic' radius='full'>
        <MagnifyingGlassIcon width='22' height='22' />
      </IconButton>

      <IconButton color='crimson' size='2' variant='soft'>
        <MagnifyingGlassIcon width='18' height='18' />
      </IconButton>

      <IconButton color='indigo' size='1' variant='solid'>
        <MagnifyingGlassIcon width='15' height='15' />
      </IconButton>
    </Flex>
  );
}
// <IconButton  variant='solid' color='blue' radius='full' size='4' >
//   <PlusIcon width='16' height='16' />
// </IconButton>
