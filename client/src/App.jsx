import { Routes, Route } from "react-router-dom"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import Project from "./pages/Project"
import Dashboard from "./pages/admin/Dashboard"
import Admin from "./pages/admin/Admin"
import ProtectedRoute from "./routes/ProtectedRoute"
// import AdminLayout from "./componnets/AdminLayout"


function App() {
  

  return (
    <>
    {/* <AdminLayout /> */}
     <Routes>
    <Route path="/" element={<Login />} />

    <Route 
      path="/admin"
      element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
      }
    />
      <Route 
      path="/admin/project"
      element={
      <ProtectedRoute>
        <Project />
      </ProtectedRoute>
      }
    />

    </Routes>
    </>
  )
}

export default App
