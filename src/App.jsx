import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>

      {/* Main Content */}
      <div className="content">
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default App
