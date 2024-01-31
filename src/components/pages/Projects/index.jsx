import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import React from 'react';
import { Status } from '..';

const Projects = ({ data }) => {
  return (
    <Card size='2' className='max-w-[420px] w-full'>
      <Flex align='center' justify='between'>
        <Heading size='2'>Projects</Heading>
        <Button size='2' color='blue' variant='ghost'>
          View projects
        </Button>
      </Flex>
      <Flex direction='column' gap='3' width='100%'>
        <Grid
          gap='3'
          align='center'
          width='100%'
          className='py-3 h-20 border-b border-[#101010]'
          style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr' }}
        >
          <Text>SuperESG</Text>
          {data?.superESG.map((element, index) => (
            <Status key={index} size={element.size} status={element.status} />
          ))}
        </Grid>
        <Grid
          gap='3'
          align='center'
          width='100%'
          className='py-3 h-20 border-b border-[#101010]'
          style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr' }}
        >
          <Text>Umbrex Inc.</Text>
          {data?.umbrex.map((element, index) => (
            <Status key={index} size={element.size} status={element.status} />
          ))}
        </Grid>
        <Grid
          gap='3'
          width='100%'
          align='center'
          className='py-3 h-20 border-b border-[#101010]'
          style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr' }}
        >
          <Text>PriceWater..</Text>
          {data?.priceWater.map((element, index) => (
            <Status key={index} size={element.size} status={element.status} />
          ))}
        </Grid>
      </Flex>
    </Card>
  );
};

export default Projects;
