import styled, { keyframes } from "styled-components";
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

