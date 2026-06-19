import { useNavigate } from 'react-router-dom'
import './CaseFileRow.css'

function formatDate(value) {
  return new Date(value).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export default function CaseFileRow({ report }) {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      className="case-file-row"
      onClick={() => navigate(`/reports/${report._id}`)}
    >
      <div className="case-file-row-main">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
        </svg>
        <div>
          <div className="case-file-title">{report.title}</div>
          <div className="case-file-date mono">{formatDate(report.createdAt)}</div>
        </div>
      </div>
      <div className="case-file-row-meta">
        <span className="case-file-score mono">{Math.round(report.matchScore ?? 0)}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </div>
    </button>
  )
}
