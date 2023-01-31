import { createGlobalStyle } from "styled-components";


/**
 * createGlobalStyle es una función de styled-components
 * donde nos ayuda a crear estilos base para todos nuestro sistema como
 * aqui por ejemplo estoy afectando a la etiqueta body.
 * 
 * Recuerda utilizar los valores del tema en los componentes que necesites.
 */
export default createGlobalStyle`
  body {
    /* display: flex;
    align-items: center;
    justify-content: center;
    align-content: center; */
    height: 100vh;
    background: ${({ theme }) => theme.colors.background} !important;
    transition: all 0.15s linear;
    margin: 0;
    font-family: "Roboto";
    font-weight: 300;
    padding: 0;
  }

  


`;