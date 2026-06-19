import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { downloadResumePdf, getInterviewReportById } from '../../api/interview.api.js'
import ScoreStamp from '../../components/ui/ScoreStamp.jsx'
import Spinner from '../../components/ui/Spinner.jsx'
import ReportTabs from '../../components/report/ReportTabs.jsx'
import QuestionCard from '../../components/report/QuestionCard.jsx'
import SkillGapItem from '../../components/report/SkillGapItem.jsx'
import PrepPlanItem from '../../components/report/PrepPlanItem.jsx'
import './ReportView.css'

export default function ReportView() {
  const { interviewId } = useParams()
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('technical')
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError('')
    getInterviewReportById(interviewId)
      .then((res) => setReport(res.interviewReport))
      .catch(() => setError('This case file could not be found.'))
      .finally(() => setLoading(false))
  }, [interviewId])

  const handleDownload = async () => {
    setDownloading(true)
    try {
      const blob = await downloadResumePdf(interviewId)
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `resume_${interviewId}.pdf`
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
    } catch {
      setError('Could not generate the tailored resume. Try again.')
    } finally {
      setDownloading(false)
    }
  }

  if (loading) {
    return (
      <div className="report-state">
        <Spinner size={28} />
      </div>
    )
  }

  if (error || !report) {
    return (
      <div className="container">
        <div className="form-error" style={{ marginTop: 32 }}>{error || 'Case file not found.'}</div>
        <Link to="/dashboard" className="btn btn-ghost" style={{ marginTop: 16 }}>
          Back to dashboard
        </Link>
      </div>
    )
  }

  return (
    <div className="report-page">
      <div className="container">
        <span className="eyebrow">file no. {report._id.slice(-4)}</span>

        <div className="report-header">
          <ScoreStamp score={report.matchScore} />
          <h1>{report.title}</h1>
          <div className="report-header-actions">
            <button type="button" className="btn btn-ghost" onClick={handleDownload} disabled={downloading}>
              {downloading ? <Spinner size={14} /> : 'Download tailored resume'}
            </button>
          </div>
        </div>

        <ReportTabs active={activeTab} onChange={setActiveTab} />

        <div className="report-tab-panel">
          {activeTab === 'technical' &&
            (report.technicalQuestions ?? []).map((q, i) => <QuestionCard key={i} {...q} />)}

          {activeTab === 'behavioral' &&
            (report.behavioralQuestions ?? []).map((q, i) => <QuestionCard key={i} {...q} />)}

          {activeTab === 'skillGaps' &&
            (report.skillGaps ?? []).map((g, i) => <SkillGapItem key={i} {...g} />)}

          {activeTab === 'prepPlan' &&
            (report.preparationPlan ?? []).map((p, i) => <PrepPlanItem key={i} {...p} />)}
        </div>
      </div>
    </div>
  )
}
