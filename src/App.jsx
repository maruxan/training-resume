import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './style/theme.js';

import Header from './components/Header/Header.jsx';
import Explorer from './components/Explorer/Explorer.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Explorer />
    </ChakraProvider>
  );
}

export default App;
