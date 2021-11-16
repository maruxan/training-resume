import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';

import { Box } from '@chakra-ui/react';

export default function Footer() {
  const borderColor = useColorModeValue('gray.900', 'gray.200');
  return (
    <Box
      as="footer"
      textAlign="center"
      py={{ base: 5, md: 8 }}
      px={{ base: 4, md: '8%' }}
      borderTopWidth={2}
      borderColor={borderColor}>
      mauricio garavaglia &#169; 2021
    </Box>
  );
}
