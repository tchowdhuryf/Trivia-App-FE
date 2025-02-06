// Component imports
import DeleteQuestionForm from "../../components/DeleteQuestionForm/DeleteQuestionForm";

// Styles import
import "./DeleteQuestionPage.css";

/**
 * `DeleteQuestionPage` component that renders the `DeleteQuestionForm`
 * for removing an existing trivia question.
 *
 * @returns {JSX.Element} The rendered `DeleteQuestionPage` component.
 */
const DeleteQuestionPage: React.FC = () => {
  return (
    <div className="delete-question-page">
      <DeleteQuestionForm />
    </div>
  );
};

export default DeleteQuestionPage;
