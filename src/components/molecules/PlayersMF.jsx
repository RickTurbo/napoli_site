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

import Zielinski from "../../assets/Zielinski.JPG";
import Elmas from "../../assets/Elmas.JPG";
import Demme from "../../assets/Demme.JPG";
import Fabian from "../../assets/Fabian.JPG";
import Lobotka from "../../assets/Lobotka.JPG";
import Anguissa from "../../assets/Anguissa.JPG";

export const PlayersMF = memo(() => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: [0.18],
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
      variants={animationContainer}
    >
      <Flex>
        <MotionHeading
          color="blue.300"
          fontWeight="light"
          fontSize="6xl"
          id="MF"
          mt={8}
          variants={animationBounce}
        >
          MF
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
