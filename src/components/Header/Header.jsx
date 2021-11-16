import React from 'react';
import { useColorMode } from '@chakra-ui/react';

import { IconButton, Heading, Flex } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justify="space-between" py={{ base: 4, md: 8 }} px={{ base: 4, md: '8%' }}>
      <Heading>/rtp/resume/</Heading>
      <IconButton onClick={toggleColorMode}>
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </Flex>
  );
}
