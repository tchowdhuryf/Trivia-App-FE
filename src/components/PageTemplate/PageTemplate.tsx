// Styles import
import "./PageTemplate.css";

interface PageTemplateProps {
  navBar?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * `PageTemplate` component that serves as the layout structure for the application.
 * It includes a navigation bar at the top and a main content area for routed pages.
 *
 * @param {PageTemplateProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `PageTemplate` component.
 */
const PageTemplate: React.FC<PageTemplateProps> = ({ navBar, children }) => {
  return (
    <div className="page-template">
      <header className="page-header">{navBar}</header>
      <main className="page-content">{children}</main>
    </div>
  );
};

export default PageTemplate;
