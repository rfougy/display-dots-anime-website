import styled from "@emotion/styled";

export const CoverImage = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
`;

export const Content = styled.div`
  margin-top: 2.125rem;

  article {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 100%;
    text-align: left;
  }

  h2 {
    font-size: 1.25rem;
  }

  p {
    width: 100%;
    line-height: 175%;
  }

  a {
    text-decoration: underline;
    font-size: 0.875rem;
  }

  ul {
    list-style-type: disc;
    line-height: 150%;

    display: flex;
    flex-direction: column;
    width: 75%;
  }

  iframe {
    aspect-ratio: 16 / 9;
    height: 100%;
    width: 100%;
  }
`;

export const Box = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  max-width: 50rem;
`;

export const Divider = styled.div`
  height: 1px;
  background: ${(props: any) => props.theme.primary};
  margin: 2rem 0 3.5rem 0;
  opacity: 0.5;
`;
