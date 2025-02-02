import React from "react";
import "./NavMenuItem.css";

/**
 * Props for the `NavMenuItem` component.
 */
export interface NavMenuItemProps {
  /**
   * The URL to navigate to when the menu item is clicked.
   */
  href: string;

  /**
   * The text label displayed for the menu item.
   */
  label: string;
}

/**
 * `NavMenuItem` Component
 *
 * This component represents a single navigation menu item.
 * It is typically used inside the `NavMenu` component.
 *
 * @component
 * @example
 * ```tsx
 * <NavMenuItem href="/home" label="Home" />
 * ```
 */
const NavMenuItem: React.FC<NavMenuItemProps> = ({ href, label }) => {
  return (
    <li className="nav-menu-item">
      <a className="nav-menu-item__link" href={href}>
        {label}
      </a>
    </li>
  );
};

export default NavMenuItem;
