import React, { ReactNode } from "react";
import "./NavBar.css";

/**
 * Props for the NavBar component.
 */
interface NavBarProps {
  /**
   * Navigation menu component containing menu items.
   */
  navMenu?: ReactNode;
}

/**
 * `NavBar` Component
 *
 * This component renders a navigation bar with a navigation menu.
 *
 * @component
 * @example
 * ```tsx
 * <NavBar navMenu={<NavMenu />} />
 * ```
 */
const NavBar: React.FC<NavBarProps> = ({ navMenu }) => {
  return (
    <nav className="navbar">
      <div className="navbar-menu">{navMenu}</div>
    </nav>
  );
};

export default NavBar;
