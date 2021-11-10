import React from "react";

import { Button } from "@chakra-ui/button";
import { Box, Container, Divider, Flex, Link, Stack } from "@chakra-ui/layout";
import { FaWaze, FaSistrix } from "react-icons/fa";
import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Image } from "@chakra-ui/image";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import napoliLogo from "../assets/napoli-logo.jpeg";
import { HamburgerIcon } from "@chakra-ui/icons";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const HoverLink = () => (
    <Link rounded="base" _hover={{ bg: "gray.200" }} p={2} />
  );

  return (
    <>
      <Box>
        <Container maxW="container.xl">
          <header>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              ml={6}
              mr={6}
              mt={6}
            >
              <Box>
                <Flex alignItems="center">
                  <Box display={{ base: "block", md: "none" }}>
                    <Button ref={btnRef} onClick={onOpen}>
                      <HamburgerIcon />
                    </Button>
                  </Box>

                  <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>Menu</DrawerHeader>

                      <DrawerBody>
                        <Stack as="nav">
                          <HoverLink>Burger</HoverLink>
                          <HoverLink>Sidemenu</HoverLink>
                          <HoverLink>Drink</HoverLink>
                          <HoverLink>Takeout</HoverLink>
                        </Stack>
                      </DrawerBody>

                      <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button colorScheme="blue">Save</Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>

                  <Image boxSize="60px" src={napoliLogo} alt="brand" mr="8" />
                  <Icon as={FaWaze}></Icon>
                  <InputGroup　display={{ base: "none", md: "block" }}>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<FaSistrix color="gray.300" />}
                    />
                    <Input type="text" placeholder="Search..." />
                  </InputGroup>
                </Flex>
              </Box>

              <Box>
                <Button pr={3} colorScheme="blue" fontSize="lg" variant="link">
                  Log in
                </Button>
                <Button colorScheme="blue" fontSize="lg" variant="link">
                  Sign up
                </Button>
              </Box>
            </Flex>
            <Divider mt="4" />
          </header>
        </Container>
      </Box>
    </>
  );
}

export default Header;
