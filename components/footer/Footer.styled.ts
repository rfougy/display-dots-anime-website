import styled from "@emotion/styled";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: end;
  // margin-top: auto;

  height: 1.375rem
`;

export const SocialsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 0 auto;

  @media (max-width: 40em) {
    margin: 0 auto;
  }
`;

export const SocialsLink = styled.li`
  display: inline-block;
  padding: 0 0.75rem;
`;
