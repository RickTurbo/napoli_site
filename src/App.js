
// import { Image } from '@chakra-ui/image';
// import { Box } from '@chakra-ui/layout';
import './App.css';
import Header from './components/Header';
import History from './components/History';
import Main from './components/Main';
// import imageBg from './assets/bg.svg'
import Players from './components/Players';

function App() {
  return (
  <>
  {/* <Box position="absolute" left="0" right="0"> */}
  <Header/>
  <Main/>
  <Players/>
  <History/>
  {/* </Box> */}
  {/* <Box
        position="relative"
        top="0"
        bottom="0"
        right="0"
        left="0"
        height="100vh"
        zIndex={-1}
      >
        <Image w="80%" m="auto" objectFit="cover" size="300" src={imageBg} />
      </Box> */}
  </>
  );
}

export default App;
