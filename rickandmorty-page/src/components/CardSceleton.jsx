import React from 'react'
import { Card, CardBody, Image, Text, Flex, Heading, Button,   } from '@chakra-ui/react'
import { Skeleton, } from '@chakra-ui/react'

function CardSceleton() {
  return (
    <>
      <Card maxWidth="280px" margin="8px">
        <CardBody>
          <Image
            _hover={{ transform: "scale(1.1)", transition: "all, .5s" }}
            borderRadius="10px"
          />
          <Heading
            color="teal"
            size="sm"
            textAlign="center"
            margin="5px 0"
          ></Heading>
          
          <Skeleton>
            <div>contents wrapped</div>
            <div>won't be visible</div>
            <div>won't be visible</div>
            <div>won't be visible</div>
            <div>won't be visible</div>
            <div>won't be visible</div>
            <div>won't be visible</div>
          </Skeleton>
          <div>
            <Skeleton margin="10px">
            <div>contents wrapped</div>

            </Skeleton>
          </div>
          

          <Flex marginTop="5px" justify="space-between" gap={2}>
            <Skeleton>
                <Button width="70px"/>
            </Skeleton>
            <Skeleton>
                <Button width="70px"/>
            </Skeleton>
            
          </Flex>
        </CardBody>
      </Card>
    </>
  );
}

export default CardSceleton
