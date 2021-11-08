import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Divider, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import napoliMember from "../assets/napoli-member.jpg";

function Main() {
  return (
    <Box>
      <Container maxW="container.xl">
        <Flex w="100%" justifyContent="center">
          <Image w="80%" src={napoliMember} position="relative"></Image>
        </Flex>
        <Heading mb={20} textAlign="center">
          イタリアのサッカーチーム　SSC　NAPOLIについて紹介します
        </Heading>
      </Container>
      <Container maxW="container.lg">
        <Divider />
        <Flex justifyContent='space-between' mt={20}  mb={20}>
        <Button colorScheme="blue" size='lg'>Players</Button>
        <Button colorScheme="blue" size='lg'>Crew</Button>
        <Button colorScheme="blue" size='lg'>History</Button>
        </Flex>
        <Box mb={40}>
          <Divider />
        </Box>
      </Container>
    </Box>
  );
}

export default Main;
