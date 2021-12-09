import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./router/Router";
import { PacmanLoader } from "react-spinners";
import { Flex } from "@chakra-ui/layout";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Flex justifyContent='center' alignItems='center'  height='100vh'>
        <PacmanLoader
        color={"#2ABAF1"} loading={loading} size={100} />
        </Flex>
      ) : (
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
