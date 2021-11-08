import React from "react";

import { Button } from "@chakra-ui/button";
import { Box, Container, Divider, Flex } from "@chakra-ui/layout";
import { FaWaze, FaSistrix } from "react-icons/fa";
import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Image } from "@chakra-ui/image";
import napoliLogo from "../assets/napoli-logo.jpeg";

function Header() {
  return (
    <>
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
                <Image boxSize="60px" src={napoliLogo} alt="brand" mr="8" />
                <Icon as={FaWaze}></Icon>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaSistrix color="gray.300" />}
                  />
                  <Input type="tel" placeholder="Search..." />
                </InputGroup>
              </Flex>
            </Box>

            <Box>
              <Button pr={3} colorScheme="teal" fontSize="lg" variant="link">
                Log in
              </Button>
              <Button colorScheme="teal" fontSize="lg" variant="link">
                Sign up
              </Button>
            </Box>
          </Flex>
          <Divider mt="8"  />
        </header>
      </Container>
    </>
  );
}

export default Header;
