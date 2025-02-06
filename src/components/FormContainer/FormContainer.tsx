// Styles import
import "./FormContainer.css";

interface FormContainerProps {
  title: string;
  statusMessage: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  content: React.ReactNode;
}

/**
 * `FormContainer` component that serves as a wrapper for forms, providing a title,
 * structured form layout, a submit button, and a status message.
 *
 * @param {FormContainerProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `FormContainer` component.
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
