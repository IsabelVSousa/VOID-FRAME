const TICKS = 121
const LABELS = ['0.35', '0.5', '0.7', '1', '1.5', '2', '3', '5', '10', '∞']
const LABEL_EVERY = 12
const REACH = 0.06
const REST = 0.5

function influence(x, focus) {
    if (focus === null) return 0
    const d = x - focus
    return Math.exp(-(d * d) / (2 * REACH * REACH))
}

function tickSize(i) {
    if (i % LABEL_EVERY === 0) return 'long'
    if (i % (LABEL_EVERY / 2) === 0) return 'medium'
    return 'short'
}

function Ruler({ focus }) {
    const ticks = Array.from({ length: TICKS }, (_, i) => {
        const x = i / (TICKS - 1)
        const power = influence(x, focus) ** 1.5
        return { i, x, power, size: tickSize(i) }
    })

    return (
        <div className="ruler" aria-hidden="true">
            {ticks.map(({ i, x, power, size }) => (
                <span
                    key={i}
                    className={`ruler__tick ruler__tick--${size}`}
                    style={{
                        left: `${x * 100}%`,
                        opacity: 0.25 + power * 0.75,
                        transform: `scaleY(${1 + power * 1.5})`,
                    }}
                />
            ))}

            {ticks
                .filter(({ i }) => i % LABEL_EVERY === 0 && i / LABEL_EVERY < LABELS.length)
                .map(({ i, x, power }) => (
                    <span
                        key={`l${i}`}
                        className={`ruler__label ${power > 0.5 ? 'is-boxed' : ''}`}
                        style={{ left: `${x * 100}%` }}
                    >
                        {LABELS[i / LABEL_EVERY]}
                    </span>
                ))}

            <span
                className="ruler__marker"
                style={{ left: `${(focus ?? REST) * 100}%` }}
            />
        </div>
    )
}

export default Ruler