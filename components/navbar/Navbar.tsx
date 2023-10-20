import DefaultLayout from "./layouts/default/DefaultLayout";

const Navbar: React.FC<{
  toggleTheme: () => void;
}> = ({ toggleTheme }) => <DefaultLayout toggleTheme={toggleTheme} />;

export default Navbar;
