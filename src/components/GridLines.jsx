const VERTICAL = [5, 11, 17, 31, 36, 52, 58, 63, 79, 85, 92]
const HORIZONTAL = [6, 12, 26, 31, 47, 53, 69, 74, 90]

function GridLines() {
  return (
    <svg
      className="grid-lines"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {VERTICAL.map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="100" vectorEffect="non-scaling-stroke" />
      ))}
      {HORIZONTAL.map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="100" y2={y} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  )
}

export default GridLines