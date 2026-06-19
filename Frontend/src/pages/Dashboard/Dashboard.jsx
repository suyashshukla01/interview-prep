import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllInterviewReports } from '../../api/interview.api.js'
import CaseFileRow from '../../components/dashboard/CaseFileRow.jsx'
import EmptyState from '../../components/ui/EmptyState.jsx'
import Spinner from '../../components/ui/Spinner.jsx'
import './Dashboard.css'

export default function Dashboard() {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getAllInterviewReports()
      .then((res) => setReports(res.interviewReports))
      .catch(() => setError('Could not load your case files. Try refreshing.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <span className="eyebrow">your case files</span>
            <h1>Dashboard</h1>
          </div>
          <Link to="/new" className="btn btn-primary">
            New report
          </Link>
        </div>

        <div className="dashboard-list card">
          {loading && (
            <div className="dashboard-state">
              <Spinner />
            </div>
          )}

          {!loading && error && <div className="form-error">{error}</div>}

          {!loading && !error && reports.length === 0 && (
            <EmptyState
              title="No case files yet"
              description="Open your first file to get a tailored set of questions and a prep plan."
              action={
                <Link to="/new" className="btn btn-primary">
                  Open your first file
                </Link>
              }
            />
          )}

          {!loading &&
            !error &&
            reports.map((report) => <CaseFileRow key={report._id} report={report} />)}
        </div>
      </div>
    </div>
  )
}
