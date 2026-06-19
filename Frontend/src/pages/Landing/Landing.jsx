import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import './Landing.css'

const STEPS = [
  {
    n: '01',
    title: 'Upload your file',
    body: 'Drop in your resume, a short self description and the job description you are aiming for.'
  },
  {
    n: '02',
    title: 'We build your brief',
    body: 'The questions, the skill gaps and a day-by-day plan get put together against that job description.'
  },
  {
    n: '03',
    title: 'Walk in prepared',
    body: 'Review the report, practice the answers, and download a tailored resume before the call.'
  }
]

export default function Landing() {
  const { user } = useAuth()
  const primaryHref = user ? '/new' : '/register'

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">file no. 0419</span>
            <h1>Walk in already briefed.</h1>
            <p>
              Upload your resume and the job description. Get the questions, the gaps and a
              day-by-day plan before the real interview.
            </p>
            <div className="hero-actions">
              <Link to={primaryHref} className="btn btn-primary">
                Open your file
              </Link>
              {!user && (
                <Link to="/login" className="btn btn-ghost">
                  Sign in
                </Link>
              )}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-stamp">
              <span>87%</span>
              <small>match score</small>
            </div>
            <div className="hero-card">
              <div className="hero-card-line" style={{ width: '70%' }} />
              <div className="hero-card-line" style={{ width: '90%' }} />
              <div className="hero-card-line" style={{ width: '55%' }} />
              <div className="hero-card-line" style={{ width: '78%' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="how">
        <div className="container">
          <h2 className="how-heading">How it works</h2>
          <div className="how-grid">
            {STEPS.map((step) => (
              <div className="how-step" key={step.n}>
                <span className="mono how-step-n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <h2>Your next interview is already on the calendar.</h2>
          <Link to={primaryHref} className="btn btn-primary">
            Open your file
          </Link>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="container">Briefed — your file, before the room.</div>
      </footer>
    </>
  )
}
