// Component imports
import AddQuestionForm from "../../components/AddQuestionForm/AddQuestionForm";

// Styles import
import "./AddQuestionPage.css";

/**
 * `AddQuestionPage` component that renders the `AddQuestionForm`
 * for creating a new trivia question.
 *
 * @returns {JSX.Element} The rendered `AddQuestionPage` component.
 */
const AddQuestionPage: React.FC = () => {
  return (
    <div className="add-question-page">
      <AddQuestionForm />
    </div>
  );
};

export default AddQuestionPage;
