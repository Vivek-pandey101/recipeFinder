import "./App.css";
import { Route, Routes } from "react-router-dom";
import RecipeDetail from "./pages/RecipeDetail";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <h1>Find your favourite recipe here</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}
export default App;
