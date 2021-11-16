import React from 'react';

import { Flex, Box, Link } from '@chakra-ui/react';

export default function File({ filename, icon }) {
  return (
    <Flex px={3} py={2} align="center">
      {icon}
      <Box ml={3}>{filename}</Box>
    </Flex>
  );
}
