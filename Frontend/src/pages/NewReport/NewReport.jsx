import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createInterviewReport } from '../../api/interview.api.js'
import Spinner from '../../components/ui/Spinner.jsx'
import './NewReport.css'

const MAX_FILE_SIZE = 3 * 1024 * 1024

export default function NewReport() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [file, setFile] = useState(null)
  const [selfDescription, setSelfDescription] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleFileChange = (e) => {
    const picked = e.target.files?.[0]
    if (!picked) return
    if (picked.type !== 'application/pdf') {
      setError('Resume must be a PDF file.')
      return
    }
    if (picked.size > MAX_FILE_SIZE) {
      setError('Resume must be under 3MB.')
      return
    }
    setError('')
    setFile(picked)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!file) {
      setError('Attach your resume as a PDF before opening the file.')
      return
    }
    if (!selfDescription.trim() || !jobDescription.trim()) {
      setError('Fill in both the self description and the job description.')
      return
    }

    const formData = new FormData()
    formData.append('resume', file)
    formData.append('selfDescription', selfDescription)
    formData.append('jobDescription', jobDescription)

    setSubmitting(true)
    try {
      const res = await createInterviewReport(formData)
      navigate(`/reports/${res.interviewReport._id}`)
    } catch (err) {
      setError(err?.response?.data?.message || 'Could not generate your report. Try again.')
      setSubmitting(false)
    }
  }

  if (submitting) {
    return (
      <div className="new-report-page">
        <div className="container new-report-loading">
          <Spinner size={32} />
          <p>opening your file and drafting the brief…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="new-report-page">
      <div className="container new-report-inner">
        <span className="eyebrow">new case file</span>
        <h1>Open a file</h1>
        <p>Give us your resume and the role you are aiming for. We will build the rest.</p>

        {error && <div className="form-error">{error}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="resume">Resume (PDF, up to 3MB)</label>
            <div className="file-drop" onClick={() => fileInputRef.current?.click()} role="button" tabIndex={0}>
              <strong>{file ? file.name : 'Click to attach your resume'}</strong>
              {file ? 'Click to replace' : 'PDF only'}
            </div>
            <input
              ref={fileInputRef}
              id="resume"
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>

          <div className="field">
            <label htmlFor="selfDescription">Self description</label>
            <textarea
              id="selfDescription"
              value={selfDescription}
              onChange={(e) => setSelfDescription(e.target.value)}
              placeholder="A few sentences about your background, strengths and what you're looking for."
            />
          </div>

          <div className="field">
            <label htmlFor="jobDescription">Job description</label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description you're preparing for."
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Open your file
          </button>
        </form>
      </div>
    </div>
  )
}
