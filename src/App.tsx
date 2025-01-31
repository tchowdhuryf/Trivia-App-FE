import "./App.css";
//Route Imports
import HomePage from "./pages/HomePage/HomePage";
import AddQuestionPage from "./pages/AddQuestionPage/AddQuestionPage";
import EditQuestionPage from "./pages/EditQuestionPage/EditQuestionPage";
import DeleteQuestionPage from "./pages/DeleteQuestionPage/DeleteQuestionPage";
//React Imports
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        {/* <Route path={"/trivia"} element={<Trivia />} /> */}
        <Route path={"/add-question"} element={<AddQuestionPage />} />
        <Route path={"/edit-question"} element={<EditQuestionPage />} />
        <Route path={"/delete-question"} element={<DeleteQuestionPage />} />
        <Route path={"*"} element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
