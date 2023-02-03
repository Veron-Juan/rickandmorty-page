import styled, { keyframes } from "styled-components";
import { Card, CardBody, Image, Text, Flex, Heading, Button,  } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText,Stack } from '@chakra-ui/react'
import { ContainerCharacters } from "../styled-components/Layout";
import CardCharacter from "./CardCharacter";
import CardSceleton from "./CardSceleton";

const Animation = keyframes`
0%{
    background-color: #b5bcc0;
}

100%{
    background-color: hsl(200, 20%, 95%);
}
`

const ContainerGrid = styled.div`
display: grid;
margin: 0 auto;
max-width: 1000px;
gap: 25px;
justify-items: center;
    /* grid-auto-rows: 290px; */
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
`

// const Card = styled.div`
// animation: ${Animation} 1s linear infinite alternate;
// max-width: 350px;
// min-height: 410px;
// display: flex;
// flex-direction: column;
// align-items: center;
// position: relative;

// img{
//   width: 100%;
//   height: 290px;
  
// }

// span{
//   width: 38px;
//   height: 38px;
//   background-color: #dfdf1d;
//   border-radius: 50%;
//   box-shadow: 1px 0px 3px black;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// `
export const Loader = ()=>{
    return (
      <ContainerGrid>
        <CardSceleton/>
        <CardSceleton/>
        <CardSceleton/>
        <CardSceleton/>
        <CardSceleton/>
        <CardSceleton/>
        <CardSceleton/>
        <CardSceleton/>
        <CardSceleton/>
        <CardSceleton/>
        <CardSceleton/>
        <CardSceleton/>
        
      </ContainerGrid>
    );
}

