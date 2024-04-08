import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import AnimatedCursor from 'react-animated-cursor';
import "swiper/css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ChakraProvider>
   {/* <AnimatedCursor /> */}

   <App />
   </ChakraProvider>
  </React.StrictMode>
);

