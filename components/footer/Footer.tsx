import SocialsList from "../socials/socials-list/SocialsList";
import { socialsList } from "../../constants/socialsList";

import { Footer as Foot } from "./Footer.styled";

const Footer: React.FC = () => (
  <Foot>
    <SocialsList socials={socialsList} />
  </Foot>
);

export default Footer;
