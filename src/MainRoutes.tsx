import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import { MovieDetails } from "./MovieDetails";

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};
