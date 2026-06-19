import './ReportTabs.css'

const TABS = [
  { key: 'technical', label: 'Technical' },
  { key: 'behavioral', label: 'Behavioral' },
  { key: 'skillGaps', label: 'Skill gaps' },
  { key: 'prepPlan', label: 'Prep plan' }
]

export default function ReportTabs({ active, onChange }) {
  return (
    <div className="report-tabs" role="tablist" aria-label="Interview report sections">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          type="button"
          role="tab"
          aria-selected={active === tab.key}
          className={`report-tab ${active === tab.key ? 'is-active' : ''}`}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
