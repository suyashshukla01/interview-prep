export default function QuestionCard({ question, intention, answer }) {
  return (
    <div className="card" style={{ marginBottom: 14 }}>
      <p style={{ fontSize: 14, margin: '0 0 10px', lineHeight: 1.5 }}>{question}</p>
      <p style={{ fontSize: 12, color: 'var(--teal)', margin: '0 0 10px' }}>why they ask: {intention}</p>
      <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{answer}</p>
    </div>
  )
}
