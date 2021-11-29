import { Image } from "@chakra-ui/image";
import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/layout";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import napoliMember from "../assets/napoli-member.jpg";
import napoliRed from "../assets/napoli_red.jpg";
import {
  MotionButton,
  MotionContainer,
  MotionHeading,
} from "../animations/variants";

function Main() {
  return (
    <Box mt={10} id="home">
      <MotionContainer
        maxW="container.xl"
        initial={{ opacity: 0, x: "200vh" }}
        animate={{ opacity: 1, x: "0" }}
        transition={{ delay: 1, duration: 2 }}
      >
        <Flex
          w="100%"
          justifyContent="center"
          alignItems="center"
          position="relative"
          mt={16}
        >
          <Image
            mt={{
              sm: "20px",
              md: "0",
              lg: "0",
              xl: "0",
              base: "20px",
            }}
            w={{
              sm: "100%",
              md: "80%",
              lg: "80%",
              xl: "80%",
              base: "100%",
            }}
            src={napoliMember}
          ></Image>
          <MotionHeading
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
            initial={{ opacity: 0, y: "-200vh" }}
            animate={{ opacity: 1, y: "0", rotate: 360 }}
            transition={{ delay: 2, duration: 3, type: "spring" }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            SSC NAPOLI
          </MotionHeading>
          {/* <Heading
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
          </Heading> */}
        </Flex>
        {/* <Heading
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
        </Heading> */}
      </MotionContainer>
      <Container maxW="container.lg" mt={16}>
        <Divider />
        <Flex justifyContent="space-between" mt={20} mb={20}>
          <MotionButton
            color="white"
            bgGradient="linear(to-r, cyan.400,   pink.400)"
            _hover={{ opacity: 0.9 }}
            size="lg"
            fontSize={{ base: "xl", md: "3xl" }}
            px={{ base: 6, md: 12 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
            }}
          >
            <AnchorLink href="#players" offset="110">
              Players
            </AnchorLink>
          </MotionButton>
          <MotionButton
            color="white"
            bgGradient="linear(to-r, yellow.200,   green.400)"
            _hover={{ opacity: 0.9 }}
            size="lg"
            fontSize={{ base: "xl", md: "3xl" }}
            px={{ base: 6, md: 12 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
            }}
          >
            Crew
          </MotionButton>
          <MotionButton
            color="white"
            bgGradient="linear(to-r, red.500,  blue.600)"
            _hover={{ opacity: 0.9 }}
            size="lg"
            fontSize={{ base: "xl", md: "3xl" }}
            px={{ base: 6, md: 12 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
            }}
          >
            <AnchorLink href="#History" offset="110">
              History
            </AnchorLink>
          </MotionButton>
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
            <MotionButton
              colorScheme="blue"
              px={{ base: 4, md: 10 }}
              whileHover={{
                scale: 1.1,
              }}
            >
              FW
            </MotionButton>
          </AnchorLink>
          <AnchorLink href="#MF" offset="100">
            <MotionButton
              colorScheme="blue"
              px={{ base: 4, md: 10 }}
              whileHover={{
                scale: 1.1,
              }}
            >
              MF
            </MotionButton>
          </AnchorLink>
          <AnchorLink href="#DF" offset="100">
            <MotionButton
              colorScheme="blue"
              px={{ base: 4, md: 10 }}
              whileHover={{
                scale: 1.1,
              }}
            >
              DF
            </MotionButton>
          </AnchorLink>
          <AnchorLink href="#GK" offset="100">
            <MotionButton
              colorScheme="blue"
              px={{ base: 4, md: 10 }}
              whileHover={{
                scale: 1.1,
              }}
            >
              GK
            </MotionButton>
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
