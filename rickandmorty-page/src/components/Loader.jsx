import styled, { keyframes } from "styled-components";
import portal from "../assets/PORTAL.png"

const portalanimation = keyframes`
 0%{
    transform: rotate(0deg);
 }
 100%{
    transform: rotate(360deg);
 }
`


const ContainLoader = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

img{
    animation: ${portalanimation} .7s linear infinite;
    width: 170px;
}
h2{
font-size: 40px;
}

`


export default function Loader() {
  return (
    <>
    <ContainLoader>
        <img src={portal}/>
        <h3>LOADING...</h3>
    </ContainLoader>
    </>
  )
}
