export default function PrepPlanItem({ day, focus, tasks }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 18 }}>
      <span className="mono" style={{ fontSize: 12, color: 'var(--accent)', width: 44, flexShrink: 0, paddingTop: 2 }}>
        day {day}
      </span>
      <div>
        <div style={{ fontSize: 14, marginBottom: 6 }}>{focus}</div>
        <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7 }}>
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
