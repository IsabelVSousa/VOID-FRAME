const SETTINGS = ['1/125 s', 'f/2.8', 'ISO 400', '35 mm', 'WB 5600K', 'RAW']
const REPEAT = 3

function ExifGroup() {
  return (
    <div className="exif__group">
      {Array.from({ length: REPEAT }).flatMap((_, r) =>
        SETTINGS.map((setting) => (
          <span className="exif__item" key={`${r}-${setting}`}>
            <span className="exif__sep" />
            {setting}
          </span>
        ))
      )}
    </div>
  )
}

function ExifStrip() {
  return (
    <div className="exif" aria-hidden="true">
      <div className="exif__track">
        <ExifGroup />
        <ExifGroup />
      </div>
    </div>
  )
}

export default ExifStrip