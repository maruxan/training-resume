import * as React from 'react';
import { ChakraProvider, VStack, Spacer } from '@chakra-ui/react';

import theme from './style/theme.js';

import Header from './components/Header/Header.jsx';
import Explorer from './components/Explorer/Explorer.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack align="stretch" maxW="4xl" mx="auto" minH="100vh">
        <Header />
        <Explorer />
        <Spacer />
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
