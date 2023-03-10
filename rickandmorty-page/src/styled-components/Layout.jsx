import { useColorMode } from "@chakra-ui/react";
import styled  from "styled-components";

export const LayoutPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;

`

export const ContainerCharacters = styled.div`
display: grid;
margin: 0 auto;
max-width: 1000px;
gap: 25px;
justify-items: center;
    /* grid-auto-rows: 290px; */
grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
`
export const CharacterCards = styled.div`

/* max-width: 310px; */
max-width: 315px;
min-height: 410px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
margin: 0 25px;
box-shadow: 0 0 2px 0px black;

`


