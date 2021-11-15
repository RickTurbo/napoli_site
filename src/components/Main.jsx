import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/layout";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import napoliMember from "../assets/napoli-member.jpg";
import napoliRed from "../assets/napoli_red.jpg";

function Main() {
  return (
    <Box mt={10} id="home">
      <Container maxW="container.xl">
        <Flex
          w="100%"
          justifyContent="center"
          alignItems="center"
          position="relative"
          mt={16}
        >
          <Image
            w={{
              sm: "100%",
              md: "80%",
              lg: "80%",
              xl: "80%",
              base: "100%",
            }}
            src={napoliMember}
          ></Image>
          <Heading
            position="absolute"
            top="40%"
            left="20%"
            fontSize={{
              sm: "3xl",
              md: "6xl",
              lg: "9xl",
              xl: "9xl",
              base: "3xl",
            }}
            color="blue.200"
            fontWeight="extrabold"
            bgGradient="linear(to-r, cyan.100, blue.300,  blue.600)"
            bgClip="text"
          >
            SSC NAPOLI
          </Heading>
          <Heading
            position="absolute"
            top="65%"
            left="40%"
            fontSize={{
              sm: "2xl",
              md: "5xl",
              lg: "5xl",
              xl: "5xl",
              base: "2xl",
            }}
            color="blue.200"
            fontWeight="extrabold"
            bgGradient="linear(to-r, cyan.400, blue.300,  pink.200)"
            bgClip="text"
          >
            Players
          </Heading>
        </Flex>
        <Heading
          mb={20}
          textAlign="center"
          fontSize={{
            sm: "2xl",
            md: "4xl",
            lg: "4xl",
            xl: "4xl",
            base: "2xl",
          }}
        >
          イタリアのサッカーチーム SSC NAPOLIについて紹介します
        </Heading>
      </Container>
      <Container maxW="container.lg">
        <Divider />
        <Flex justifyContent="space-between" mt={20} mb={20}>
          <Button
            color="white"
            bgGradient="linear(to-r, cyan.400,   pink.400)"
            _hover={{ opacity: 0.8 }}
            size="lg"
            fontSize={{ base: "xl", md: "3xl" }}
            px={{ base: 6, md: 12 }}
          >
            <AnchorLink href="#players" offset="110">
              Players
            </AnchorLink>
          </Button>
          <Button
            color="white"
            bgGradient="linear(to-r, yellow.200,   green.400)"
            _hover={{ opacity: 0.8 }}
            size="lg"
            fontSize={{ base: "xl", md: "3xl" }}
            px={{ base: 6, md: 12 }}
          >
            Crew
          </Button>
          <Button
            color="white"
            bgGradient="linear(to-r, red.500,  blue.600)"
            _hover={{ opacity: 0.8 }}
            size="lg"
            fontSize={{ base: "xl", md: "3xl" }}
            px={{ base: 6, md: 12 }}
          >
            <AnchorLink href='#History' offset='110'>
            History
            </AnchorLink>
          </Button>
        </Flex>
        <Box>
          <Divider />
        </Box>
      </Container>

      <Container maxW="container.sm" mb={6}>
        <Flex alignItems="center" justifyContent="center" mt={14}>
          <Heading
            bgGradient="linear(to-r, cyan.400, blue.300,  pink.200)"
            bgClip="text"
            fontWeight="extrabold"
            id="players"
          >
            Players
          </Heading>
        </Flex>
        <Flex justifyContent="space-between" mt={6}>
          <AnchorLink href="#FW" offset="90">
            <Button colorScheme="blue" px={{ base: 4, md: 10 }}>
              FW
            </Button>
          </AnchorLink>
          <AnchorLink href="#MF" offset="100">
            <Button colorScheme="blue" px={{ base: 4, md: 10 }}>
              MF
            </Button>
          </AnchorLink>
          <AnchorLink href="#DF" offset="100">
            <Button colorScheme="blue" px={{ base: 4, md: 10 }}>
              DF
            </Button>
          </AnchorLink>
          <AnchorLink href="#GK" offset="100">
            <Button colorScheme="blue" px={{ base: 4, md: 10 }}>
              GK
            </Button>
          </AnchorLink>
        </Flex>
        <Flex mt={5} justifyContent="center">
          <Divider />
        </Flex>
      </Container>

      <Container maxW="container.xl">
        <Flex w="100%" justifyContent="center" alignItems="center">
          <Image w="80%" src={napoliRed}></Image>
        </Flex>
      </Container>
    </Box>
  );
}

export default Main;
