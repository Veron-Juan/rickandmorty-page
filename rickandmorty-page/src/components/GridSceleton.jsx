import styled, { keyframes } from "styled-components";

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
gap: 45px;
    /* grid-auto-rows: 290px; */
grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
`

const Card = styled.div`
animation: ${Animation} 1s linear infinite alternate;
max-width: 350px;
min-height: 410px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;

img{
  width: 100%;
  height: 290px;
  
}

span{
  width: 38px;
  height: 38px;
  background-color: #dfdf1d;
  border-radius: 50%;
  box-shadow: 1px 0px 3px black;
  display: flex;
  align-items: center;
  justify-content: center;
}

`
export const Loader = ()=>{
    return(
        <ContainerGrid>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            
        </ContainerGrid>
    )
}

