import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';

import me from './me.jpg';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Link,
  Image,
  VStack,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function About({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        w="full"
        bgColor="transparent"
        justifyContent="flex-start"
        p={0}
        _hover={{ bgColor: 'transparent' }}>
        {children}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>about.me</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Image src={me} alt="Mauricio Garavaglia" mb={8} borderRadius="md" />
            <Text mb={3}>
              Hi, I'm <b>Mauricio Garavaglia</b>, 24 yrs old frontend developer from Resistencia,
              Argentina. In this site you can see what I've been working on during the React
              Training Program.
            </Text>
            <Text mb={6}>You can also checkout what else I've done in the links below.</Text>
            <VStack align="flex-start">
              <Link href="https://mg-dev.netlify.app/" isExternal textDecor="underline">
                website
                <ExternalLinkIcon ml={3} fontSize="xs" />
              </Link>
              <Link href="https://github.com/maruxan" isExternal textDecor="underline">
                github
                <ExternalLinkIcon ml={3} fontSize="xs" />
              </Link>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
