// React imports
import  { ReactNode } from "react";

// Styles import
import "./NavBar.css";

interface NavBarProps {
  navMenu?: ReactNode;
}

/**
 * `NavBar` component that renders a navigation bar with an optional navigation menu.
 *
 * @param {NavBarProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `NavBar` component.
 */
const NavBar: React.FC<NavBarProps> = ({ navMenu }) => {
  return (
    <nav className="navbar">
      <div className="navbar-menu">{navMenu}</div>
    </nav>
  );
};

export default NavBar;
