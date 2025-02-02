import React from "react";
import "./NavMenu.css";

/**
 * Props for the `NavMenu` component.
 */
interface NavMenuProps {
  /**
   * Menu items to be displayed inside the navigation menu.
   * Typically consists of multiple `NavMenuItem` components.
   */
  children: React.ReactNode;
}

/**
 * `NavMenu` Component
 *
 * This component serves as a container for navigation menu items.
 * It is typically used inside the `NavBar` component.
 *
 * @component
 * @example
 * ```tsx
 * <NavMenu>
 *   <NavMenuItem href="/" label="Home" />
 *   <NavMenuItem href="/about" label="About" />
 * </NavMenu>
 * ```
 */
const NavMenu: React.FC<NavMenuProps> = ({ children }) => {
  return <ul className="nav-menu">{children}</ul>;
};

export default NavMenu;
