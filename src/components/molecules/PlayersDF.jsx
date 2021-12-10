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
  MotionGrid,
  MotionHeading,
} from "../../animations/variants";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Rrahmani from "../../assets/Rrahmani.JPG";
import Koulybaly from "../../assets/Koulibaly.JPG";
import DiLorenzo from "../../assets/DiLorenzo.JPG";
import Mario from "../../assets/Mario.JPG";
import Malcuit from "../../assets/Malcuit.JPG";
import Ghoulam from "../../assets/Ghoulam.JPG";

export const PlayersDF = memo(() => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: [0.3],
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <MotionBox 
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={animationContainer}>
      <Flex>
        <MotionHeading
          color="blue.300"
          fontWeight="light"
          fontSize="6xl"
          id="DF"
          mt={8}
          variants={animationBounce}
        >
          DF
        </MotionHeading>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </MotionBox>
      </MotionGrid>
    </MotionBox>
  );
});
