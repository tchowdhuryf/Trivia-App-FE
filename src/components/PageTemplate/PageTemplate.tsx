import React from "react";
import "./PageTemplate.css";

/**
 * Props for the `PageTemplate` component.
 */
interface PageTemplateProps {
  /**
   * The navigation bar component, typically containing a `NavBar` with a `NavMenu`.
   */
  navBar?: React.ReactNode;

  /**
   * The main content of the page, typically rendered based on the current route.
   */
  children?: React.ReactNode;
}

/**
 * `PageTemplate` Component
 *
 * This component serves as the layout structure for the application.
 * It includes a navigation bar at the top and a main content area for routed pages.
 *
 * @component
 * @example
 * ```tsx
 * <PageTemplate navBar={<NavBar navMenu={<NavMenu />} />}>
 *   <HomePage />
 * </PageTemplate>
 * ```
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

