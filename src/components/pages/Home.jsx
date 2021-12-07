import { memo } from "react";
import Header from "../Header";
import Main from "../Main";

export const Home = memo(() => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
});
