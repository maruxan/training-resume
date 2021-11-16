import React from 'react';

import { Box } from '@chakra-ui/react';
import Folder from '../Folder/Folder';

export default function Explorer() {
  return (
    <Box py={{ base: 5, md: 8 }} px={{ base: 4, md: '8%' }}>
      <Folder dirname="about">
        <Box>about.me</Box>
      </Folder>
      <Folder dirname="projects">
        <Folder dirname="about">
          <Box>about.me</Box>
        </Folder>
      </Folder>
    </Box>
  );
}
