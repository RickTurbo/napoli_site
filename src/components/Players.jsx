import React from "react";
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

function Players() {
  return (
    <>
      <Container maxW="container.xl">
        <Flex>
          <Heading color="blue.300" fontWeight="light" fontSize="6xl" id="FW">
            FW
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
          <Box>
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
                    >
                      Hirving Lozano 11
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
            id="MF"
            mt={8}
          >
            MF
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
          <Box>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
          <Box>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
          <Box>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Players;
