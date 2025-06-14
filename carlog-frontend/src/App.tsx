import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Auth />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
