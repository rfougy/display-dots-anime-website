import type { GetStaticProps, NextPage } from "next";

import DisplayDotsCoordsProvider from "../context/DisplayDotsCoordsContext";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";
import Button from "../components/shared/button/Button";

import { Box, Buttons, Description, Margin } from "../styles/pages/Home.styled";

const Home: NextPage = () => {
  return (
    <>
      <DisplayDotsCoordsProvider>
        <Box>
          <Margin>
            <DisplayDotsAnime
              text="DISPLAY DOTS ANIME"
              includeRestartButton={true}
            />
          </Margin>
          <Description isIntroText>
            A React Animation Library for the Display Dots Interface.
          </Description>
          <br />
          <Description>
            Please refer to the links below for installation and information.
            <br />
            Thanks!
          </Description>
          <Buttons>
            <Button href="https://www.npmjs.com/package/display-dots-anime">
              NPM
            </Button>
            <Button href="https://github.com/rfougy/display-dots-anime/">
              GITHUB
            </Button>
          </Buttons>
        </Box>
      </DisplayDotsCoordsProvider>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metaTagInputs: {
        page: "home",
        title: "Display Dots Anime: A React Animation Library",
        description:
          "Welcome to Display Dots Anime, a React animation library for the Display Dots typeface.",
        isHomePage: true,
      },
      isDisplayDotsPage: true,
    },
  };
};
