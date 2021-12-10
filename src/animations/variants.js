import { Button } from "@chakra-ui/button";
import { Box, Container, Flex, Grid, Heading } from "@chakra-ui/layout";
import { motion } from "framer-motion";

export const MotionButton = motion(Button);

export const MotionContainer = motion(Container);

export const MotionHeading = motion(Heading);

export const MotionBox = motion(Box);

export const MotionFlex = motion(Flex);

export const MotionGrid = motion(Grid);

export const easing = [0.6, -0.05, 0.01, 0.99];

export const animationContainer = {
  visible: {
    transition: {
      staggerChildren: 0.4,
      easing,
    },
  },
};

export const animationBounce = {
  hidden: {
    opacity:0,
    x: "-100vw",
  },
  visible: {
    x: 0,
    opacity:1,
    transition: {
      type: "spring",
      duration: 2,
      bounce: 0.3,
    },
  },
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
