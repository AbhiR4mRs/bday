import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-pink-500 selection:text-white">
        <nav className="fixed w-full z-50 top-0 left-0 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Happy B'day Hidha! 🎉
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-pink-400 transition-colors">Home</Link>
              <Link to="/gallery" className="hover:text-pink-400 transition-colors">Gallery</Link>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
