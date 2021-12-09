import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
} from "@chakra-ui/layout";
import Lozano from "../assets/Lozano.JPG";
import Insigne from "../assets/Insigne.PNG";
import Osimhen from "../assets/Osimhen.JPG";
import Petagna from "../assets/Petagna.JPG";
import Politano from "../assets/Politano.JPG";
import Mertens from "../assets/Mertens.JPG";
import Zielinski from "../assets/Zielinski.JPG";
import Elmas from "../assets/Elmas.JPG";
import Fabian from "../assets/Fabian.JPG";
import Rrahmani from "../assets/Rrahmani.JPG";
import Koulybaly from "../assets/Koulibaly.JPG";
import DiLorenzo from "../assets/DiLorenzo.JPG";
import Meret from "../assets/Meret.JPG";
import Ospina from "../assets/Ospina.JPG";
import Demme from "../assets/Demme.JPG";
import Anguissa from "../assets/Anguissa.JPG";
import Lobotka from "../assets/Lobotka.JPG";
import Mario from "../assets/Mario.JPG";
import Malcuit from "../assets/Malcuit.JPG";
import Ghoulam from "../assets/Ghoulam.JPG";
import napoliRed from "../assets/napoli_red.jpg";
import {
  animationBounce,
  // animationContainer,
  // fadeInLeft,
  // fadeInRight,
  fadeInUp,
  MotionBox,
  MotionButton,
  MotionContainer,
  MotionFlex,
  MotionGrid,
  MotionHeading,
} from "../animations/variants";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Header from "./Header";
import { PacmanLoader } from "react-spinners";

function Players() {
  const [loading, setLoading] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: [0.1],
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
          <MotionContainer
            maxW="container.xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2.5 }}
            // ref={ref}
            // initial="hidden"
            // animate={controls}
            // variants={fadeInRight}
          >
            <Flex w="100%" justifyContent="center" alignItems="center">
              <Image w="80%" src={napoliRed}></Image>
            </Flex>
          </MotionContainer>
          <MotionContainer
            maxW="container.xl"
            ref={ref}
            initial="hidden"
            animate={controls}
          >
            <MotionFlex>
              <MotionHeading
                color="blue.300"
                fontWeight="light"
                fontSize="6xl"
                id="FW"
                // variants={fadeInRight}
                variants={animationBounce}
              >
                FW
              </MotionHeading>
            </MotionFlex>
            <Box mb={8}>
              <Divider w={52} color="blue.300" />
            </Box>

            <MotionGrid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(3,1fr)",
                base: "repeat(1,1fr)",
              }}
              gap={6}
            >
              <MotionBox _hover={{ opacity: 0.9 }} variants={fadeInUp}>
                <Image w="100%" src={Lozano} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                          // eslint-disable-next-line react/jsx-no-duplicate-props
                          textAlign="center"
                          fontSize="xl"
                          // eslint-disable-next-line react/jsx-no-duplicate-props
                          fontWeight="extrabold"
                        >
                          Hirving Lozano 11
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex color="blue.300" justifyContent="center">
                        <Box pr="4">MEXICO</Box>
                        <Box pr="4">1995</Box>
                        <Box>07/30</Box>
                      </Flex>
                      <Box pt="4" color="blue.700">
                        あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </MotionBox>

              <MotionBox
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
                variants={fadeInUp}
              >
                <Image w="100%" src={Insigne} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Lorenzo Insigne 24
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </MotionBox>

              <MotionBox
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
                variants={fadeInUp}
              >
                <Image w="100%" src={Osimhen} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Victor Osimhen 9
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </MotionBox>

              <MotionBox
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
                variants={fadeInUp}
              >
                <Image w="100%" src={Petagna} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Andrea Petagna 37
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </MotionBox>

              <MotionBox
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
                variants={fadeInUp}
              >
                <Image w="100%" src={Politano} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Matteo Politano 21
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </MotionBox>

              <MotionBox
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
                variants={fadeInUp}
              >
                <Image w="100%" src={Mertens} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Dries Mertens 14
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </MotionBox>
            </MotionGrid>

            <Flex>
              <Heading
                color="blue.300"
                fontWeight="light"
                fontSize="6xl"
                id="MF"
                mt={8}
              >
                MF
              </Heading>
            </Flex>
            <Box mb={8}>
              <Divider w={52} color="blue.300" />
            </Box>
            <MotionGrid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(3,1fr)",
                base: "repeat(1,1fr)",
              }}
              gap={6}
            >
              <MotionBox _hover={{ opacity: 0.9 }} variants={fadeInUp}>
                <Image w="100%" src={Zielinski} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Piotr Zieliński 20
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </MotionBox>

              <Box
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
              >
                <Image w="100%" src={Elmas} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Elif Elmas 7
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>

              <Box
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
              >
                <Image w="100%" src={Fabian} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Fabian Ruiz 8
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
              >
                <Image w="100%" src={Demme} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Diego Demme 4
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
              >
                <Image w="100%" src={Anguissa} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          André-Frank Zambo Anguissa 99
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
              >
                <Image w="100%" src={Lobotka} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Stanislav Lobotka 68
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </MotionGrid>

            <Flex>
              <Heading
                color="blue.300"
                fontWeight="light"
                fontSize="6xl"
                id="DF"
                mt={8}
              >
                DF
              </Heading>
            </Flex>
            <Box mb={8}>
              <Divider w={52} color="blue.300" />
            </Box>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(3,1fr)",
                base: "repeat(1,1fr)",
              }}
              gap={6}
            >
              <Box _hover={{ opacity: 0.9 }}>
                <Image w="100%" src={Rrahmani} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Amir Rrahmani 13
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
              >
                <Image w="100%" src={Koulybaly} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Kalidou Koulibaly 26
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
              >
                <Image w="100%" src={DiLorenzo} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Giovanni Di Lorenzo 22
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
              >
                <Image w="100%" src={Mario} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Mario Rui 6
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
              >
                <Image w="100%" src={Malcuit} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Kévin Malcuit ２
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
              >
                <Image w="100%" src={Ghoulam} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Faouzi Ghoulam 31
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Grid>

            <Flex>
              <Heading
                color="blue.300"
                fontWeight="light"
                fontSize="6xl"
                id="GK"
                mt={8}
              >
                GK
              </Heading>
            </Flex>
            <Box mb={8}>
              <Divider w={52} color="blue.300" />
            </Box>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(3,1fr)",
                base: "repeat(1,1fr)",
              }}
              gap={6}
            >
              <Box _hover={{ opacity: 0.9 }}>
                <Image w="100%" src={Meret} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          Alex Meret 1
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box
                mt={{
                  sm: "10",
                  md: "0",
                  lg: "0",
                  xl: "0",
                  base: "10",
                }}
                _hover={{ opacity: 0.9 }}
              >
                <Image w="100%" src={Ospina} borderRadius="lg" />
                <Accordion allowToggle mt={5}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="bold"
                          color="blue.300"
                        >
                          David Ospina 25
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Grid>
          </MotionContainer>{" "}
        </>
      )}
    </>
  );
}

export default Players;
