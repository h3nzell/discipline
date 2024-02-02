// 'use client';
import { Card, IconButton, Text, Flex, Button } from '@radix-ui/themes';
import { CheckIcon, Cross1Icon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const CardComponent = ({ status, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleModalClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const configBackgrounds = {
    good: 'bg-card-good-color',
    'non-critical': 'bg-card-non-critical-color',
    bad: '',
  };

  const configButtonColors = {
    good: 'green',
    'non-critical': 'yellow',
    bad: 'red',
  };

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.5 } }}
      onClick={handleOpenModal}
      className={`w-full  ${
        isOpen
          ? 'absolute z-50 top-14 max-w-[640px] h-[calc(100vh-152px)] '
          : 'relative z-49 max-w-[200px] h-[142px]'
      } `}
    >
      <Card
        size={isOpen ? '4' : '2'}
        className={`w-full h-full ${configBackgrounds[status]} ${
          isOpen ? 'cursor-default' : 'cursor-pointer'
        } ${className}`}
      >
        <Flex justify='between' align='center' width='100%'>
          <Flex gap='2' align='center'>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <IconButton
                variant='solid'
                radius='full'
                color={configButtonColors[status]}
              >
                {status === 'good' ? <CheckIcon /> : '6'}
              </IconButton>
            </motion.div>

            <Flex direction='column'>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                layout
                size='2'
              >
                {status === 'good' ? 'All good.' : 'Non critical'}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                layout
                size='2'
                color='gray'
              >
                {status === 'good' && 'No'} issues
              </motion.p>
            </Flex>
          </Flex>
          {isOpen && (
            <IconButton
              variant='soft'
              color='gray'
              radius='full'
              className='cursor-pointer'
            >
              <Cross1Icon onClick={handleModalClose} />
            </IconButton>
          )}
        </Flex>

        {status === 'good' && (
          <Button
            mt='4'
            size='1'
            color='blue'
            variant='ghost'
            onClick={onViewAllClick}
          >
            View all
          </Button>
        )}
      </Card>
    </motion.div>
  );
};

export default CardComponent;
