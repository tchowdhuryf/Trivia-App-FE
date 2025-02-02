import "./App.css";
// Route Imports
import HomePage from "./pages/HomePage/HomePage";
import AddQuestionPage from "./pages/AddQuestionPage/AddQuestionPage";
import EditQuestionPage from "./pages/EditQuestionPage/EditQuestionPage";
import DeleteQuestionPage from "./pages/DeleteQuestionPage/DeleteQuestionPage";
// Component Imports
import PageTemplate from "./components/PageTemplate/PageTemplate";
import NavBar from "./components/NavBar/NavBar";
import NavMenu from "./components/NavMenu/NavMenu";
import NavMenuItem from "./components/NavMenuItem/NavMenuItem";
// React Imports
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <PageTemplate
      navBar={
        <NavBar
          navMenu={
            <NavMenu>
              <NavMenuItem href="/" label="Home" />
              <NavMenuItem href="/add-question" label="Add Question" />
              <NavMenuItem href="/edit-question" label="Edit Question" />
              <NavMenuItem href="/delete-question" label="Delete Question" />
            </NavMenu>
          }
        />
      }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-question" element={<AddQuestionPage />} />
        <Route path="/edit-question" element={<EditQuestionPage />} />
        <Route path="/delete-question" element={<DeleteQuestionPage />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </PageTemplate>
  );
}

export default App;
