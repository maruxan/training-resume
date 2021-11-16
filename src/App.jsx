import * as React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';

import theme from './style/theme.js';

import Header from './components/Header/Header.jsx';
import Explorer from './components/Explorer/Explorer.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW="4xl" mx="auto">
        <Header />
        <Explorer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
