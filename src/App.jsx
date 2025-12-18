import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Surahs from "./pages/Surahs";
import Hadiths from "./pages/Hadith";   // <-- поправили путь
import Duas from "./pages/Duas";
import Tajwid from "./pages/tajwid";
import Quran from "./pages/Quran";
import { motion } from "framer-motion";


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white font-sans">
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Top Header */}
          <header className="w-full bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
              <h1 className="text-3xl font-extrabold text-white tracking-wide">تطبيق إسلامي</h1>

              <nav className="flex items-center gap-6 text-lg text-white">
                <Link to="/" className="hover:text-pink-300 transition flex items-center gap-2">🏠 <span className="hidden md:inline">الرئيسية</span></Link>
                <Link to="/Surahs" className="hover:text-pink-300 transition flex items-center gap-2">📖 <span className="hidden md:inline">السور</span></Link>
                <Link to="/Hadiths" className="hover:text-pink-300 transition flex items-center gap-2">🕋 <span className="hidden md:inline">حديث</span></Link>
                <Link to="/Duas" className="hover:text-pink-300 transition flex items-center gap-2">🙏 <span className="hidden md:inline">دعاء</span></Link>
                <Link to="/tajwid" className="hover:text-pink-300 transition flex items-center gap-2">🗣 <span className="hidden md:inline">التجويد</span></Link>
                <Link to="/quran" className="hover:text-pink-300 transition flex items-center gap-2">📖 <span className="hidden md:inline">القرآن الكريم</span></Link>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Surahs" element={<Surahs />} />
              <Route path="/Hadiths" element={<Hadiths />} />
              <Route path="/Duas" element={<Duas />} />
              <Route path="/tajwid" element={<Tajwid />} />
              <Route path="/quran" element={<Quran />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}
