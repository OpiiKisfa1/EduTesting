import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AIPamatiPage from './pages/AIPamatiPage';
import RobloxStudioPage from './pages/RobloxStudioPage';
import ProgrammesanasPamatiPage from './pages/ProgrammesanasPamatiPage';
import MinecraftEducationPage from './pages/MinecraftEducationPage';
import DatorpratibaDrosibaPage from './pages/DatorpratibaDrosibaPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aipamati" element={<AIPamatiPage />} />
            <Route path="/robloxstudio" element={<RobloxStudioPage />} />
            <Route path="/programmesanaspamati" element={<ProgrammesanasPamatiPage />} />
            <Route path="/minecrafteducation" element={<MinecraftEducationPage />} />
            <Route path="/datorpratibaundrosiba" element={<DatorpratibaDrosibaPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App