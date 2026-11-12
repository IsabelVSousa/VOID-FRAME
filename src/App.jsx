import Header from './components/Header'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import ExifStrip from './components/ExifStrip'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExifStrip />
        <WorkGrid />
      </main>
    </>
  )
}

export default App