// Component imports
import EditQuestionForm from "../../components/EditQuestionForm/EditQuestionForm";

// Styles import
import "./EditQuestionPage.css";

/**
 * `EditQuestionPage` component that renders the `EditQuestionForm` for modifying an existing trivia question.
 *
 * @returns {JSX.Element} The rendered `EditQuestionPage` component.
 */
const EditQuestionPage: React.FC = () => {
  return (
    <div className="edit-question-page">
      <EditQuestionForm />
    </div>
  );
};

export default EditQuestionPage;
