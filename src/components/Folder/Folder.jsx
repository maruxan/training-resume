import React from 'react';

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react';
import { MinusIcon, AddIcon, ChatIcon } from '@chakra-ui/icons';

export default function Folder({ dirname, children }) {
  return (
    <Accordion allowToggle borderColor="transparent">
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton>
              <ChatIcon mr={3} transform="rotate(180deg)" />
              <Box flex="1" textAlign="left">
                {dirname}
              </Box>
              {isExpanded ? <MinusIcon fontSize="12px" /> : <AddIcon fontSize="12px" />}
            </AccordionButton>
            <AccordionPanel pr={0}>{children}</AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}
