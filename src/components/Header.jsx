import React from "react";

import { Button } from "@chakra-ui/button";
import { Box, Divider, Flex } from "@chakra-ui/layout";
import { FaWaze, FaSistrix } from "react-icons/fa";
import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Image } from "@chakra-ui/image";
import { useDisclosure } from "@chakra-ui/react";
import napoliLogo from "../assets/napoli-logo.jpeg";
import { HamburgerIcon } from "@chakra-ui/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MotionBox, MotionButton } from "../animations/variants";
import { MenuDrawer } from "./molecules/MenuDrawer";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <MotionBox
      position="fixed"
      top="0"
      zIndex={10}
      opacity="0.9"
      bg="gray.50"
      w="100%"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 3 }}
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
              <Box display={{ base: "block", md: "none" }} mr={4}>
                <Button ref={btnRef} onClick={onOpen}>
                  <HamburgerIcon />
                </Button>
              </Box>

              <MenuDrawer onClose={onClose} isOpen={isOpen} />

              <AnchorLink href="#home" offset="100">
                <Image
                  boxSize={{ base: "40px", md: "60px" }}
                  src={napoliLogo}
                  alt="brand"
                  mr="8"
                />
              </AnchorLink>

              <Icon as={FaWaze} display={{ base: "none", md: "block" }}></Icon>
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
            <AnchorLink href="#players" offset="100">
              <MotionButton
                pr={3}
                colorScheme="blue"
                fontSize="lg"
                variant="link"
                whileHover={{ scale: 1.2 }}
              >
                Players
              </MotionButton>
            </AnchorLink>
            <MotionButton
              pr={3}
              colorScheme="blue"
              fontSize="lg"
              variant="link"
              whileHover={{ scale: 1.2 }}
            >
              Crew
            </MotionButton>
            <MotionButton
              colorScheme="blue"
              fontSize="lg"
              variant="link"
              whileHover={{ scale: 1.2 }}
            >
              <AnchorLink href="#History" offset="100">
                History
              </AnchorLink>
            </MotionButton>
          </Box>
        </Flex>
        <Divider mt="4" />
      </header>
    </MotionBox>
  );
}

export default Header;
