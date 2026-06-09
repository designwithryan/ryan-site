import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { VideoBackground } from './components/VideoBackground'
import { Home } from './pages/Home'
import { Work } from './pages/Work'
import { Resume } from './pages/Resume'
import { Anaconda } from './pages/work/Anaconda'
import { Digitas } from './pages/work/Digitas'
import { MashreqBank } from './pages/work/MashreqBank'
import { Mirum } from './pages/work/Mirum'
import { ProTenders } from './pages/work/ProTenders'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <VideoBackground />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/anaconda" element={<Anaconda />} />
          <Route path="/work/digitas" element={<Digitas />} />
          <Route path="/work/mashreqbank" element={<MashreqBank />} />
          <Route path="/work/mirum" element={<Mirum />} />
          <Route path="/work/protenders" element={<ProTenders />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
