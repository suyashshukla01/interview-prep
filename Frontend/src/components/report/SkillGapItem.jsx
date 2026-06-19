const SEVERITY_LABEL = {
  low: 'low',
  medium: 'medium',
  high: 'high'
}

export default function SkillGapItem({ skill, severity }) {
  return (
    <div
      className="card"
      style={{
        marginBottom: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12
      }}
    >
      <span style={{ fontSize: 14 }}>{skill}</span>
      <span className={`badge badge-${severity}`}>{SEVERITY_LABEL[severity] ?? severity}</span>
    </div>
  )
}
