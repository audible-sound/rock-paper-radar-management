import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  return (
    <main className="flex flex-row w-screen h-screen" data-theme="light">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
