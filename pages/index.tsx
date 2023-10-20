import type { GetStaticProps, NextPage } from "next";

import DisplayDotsCoordsProvider from "../context/DisplayDotsCoordsContext";
import DisplayDotsAnime from "../components/features/display-dots-anime/DisplayDotsAnime";
import Button from "../components/shared/button/Button";

import {
  Box,
  Description,
  Margin,
} from "../styles/pages/DisplayDotsPage.styled";

const Home: NextPage = () => {
  return (
    <>
      <DisplayDotsCoordsProvider>
        <Box>
          <Description isIntroText>
            Hi, my name is Riviere, and this is:
          </Description>
          <Margin>
            <DisplayDotsAnime
              text="DISPLAY DOTS ANIME"
              includeRestartButton={true}
            />
          </Margin>
          <Description>
            A React Animation Library
            <br />
            for the Display Dots Interface.
          </Description>
          <Button href="https://github.com/rfougy/display-dots-anime/">
            VISIT REPO
          </Button>
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
