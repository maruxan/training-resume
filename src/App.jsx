import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './style/theme.js';

import { Box } from '@chakra-ui/react';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box>App</Box>
    </ChakraProvider>
  );
}

export default App;
