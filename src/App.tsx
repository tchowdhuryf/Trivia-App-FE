// React Router imports
import { Route, Routes } from "react-router-dom";

// Component imports
import NavBar from "./components/NavBar/NavBar";
import NavMenu from "./components/NavMenu/NavMenu";
import NavMenuItem from "./components/NavMenuItem/NavMenuItem";
import PageTemplate from "./components/PageTemplate/PageTemplate";

// Page imports
import AddQuestionPage from "./pages/AddQuestionPage/AddQuestionPage";
import DeleteQuestionPage from "./pages/DeleteQuestionPage/DeleteQuestionPage";
import EditQuestionPage from "./pages/EditQuestionPage/EditQuestionPage";
import HomePage from "./pages/HomePage/HomePage";
import ScorePage from "./pages/ScorePage/ScorePage";
import TriviaPage from "./pages/TriviaPage/TriviaPage";

// Styles import
import "./App.css";

/**
 * The main application component that defines the structure and routing of the Trivia Game.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App(): JSX.Element {
  return (
    <PageTemplate
      navBar={
        <NavBar
          navMenu={
            <NavMenu>
              <div className="nav-menu-left">
                <NavMenuItem href="/" label="Home" />
              </div>
              <div className="nav-title">Trivia Game</div>
              <div className="nav-menu-right">
                <NavMenuItem href="/add-question" label="Add Question" />
                <NavMenuItem href="/edit-question" label="Edit Question" />
                <NavMenuItem href="/delete-question" label="Delete Question" />
              </div>
            </NavMenu>
          }
        />
      }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-question" element={<AddQuestionPage />} />
        <Route path="/edit-question" element={<EditQuestionPage />} />
        <Route path="/delete-question" element={<DeleteQuestionPage />} />
        <Route path="/score-page" element={<ScorePage />} />
        <Route path="/trivia" element={<TriviaPage />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </PageTemplate>
  );
}

export default App;
