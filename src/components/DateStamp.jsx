import { useState, useEffect } from 'react'

function pad(n) {
  return String(n).padStart(2, '0')
}

function formatStamp(date) {
  const yy = pad(date.getFullYear() % 100)
  const mm = pad(date.getMonth() + 1)
  const dd = pad(date.getDate())
  const hh = pad(date.getHours())
  const min = pad(date.getMinutes())
  return { day: `'${yy} ${mm} ${dd}`, time: `${hh}:${min}` }
}

function DateStamp() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const { day, time } = formatStamp(now)

  return (
    <div className="date-stamp" aria-hidden="true">
      <span>{day}</span>
      <span>{time}</span>
    </div>
  )
}

export default DateStamp