// Styles import
import "./NavMenuItem.css";

export interface NavMenuItemProps {
  href: string;
  label: string;
}

/**
 * `NavMenuItem` component that represents a single navigation menu item.
 * It is typically used inside the `NavMenu` component.
 *
 * @param {NavMenuItemProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `NavMenuItem` component.
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
