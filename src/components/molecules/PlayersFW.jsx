import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Image,
} from "@chakra-ui/react";
import { memo, useEffect } from "react";
import {
  animationBounce,
  animationContainer,
  fadeInUp,
  MotionBox,
  MotionFlex,
  MotionGrid,
  MotionHeading,
} from "../../animations/variants";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Lozano from "../../assets/Lozano.JPG";
import Insigne from "../../assets/Insigne.PNG";
import Osimhen from "../../assets/Osimhen.JPG";
import Petagna from "../../assets/Petagna.JPG";
import Politano from "../../assets/Politano.JPG";
import Mertens from "../../assets/Mertens.JPG";


export const PlayersFW = memo(() => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: [0.1],
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return(
    <MotionBox
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={animationContainer}
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
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
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
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
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
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
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
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
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
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </MotionBox>
    </MotionGrid>
  </MotionBox>
  )
})