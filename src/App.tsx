import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import DownloadPage from './pages/DownloadPage';
import UpdatesPage from './pages/UpdatesPage';
import SecurityPage from './pages/SecurityPage';
import FAQPage from './pages/FAQPage';
import DocsPage from './pages/DocsPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/updates" element={<UpdatesPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
