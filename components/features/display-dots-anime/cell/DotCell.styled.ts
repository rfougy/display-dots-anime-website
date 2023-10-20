import styled from "@emotion/styled";
import { breakpoints } from "../../../../styles/theme";

export const Dot = styled.div`
  background: ${(props: any) => props.theme.primary};
  border-radius: 50%;
  display: inline-block;
  height: 0.425rem;
  margin: 0.085rem;
  opacity: ${({ isDeactivated }: { isDeactivated: boolean }) =>
    isDeactivated ? 0 : 1};
  width: 0.425rem;

  @media (max-width: ${breakpoints.sm}) {
    height: 0.25rem;
    margin: 0.05rem;
    width: 0.25rem;
  }

  @media (max-width: ${breakpoints.xs}) {
    height: 0.1rem;
    margin: 0.1rem;
    width: 0.1rem;
  }

  @media (max-width: ${breakpoints.xxs}) {
    height: 0.075rem;
    margin: 0.075rem;
    width: 0.075rem;
  }
`;
