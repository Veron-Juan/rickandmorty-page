import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//redux
import { Provider } from 'react-redux'
import store from './state/store'
//chakra
import { ChakraProvider } from '@chakra-ui/react'
//react-router
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
   
  ,
)
