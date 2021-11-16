import React from 'react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

import { IconButton, Heading, Flex } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = useColorModeValue('gray.900', 'gray.200');

  return (
    <Flex
      justify="space-between"
      align="center"
      py={{ base: 5, md: 8 }}
      px={{ base: 4, md: '8%' }}
      borderBottomWidth={2}
      borderColor={borderColor}>
      <Heading as="h1" size="lg">
        /rtp/resume/
      </Heading>
      <IconButton onClick={toggleColorMode}>
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </Flex>
  );
}
