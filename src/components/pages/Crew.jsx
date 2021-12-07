import { Box } from "@chakra-ui/layout";
import { memo } from "react";
import Header from "../Header";

export const Crew = memo(() => {
  return (
    <>
      <Header />
      <Box mt={40}>
        <p>クルーページです</p>
      </Box>
    </>
  );
});
