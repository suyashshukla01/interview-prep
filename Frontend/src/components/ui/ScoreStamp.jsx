export default function ScoreStamp({ score = 0, size = 64 }) {
  return (
    <div className="score-stamp" style={{ width: size, height: size, fontSize: size * 0.24 }}>
      {Math.round(score)}%
    </div>
  )
}
