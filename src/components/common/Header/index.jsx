import { useEffect, useState } from 'react';
import { TextField, IconButton, Text, Flex, Avatar } from '@radix-ui/themes';
import {
  BellIcon,
  DotsHorizontalIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';

import { ProgressSlider } from '../../pages';

const Header = ({ percent }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let timeoutId;

    const animateCount = () => {
      if (count < percent) {
        timeoutId = setTimeout(() => {
          setCount(count + 1);
          animateCount();
        }, 1000 / percent);
      }
    };

    animateCount();

    return () => clearTimeout(timeoutId);
  }, [count, percent]);

  return (
    <div className='max-w-[640px] w-full flex justify-between items-center mx-auto py-3 border-b border-neutral-11'>
      <TextField.Root style={{ maxWidth: '200px' }}>
        <TextField.Slot>
          <MagnifyingGlassIcon height='16' width='16' />
        </TextField.Slot>
        <TextField.Input placeholder='Search ' size='2' radius='medium' />
        <TextField.Slot>
          <IconButton className='cursor-pointer' size='1' variant='ghost'>
            <DotsHorizontalIcon height='14' width='14' />
          </IconButton>
        </TextField.Slot>
        <TextField.Slot>
          <IconButton
            className='cursor-pointer'
            color='gray'
            variant='outline'
            radius='large'
            size='1'
          >
            S
          </IconButton>
        </TextField.Slot>
      </TextField.Root>

      <Flex align='center' justify='end' gap='4' width='100%'>
        <Flex gap='3' align='center' className='py-[6px]'>
          <Text size='1' color='gray'>
            Your target
          </Text>
          <Text size='1'>{count}%</Text>
          <ProgressSlider percent={percent} />
        </Flex>
        <IconButton
          size='3'
          radius='medium'
          variant='ghost'
          className='cursor-pointer'
        >
          <BellIcon color='#ADB1B8' width='16' height='16' />
        </IconButton>
        <Avatar
          size='1'
          fallback='C'
          color='gray'
          variant='soft'
          radius='medium'
          className='cursor-pointer'
        />
      </Flex>
    </div>
  );
};

export default Header;
