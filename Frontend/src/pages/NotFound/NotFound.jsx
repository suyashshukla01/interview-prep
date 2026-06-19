import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '96px 16px'
      }}
    >
      <span className="eyebrow">file not found</span>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 28, margin: '12px 0 8px' }}>
        This case file doesn't exist.
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
        It may have been moved, or the link is off.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to safety
      </Link>
    </div>
  )
}
