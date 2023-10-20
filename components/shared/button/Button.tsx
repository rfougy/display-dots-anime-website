import Link from "next/link";
import React from "react";
import { Button as ButtonStyled } from "./Button.styled";

const Button: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link href={href} legacyBehavior>
    <a href={href} target="_blank" rel="noreferrer">
      <ButtonStyled>{children}</ButtonStyled>
    </a>
  </Link>
);

export default Button;
