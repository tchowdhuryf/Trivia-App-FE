import React from "react";
import "./FormContainer.css";

/**
 * Props for the `FormContainer` component.
 */
interface FormContainerProps {
  /**
   * The title displayed at the top of the form.
   */
  title: string;

  /**
   * The status message displayed below the form.
   */
  statusMessage: string;

  /**
   * Function to handle form submission.
   *
   * @param e - The form submission event.
   */
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  /**
   * The text displayed on the submit button.
   */
  buttonText: string;

  /**
   * The content of the form, including input fields and other elements.
   */
  content: React.ReactNode;
}

/**
 * `FormContainer` Component
 *
 * This component serves as a wrapper for forms, providing a title, form structure,
 * submit button, and a status message. It accepts dynamic content as `content`
 * for flexibility in form design.
 *
 * @component
 * @example
 * ```tsx
 * <FormContainer
 *   title="User Registration"
 *   statusMessage="Please fill out all fields."
 *   onSubmit={(e) => { e.preventDefault(); console.log("Form submitted"); }}
 *   buttonText="Register"
 *   content={<input type="text" name="username" placeholder="Enter username" />}
 * />
 * ```
 */
const FormContainer: React.FC<FormContainerProps> = ({
  title,
  statusMessage,
  onSubmit,
  buttonText,
  content,
}) => {
  return (
    <div className="form-container">
      <h1 className="form-heading">{title}</h1>
      <form className="form-content" onSubmit={onSubmit}>
        {content}
        <button className="form-submit-button" type="submit">
          {buttonText}
        </button>
      </form>
      <p className="form-status-message">{statusMessage}</p>
    </div>
  );
};

export default FormContainer;
