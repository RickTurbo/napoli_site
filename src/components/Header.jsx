import React from "react";

import { Button } from "@chakra-ui/button";
import { Box, Divider, Flex, Link, Stack } from "@chakra-ui/layout";
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

  return (
    <>
      <Box
        position="fixed"
        top="0"
        zIndex={10}
        opacity="0.9"
        bg="gray.50"
        w="100%"
      >
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
                    <DrawerHeader fontSize="3xl">Menu</DrawerHeader>

                    <DrawerBody>
                      <Icon as={FaWaze}></Icon>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<FaSistrix color="gray.300" />}
                        />
                        <Input type="text" placeholder="Search..." />
                      </InputGroup>
                      <Stack mt={10} as="nav">
                        <Link
                          fontWeight="semibold"
                          fontSize="2xl"
                          rounded="base"
                          _hover={{ bg: "gray.200" }}
                          p={2}
                        >
                          Players
                        </Link>
                        <Link
                          fontWeight="semibold"
                          fontSize="2xl"
                          rounded="base"
                          _hover={{ bg: "gray.200" }}
                          p={2}
                        >
                          Crew
                        </Link>
                        <Link
                          fontWeight="semibold"
                          fontSize="2xl"
                          rounded="base"
                          _hover={{ bg: "gray.200" }}
                          p={2}
                        >
                          History
                        </Link>
                      </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                      <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                      </Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>

                <Image
                  boxSize={{ base: "40px", md: "60px" }}
                  src={napoliLogo}
                  alt="brand"
                  mr="8"
                />
                <Icon
                  as={FaWaze}
                  display={{ base: "none", md: "block" }}
                ></Icon>
                <InputGroup display={{ base: "none", md: "block" }}>
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
      </Box>
    </>
  );
}

export default Header;
