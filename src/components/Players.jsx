import React, { useEffect, useState } from "react";

import { Image } from "@chakra-ui/image";
import { Box, Container, Divider, Flex } from "@chakra-ui/layout";
import napoliRed from "../assets/napoli_red.jpg";

import {
  MotionButton,
  MotionContainer,
  MotionFlex,
  MotionHeading,
} from "../animations/variants";

import AnchorLink from "react-anchor-link-smooth-scroll";
import Header from "./Header";
import { PacmanLoader } from "react-spinners";
import { PlayersMF } from "./molecules/PlayersMF";
import { PlayersDF } from "./molecules/PlayersDF";
import { PlayersGK } from "./molecules/PlayersGK";
import { PlayersFW } from "./molecules/PlayersFW";

function Players() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Flex justifyContent="center" alignItems="center" height="100vh">
          <PacmanLoader color={"#2ABAF1"} loading={loading} size={50} />
        </Flex>
      ) : (
        <>
          <Box mb={40}>
            <Header />
          </Box>
          <Container maxW="container.sm" mb={6}>
            <MotionFlex alignItems="center" justifyContent="center" mt={14}>
              <MotionHeading
                bgGradient="linear(to-r, cyan.400, blue.300,  pink.200)"
                bgClip="text"
                fontWeight="extrabold"
                id="players"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2.5 }}
              >
                Players
              </MotionHeading>
            </MotionFlex>
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
          <MotionContainer
            maxW="container.xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2.5 }}
          >
            <Flex w="100%" justifyContent="center" alignItems="center">
              <Image w="80%" src={napoliRed}></Image>
            </Flex>
          </MotionContainer>

          <MotionContainer maxW="container.xl">
            <PlayersFW />

            <PlayersMF />

            <PlayersDF />

            <PlayersGK />
          </MotionContainer>
        </>
      )}
    </>
  );
}

export default Players;
