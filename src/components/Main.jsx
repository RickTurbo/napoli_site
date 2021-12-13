import { Image } from "@chakra-ui/image";
import { Box, Container, Flex } from "@chakra-ui/layout";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useCallback } from "react";
import napoliMember from "../assets/napoli-member.jpg";

import {
  MotionBox,
  // fadeInRight,
  MotionButton,
  MotionContainer,
  MotionFlex,
  MotionHeading,
} from "../animations/variants";
import { useHistory } from "react-router";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

// const list = {
//   visible: {
//     opacity: 1,
//     transition: { when: "beforeChildren", staggerChildren: 0.3 },
//   },
//   hidden: { opacity: 0 },
// };

// const marqueeVariants = {
//   visible: {
//     x: [1200, -1200],
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 6,
//         ease: "linear",
//       },
//     },
//   },
// };

export const Name = {
  hidden: {
    y: 0,
  },
  visible: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

export const letter = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ...transition, type: "spring" ,bounce: 0.6,},
  },
};

const variantButton = {
  hidden: { opacity: 0, y: 180 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.6,
    },
  },
};

function Main() {
  const history = useHistory();

  const onClickPlayers = useCallback(() => history.push("/players"), [history]);
  const onClickHistory = useCallback(() => history.push("/history"), [history]);
  const onClickCrew = useCallback(() => history.push("/crew"), [history]);

  return (
    <Box mt={10} id="home">
      <MotionContainer
        maxW="container.xl"
        initial="hidden"
        animate="visible"
        // initial={{ opacity: 0, x: "200vh" }}
        // animate={{ opacity: 1, x: "0" }}
        // transition={{ delay: 1, duration: 2 }}
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
            // variants={letter}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          ></MotionHeading>

          <MotionHeading
            position="absolute"
            top="40%"
            left="20%"
            fontSize={{
              sm: "4xl",
              md: "7xl",
              lg: "9xl",
              xl: "9xl",
              base: "4xl",
            }}
            bgClip="text"
            color="blue.200"
            fontWeight="extrabold"
            bgGradient="linear(to-r, cyan.100, blue.300,  blue.600)"
          >
            <MotionFlex variants={Name}>
              <MotionBox variants={letter}>S</MotionBox>
              <MotionBox variants={letter}>S</MotionBox>
              <MotionBox variants={letter}>C</MotionBox>
              <MotionBox variants={letter} mr={10}></MotionBox>
              <MotionBox variants={letter}>N</MotionBox>
              <MotionBox variants={letter}>A</MotionBox>
              <MotionBox variants={letter}>P</MotionBox>
              <MotionBox variants={letter}>O</MotionBox>
              <MotionBox variants={letter}>L</MotionBox>
              <MotionBox variants={letter}>I</MotionBox>
            </MotionFlex>
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
        {/* <MotionHeading
          mb={10}
          textAlign="center"
          fontSize={{
            sm: "2xl",
            md: "4xl",
            lg: "4xl",
            xl: "4xl",
            base: "2xl",
          }}
          variants={marqueeVariants}
          animate="visible"
        >
          イタリアのサッカーチーム SSC NAPOLIについて紹介します
        </MotionHeading> */}
      </MotionContainer>
      <Container maxW="container.lg">
        {/* <Divider /> */}
        <Flex justifyContent="space-between">
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
            onClick={onClickPlayers}
            variants={variantButton}
            initial="hidden"
            animate="visible"
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
            onClick={onClickCrew}
            variants={variantButton}
            initial="hidden"
            animate="visible"
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
            onClick={onClickHistory}
            variants={variantButton}
            initial="hidden"
            animate="visible"
          >
            <AnchorLink href="#History" offset="110">
              History
            </AnchorLink>
          </MotionButton>
        </Flex>
        <Box>{/* <Divider /> */}</Box>
      </Container>
    </Box>
  );
}

export default Main;
