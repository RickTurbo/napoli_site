import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/layout";
import React from "react";

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
      <Container maxW='container.sm' mt={10}>
        <Divider />
      </Container>
      <Container maxW='container.xl'>
        
      </Container>
    </Box>
  );
}

export default History;
