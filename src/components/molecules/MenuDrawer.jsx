import React from "react";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Link, Stack } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { memo } from "react";
import { FaSistrix, FaWaze } from "react-icons/fa";

export const MenuDrawer = memo((props) => {
  const {isOpen, onClose} = props
  const btnRef = React.useRef();
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontSize="3xl">Menu</DrawerHeader>

        <DrawerBody>
          <Icon as={FaWaze}></Icon>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaSistrix color="gray.300" />}
            />
            <Input type="text" placeholder="Search..." />
          </InputGroup>
          <Stack mt={10} as="nav">
            <Link
              fontWeight="semibold"
              fontSize="2xl"
              rounded="base"
              _hover={{ bg: "gray.200" }}
              p={2}
            >
              Players
            </Link>
            <Link
              fontWeight="semibold"
              fontSize="2xl"
              rounded="base"
              _hover={{ bg: "gray.200" }}
              p={2}
            >
              Crew
            </Link>
            <Link
              fontWeight="semibold"
              fontSize="2xl"
              rounded="base"
              _hover={{ bg: "gray.200" }}
              p={2}
            >
              History
            </Link>
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
});
