import React from 'react'
import { Card,  Image, Text,  Heading, Button, Stack, CardFooter, CardBody  } from '@chakra-ui/react'
import Header from '../../components/Header'
import { Aber } from '../home/Home'

function Detail() {
  return (
    <>
    <Header/>
    <Aber>Detail character</Aber>
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  width="70%"
  height="350px"
  margin="0 auto"
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '220px' }}
    src='https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </>
  )
}

export default Detail
