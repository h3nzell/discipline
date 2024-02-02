import { motion } from 'framer-motion';
import { Cross1Icon, MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import {
  Badge,
  Flex,
  Text,
  Button,
  Heading,
  IconButton,
} from '@radix-ui/themes';

const ChartUIContainer = ({ children, target, economy, isOpen, setIsOpen }) => {
  const handleOpenDetails = () => setIsOpen(true);
  const economyPercentage = ((economy - target) / target) * 100;

  return (
    <motion.div
      layout
      onClick={handleOpenDetails}
      transition={{ layout: { duration: 0.5 } }}
      className={`w-full max-w-[640px] bg-card rounded-2xl p-6 ${
        isOpen ? 'absolute z-50 top-14 h-[700px] ' : 'relative z-49  h-[400px]'
      } `}
    >
      <Flex justify='between' width='100%' align='center'>
        <Text size='2'>Economics</Text>
        {isOpen ? (
          <IconButton
            className='cursor-pointer'
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <Cross1Icon />
          </IconButton>
        ) : (
          <Button
            className='cursor-pointer'
            variant='ghost'
            color='blue'
            size='2'
          >
            Details
          </Button>
        )}
      </Flex>
      <Flex gap='2' align='center'>
        <Heading size='8'>${economy}</Heading>
        {economyPercentage !== 0 && (
          <Badge
            size='1'
            className='max'
            color={economyPercentage > 0 ? 'green' : 'red'}
          >
            {economyPercentage > 0 ? (
              <PlusIcon width='12' height='12' />
            ) : (
              <MinusIcon width='12' height='12' />
            )}
            <Text size='1' color=''>
              {economyPercentage.toFixed(1)}%
            </Text>
          </Badge>
        )}
      </Flex>
      <Text size='2' color='gray'>
        Ahead of target
      </Text>
      <motion.div
        layout
        className={`${isOpen ? 'h-[600px]' : 'h-[240px]'} m-2 max-w-max`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ChartUIContainer;
