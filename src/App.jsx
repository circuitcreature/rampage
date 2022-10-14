import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>

      </Route>
    </Routes>
  );
}