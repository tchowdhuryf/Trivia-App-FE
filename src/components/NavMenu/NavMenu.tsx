// Styles import
import "./NavMenu.css";

interface NavMenuProps {
  children: React.ReactNode;
}

/**
 * `NavMenu` component that serves as a container for navigation menu items.
 * It is typically used inside the `NavBar` component.
 *
 * @param {NavMenuProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `NavMenu` component.
 */
const NavMenu: React.FC<NavMenuProps> = ({ children }) => {
  return <ul className="nav-menu">{children}</ul>;
};

export default NavMenu;
