import { Box, Flex } from "@chakra-ui/layout";
import { memo, useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import Header from "../Header";

export const Crew = memo(() => {
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
          <Box mt={40}>
            <p>クルーページです</p>
          </Box>
        </>
      )}
    </>
  );
});
