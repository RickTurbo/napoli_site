import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/layout";
import historyMember from "../assets/IMG_3607.JPG";
import React from "react";
import { Image } from "@chakra-ui/image";

function History() {
  return (
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
          py="20"
          flexDirection={{
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            base: "column",
          }}
        >
          <Box>
            <Heading
              bgGradient="linear(to-r, red.500,  blue.600)"
              bgClip="text"
            >
              <Box>
                イタリアのサッカーチーム SSC NAPOLIの歴史について紹介します
              </Box>
            </Heading>
            <Box mt="6" fontWeight="medium" mb="6" fontSize="xl">
              SSC NAPOLIの歴史を紹介します
            </Box>
          </Box>

          <Box w="100%">
            <Image
              w="100%"
              src={historyMember}
              alt="members"
              borderRadius="lg"
              _hover={{opacity:0.9}}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default History;
