import NavMenu from "../../nav-menu/NavMenu";
import ThemeToggleButton from "../../../features/theme-toggle/ThemeToggleButton";
import NavLogo from "../../nav-logo/NavLogo";

import { LogoAndButtonsBox, FeaturesBox } from "./DefaultLayout.styled";
import { NavBox } from "../../Navbar.styled";

const DefaultLayout: React.FC<{
  toggleTheme: () => void;
}> = ({ toggleTheme }) => (
  <NavBox>
    <LogoAndButtonsBox>
      <NavLogo />
      <FeaturesBox>
        <ThemeToggleButton toggleTheme={toggleTheme} />
      </FeaturesBox>
    </LogoAndButtonsBox>
    <NavMenu />
  </NavBox>
);

export default DefaultLayout;
