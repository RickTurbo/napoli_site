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
// import Petagna from "../assets/Petagna.JPG";
// import Politano from "../assets/Politano.JPG";
// import Zielinski from "../assets/Zielinski.JPG";
// import Elmas from "../assets/Elmas.JPG";
// import Rrahmani from "../assets/Rrahmani.JPG";

function Players() {
  return (
    <>
      <Container maxW="container.xl">
        <Flex>
          <Heading color="blue.300" fontWeight="light" fontSize="6xl">
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
                      Hirving Lozano
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
                      Lorenzo Insigne
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
                      Victor Osimhen
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
