import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/layout";
import historyMember from "../assets/IMG_3607.JPG";
import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/image";
import Header from "./Header";
import { MotionBox, MotionHeading } from "../animations/variants";
import { PacmanLoader } from "react-spinners";

function History() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <Flex justifyContent="center" alignItems="center" height="100vh">
          <PacmanLoader color={"#2ABAF1"} loading={loading} size={50} />
        </Flex>
      ) : (
        <>
          <Header />
          <Box mt={20} mb={20}>
            <Container maxW="container.lg">
              <Divider />
            </Container>

            <Container maxW={"container.xl"} mt={10}>
              <Flex justifyContent="center" alignItems="center">
                <Heading
                  bgGradient="linear(to-r, red.500,  blue.600)"
                  bgClip="text"
                  fontWeight="extrabold"
                  id="History"
                >
                  History
                </Heading>
              </Flex>
            </Container>
            <Container maxW="container.sm" mt={10}>
              <Divider />
            </Container>
            <Container maxW="container.xl">
              <Flex
                alignItems="center"
                py="10"
                flexDirection={{
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                  base: "column",
                }}
              >
                <MotionBox>
                  <MotionHeading
                    bgGradient="linear(to-r, red.500,  blue.600)"
                    bgClip="text"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 2.5,
                    }}
                  >
                    <Box>
                      ???????????????????????????????????? SSC
                      NAPOLI????????????????????????????????????
                    </Box>
                  </MotionHeading>
                  <MotionBox
                    mt="6"
                    fontWeight="medium"
                    mb="6"
                    fontSize="xl"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 2.5,
                    }}
                  >
                    SSC NAPOLI???????????????????????????
                  </MotionBox>
                </MotionBox>

                <MotionBox
                  w="100%"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2.5 }}
                >
                  <Image
                    w="100%"
                    src={historyMember}
                    alt="members"
                    borderRadius="lg"
                    _hover={{ opacity: 0.9 }}
                  />
                </MotionBox>
              </Flex>
            </Container>
          </Box>
        </>
      )}
    </>
  );
}

export default History;
