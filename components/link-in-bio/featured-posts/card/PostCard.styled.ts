import { breakpoints } from "../../../../styles/theme";
import styled from "@emotion/styled";

export const ImageBox = styled.div`
  position: relative;

  min-height: 6.5rem;
  min-width: 6.5rem;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 6.5rem;
  width: 100%;
  padding: 0.75rem;

  background: ${(props: any) => props.theme.secondary};
`;

/**
 * @description webkit portion allows for ellipsis after reaching two lines of text
 * @see https://chipcullen.com/truncating-type-at-more-than-one-line/
 */
export const Title = styled.h2`
  display: inline-block;

  margin: 0;
  width: 100%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const Category = styled.div`
  cursor: cell !important;

  font-size: 0.625rem;

  color: ${(props: any) => props.theme.primary};
  background-color: ${(props: any) => props.theme.highlight};

  border: solid ${(props: any) => props.theme.highlight};
  border-radius: 2vh;

  width: fit-content;
  padding: 0.15rem 0.75rem;
`;

export const Box = styled.div`
  overflow: hidden;
  text-decoration: none;

  display: flex;
  flex-direction: row;

  height: 6.5rem;
  width: 100%;

  margin: auto;
  border: solid transparent;
  border-radius: 2vh;
  border-width: 0.075rem 0.1rem 0.075rem 0;

  background: padding-box,
    linear-gradient(
        90deg,
        ${(props: any) => props.theme.secondary} 27.5%,
        ${(props: any) => props.theme.primary} 100%
      )
      border-box;

  &:hover {
    div {
      background: ${(props: any) => props.theme.highlight};
    }

    ${Category} {
      background-color: ${(props: any) => props.theme.secondary};
      border: solid ${(props: any) => props.theme.secondary};
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    max-width: none;
  }
`;
