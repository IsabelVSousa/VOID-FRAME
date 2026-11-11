const VERTICAL = [
    // [x, desde y, hasta y], en porcentaje
    [6, 0, 100],
    [17, 0, 64],
    [31, 18, 100],
    [44, 0, 38],
    [58, 52, 100],
    [63, 0, 100],
    [79, 0, 76],
    [92, 0, 100],
]

const HORIZONTAL = [
    // [y, desde x, hasta x], en porcentaje
    [9, 0, 100],
    [22, 24, 100],
    [47, 0, 100],
    [58, 38, 88],
    [71, 0, 52],
    [86, 12, 100],
]

function GridLines() {
    return (
        <svg
            className="grid-lines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            {VERTICAL.map(([x, y1, y2], i) => (
                <line key={`v${i}`} x1={x} y1={y1} x2={x} y2={y2} vectorEffect="non-scaling-stroke" />
            ))}
            {HORIZONTAL.map(([y, x1, x2], i) => (
                <line key={`h${i}`} x1={x1} y1={y} x2={x2} y2={y} vectorEffect="non-scaling-stroke" />
            ))}
        </svg>
    )
}

export default GridLines