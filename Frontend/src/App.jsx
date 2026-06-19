import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import ProtectedRoute from './components/layout/ProtectedRoute.jsx'
import Landing from './pages/Landing/Landing.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import NewReport from './pages/NewReport/NewReport.jsx'
import ReportView from './pages/ReportView/ReportView.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new" element={<NewReport />} />
            <Route path="/reports/:interviewId" element={<ReportView />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}
