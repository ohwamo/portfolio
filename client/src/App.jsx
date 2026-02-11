import { Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Project from "./pages/admin/Project";
import Dashboard from "./pages/admin/Dashboard";
import Admin from "./pages/admin/Admin";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./componnets/AdminLayout";

function App() {
  return (
    <>
      {/* <AdminLayout /> */}
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="project" element={<Project />} />
          <Route path="create" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
