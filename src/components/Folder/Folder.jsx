import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react';
import { MinusIcon, AddIcon, ChatIcon } from '@chakra-ui/icons';

export default function Folder({ dirname, children }) {
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Accordion allowToggle borderColor="transparent">
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton _expanded={{ bg: bgColor }}>
              <ChatIcon mr={3} transform="rotate(180deg)" />
              <Box flex="1" textAlign="left">
                {dirname}
              </Box>
              {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
            </AccordionButton>
            <AccordionPanel pr={0} py={2}>
              {children}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}
