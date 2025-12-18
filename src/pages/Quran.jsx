import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  BookOpen, 
  Filter, 
  ChevronDown, 
  ChevronUp,
  Hash,
  Bookmark,
  Volume2,
  Share2,
  Moon,
  Star,
  Clock,
  Layers,
  Eye,
  Copy,
  Heart
} from "lucide-react";
import { quran } from "../components/data/quranData"; // укажи правильный путь

function toArabicNumber(num) {
  const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
  return String(num).split('').map(d => arabicDigits[parseInt(d)]).join('');
}

function getSurahType(id) {
  // Определение типа суры (Макканская/Мединская)
  if (!id) return "Unknown";
  const makkiSurahs = [50, 51, 52, 53, 54, 55, 56, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114];
  return makkiSurahs.includes(id) ? "Makki" : "Madani";
}

function getSurahColor(id) {
  if (!id || typeof id !== 'number') return "#1db954"; // значение по умолчанию
  
  const colors = [
    "#1db954", "#22d3ee", "#9333ea", "#f59e0b", "#ef4444", "#06b6d4",
    "#8b5cf6", "#10b981", "#f97316", "#ec4899", "#14b8a6", "#84cc16",
    "#f43f5e", "#6366f1", "#0ea5e9", "#a855f7", "#d946ef", "#fbbf24"
  ];
  return colors[(id - 1) % colors.length];
}

// Функция для безопасного извлечения компонентов цвета
function getColorComponents(color) {
  if (!color || typeof color !== 'string' || !color.startsWith('#')) {
    return { r: 29, g: 185, b: 84 }; // Значения по умолчанию для #1db954
  }
  
  try {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return { r, g, b };
  } catch (error) {
    return { r: 29, g: 185, b: 84 }; // Значения по умолчанию при ошибке
  }
}

export default function Quran() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [expandedSurahs, setExpandedSurahs] = useState({});
  const [bookmarks, setBookmarks] = useState({});
  const [filterType, setFilterType] = useState("all");
  const [showTranslation, setShowTranslation] = useState(false);

  const surahTypes = [
    { id: "all", name: "Все суры", icon: <BookOpen size={18} /> },
    { id: "makki", name: "Макканские", icon: <Moon size={18} /> },
    { id: "madani", name: "Мединские", icon: <Star size={18} /> },
    { id: "short", name: "Короткие", icon: <Clock size={18} /> },
  ];

  const filteredSurahs = Array.isArray(quran) ? quran.filter(surah => {
    if (!surah || !surah.name || !Array.isArray(surah.arabic)) return false;
    
    const matchesSearch = 
      surah.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.arabic.some(ayah => ayah && ayah.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (filterType === "all") return matchesSearch;
    
    const type = getSurahType(surah._id);
    if (filterType === "makki" && type === "Makki") return matchesSearch;
    if (filterType === "madani" && type === "Madani") return matchesSearch;
    if (filterType === "short" && surah.arabic.length < 30) return matchesSearch;
    
    return false;
  }) : [];

  const toggleSurah = (surahId) => {
    setExpandedSurahs(prev => ({
      ...prev,
      [surahId]: !prev[surahId]
    }));
  };

  const toggleBookmark = (surahId) => {
    setBookmarks(prev => ({
      ...prev,
      [surahId]: !prev[surahId]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(29, 185, 84, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#f1f5f9",
        position: "relative",
        overflow: "hidden",
        padding: "40px 20px",
      }}
    >
      {/* Декоративные элементы */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-10%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(29, 185, 84, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
      }} />
      
      <div style={{
        position: "absolute",
        bottom: "-20%",
        left: "-10%",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(80px)",
      }} />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Заголовок */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{
            textAlign: "center",
            marginBottom: "50px",
            padding: "0 20px",
          }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            padding: "14px 28px",
            borderRadius: "50px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            marginBottom: "30px",
          }}>
            <BookOpen size={18} color="#1db954" />
            <span style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
              color: "#94a3b8",
              textTransform: "uppercase",
            }}>
              Holy Quran
            </span>
            <Star size={18} color="#22d3ee" />
          </div>

          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: "800",
            lineHeight: "1.2",
            marginBottom: "20px",
            background: "linear-gradient(45deg, #1db954, #22d3ee, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            📖 Holy Quran
          </h1>
          
          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto 30px",
            opacity: "0.9",
            direction: "rtl",
            fontFamily: "'Noto Naskh Arabic', serif",
            lineHeight: "1.6",
          }}>
            القرآن الكريم - كلام الله المنزل على نبينا محمد ﷺ
          </p>

          {/* Поиск и фильтры */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              maxWidth: "800px",
              margin: "0 auto 40px",
            }}
          >
            {/* Поле поиска */}
            <div style={{
              position: "relative",
              marginBottom: "25px",
            }}>
              <Search 
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#94a3b8",
                }}
                size={20}
              />
              <input
                type="text"
                placeholder="Search surahs or ayahs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "18px 20px 18px 50px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  color: "#f1f5f9",
                  fontSize: "16px",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.08)";
                  e.target.style.borderColor = "rgba(29, 185, 84, 0.3)";
                }}
                onBlur={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              />
            </div>

            {/* Фильтры и настройки */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
              marginBottom: "20px",
            }}>
              {surahTypes.map((type) => (
                <motion.button
                  key={type.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilterType(type.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 20px",
                    background: filterType === type.id 
                      ? "linear-gradient(135deg, #1db954, #16a34a)" 
                      : "rgba(255, 255, 255, 0.05)",
                    border: "1px solid",
                    borderColor: filterType === type.id 
                      ? "rgba(29, 185, 84, 0.3)" 
                      : "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    color: filterType === type.id ? "#fff" : "#94a3b8",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {type.icon}
                  {type.name}
                </motion.button>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowTranslation(!showTranslation)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 20px",
                  background: showTranslation 
                    ? "linear-gradient(135deg, #9333ea, #7c3aed)" 
                    : "rgba(255, 255, 255, 0.05)",
                  border: "1px solid",
                  borderColor: showTranslation 
                    ? "rgba(147, 51, 234, 0.3)" 
                    : "rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  color: showTranslation ? "#fff" : "#94a3b8",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Eye size={18} />
                {showTranslation ? "Hide Translation" : "Show Translation"}
              </motion.button>
            </div>
          </motion.div>

          {/* Статистика */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <div style={{
              textAlign: "center",
              padding: "15px 25px",
              background: "rgba(255, 255, 255, 0.03)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              minWidth: "120px",
            }}>
              <div style={{
                fontSize: "28px",
                fontWeight: "700",
                background: "linear-gradient(45deg, #1db954, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {Array.isArray(quran) ? quran.length : 0}
              </div>
              <div style={{
                fontSize: "14px",
                color: "#94a3b8",
              }}>
                Total Surahs
              </div>
            </div>
            
            <div style={{
              textAlign: "center",
              padding: "15px 25px",
              background: "rgba(255, 255, 255, 0.03)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              minWidth: "120px",
            }}>
              <div style={{
                fontSize: "28px",
                fontWeight: "700",
                background: "linear-gradient(45deg, #9333ea, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {filteredSurahs.length}
              </div>
              <div style={{
                fontSize: "14px",
                color: "#94a3b8",
              }}>
                Showing
              </div>
            </div>
            
            <div style={{
              textAlign: "center",
              padding: "15px 25px",
              background: "rgba(255, 255, 255, 0.03)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              minWidth: "120px",
            }}>
              <div style={{
                fontSize: "28px",
                fontWeight: "700",
                background: "linear-gradient(45deg, #f59e0b, #ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                114
              </div>
              <div style={{
                fontSize: "14px",
                color: "#94a3b8",
              }}>
                Chapters
              </div>
            </div>
            
            <div style={{
              textAlign: "center",
              padding: "15px 25px",
              background: "rgba(255, 255, 255, 0.03)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              minWidth: "120px",
            }}>
              <div style={{
                fontSize: "28px",
                fontWeight: "700",
                background: "linear-gradient(45deg, #06b6d4, #0ea5e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {Array.isArray(quran) ? quran.reduce((total, surah) => total + (surah.arabic?.length || 0), 0) : 0}
              </div>
              <div style={{
                fontSize: "14px",
                color: "#94a3b8",
              }}>
                Total Ayahs
              </div>
            </div>
          </motion.div>
        </motion.header>

        {/* Список сур */}
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={filterType + searchQuery}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "25px",
              padding: "20px",
            }}
          >
            {filteredSurahs.length > 0 ? (
              filteredSurahs.map((surah) => {
                const surahId = surah._id || 1;
                const color = getSurahColor(surahId);
                const colorComponents = getColorComponents(color);
                
                return (
                  <motion.div
                    key={surah._id || surah.name}
                    variants={itemVariants}
                    whileHover="hover"
                    style={{
                      background: "linear-gradient(145deg, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.95))",
                      backdropFilter: "blur(12px)",
                      borderRadius: "22px",
                      overflow: "hidden",
                      boxShadow: `
                        0 10px 30px rgba(0, 0, 0, 0.3),
                        0 0 0 1px rgba(255, 255, 255, 0.05),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      position: "relative",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {/* Акцентная полоса */}
                    <div style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      right: "0",
                      height: "4px",
                      background: `linear-gradient(90deg, ${color}, transparent)`,
                    }} />

                    {/* Заголовок суры */}
                    <div 
                      style={{
                        padding: "25px",
                      }}
                      onClick={() => toggleSurah(surah._id)}
                    >
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "15px",
                      }}>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "15px",
                        }}>
                          <div style={{
                            width: "50px",
                            height: "50px",
                            background: `rgba(${colorComponents.r}, ${colorComponents.g}, ${colorComponents.b}, 0.15)`,
                            borderRadius: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "18px",
                            fontWeight: "700",
                            color: color,
                            border: `1px solid ${color}30`,
                          }}>
                            {surahId}
                          </div>
                          <div>
                            <h3 style={{
                              fontSize: "20px",
                              fontWeight: "700",
                              color: "#f8fafc",
                              marginBottom: "5px",
                            }}>
                              {surah.name || "Unknown Surah"}
                            </h3>
                            <div style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}>
                              <span style={{
                                fontSize: "12px",
                                fontWeight: "600",
                                color: color,
                                background: `rgba(${colorComponents.r}, ${colorComponents.g}, ${colorComponents.b}, 0.1)`,
                                padding: "4px 10px",
                                borderRadius: "20px",
                                border: `1px solid ${color}30`,
                              }}>
                                {getSurahType(surah._id)}
                              </span>
                              <span style={{
                                fontSize: "12px",
                                color: "#94a3b8",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                              }}>
                                <Layers size={12} />
                                {surah.arabic?.length || 0} آيات
                              </span>
                            </div>
                          </div>
                        </div>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(surah._id);
                            }}
                            style={{
                              background: "none",
                              border: "none",
                              color: bookmarks[surah._id] ? "#f59e0b" : "#94a3b8",
                              cursor: "pointer",
                              fontSize: "18px",
                            }}
                          >
                            <Bookmark size={18} fill={bookmarks[surah._id] ? "#f59e0b" : "transparent"} />
                          </motion.button>
                          {expandedSurahs[surah._id] ? (
                            <ChevronUp size={20} color="#94a3b8" />
                          ) : (
                            <ChevronDown size={20} color="#94a3b8" />
                          )}
                        </div>
                      </div>

                      {/* Арабское название */}
                      {surah.name && (
                        <div style={{
                          direction: "rtl",
                          textAlign: "right",
                          marginBottom: "15px",
                          padding: "15px",
                          background: "rgba(0, 0, 0, 0.2)",
                          borderRadius: "12px",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                        }}>
                          <p style={{
                            fontSize: "24px",
                            color: "#d0f0c0",
                            fontFamily: "'Noto Naskh Arabic', serif",
                            fontWeight: "600",
                            margin: "0",
                            lineHeight: "1.5",
                          }}>
                            {surah.name}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Аяты суры */}
                    <AnimatePresence>
                      {expandedSurahs[surah._id] && Array.isArray(surah.arabic) && surah.arabic.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            padding: "0 25px 25px 25px",
                            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <div style={{
                            maxHeight: "400px",
                            overflowY: "auto",
                            paddingRight: "10px",
                          }}>
                            <ul style={{ 
                              listStyle: "none", 
                              padding: 0, 
                              margin: 0,
                              display: "flex",
                              flexDirection: "column",
                              gap: "20px",
                            }}>
                              {surah.arabic.map((ayah, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  style={{
                                    textAlign: "right",
                                    padding: "20px",
                                    background: "rgba(255, 255, 255, 0.03)",
                                    borderRadius: "14px",
                                    border: "1px solid rgba(255, 255, 255, 0.05)",
                                  }}
                                >
                                  <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: "15px",
                                  }}>
                                    <div style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "10px",
                                    }}>
                                      <span style={{
                                        color: color,
                                        fontSize: "14px",
                                        fontWeight: "700",
                                        background: `rgba(${colorComponents.r}, ${colorComponents.g}, ${colorComponents.b}, 0.1)`,
                                        padding: "6px 12px",
                                        borderRadius: "20px",
                                        border: `1px solid ${color}30`,
                                      }}>
                                        آية {toArabicNumber(idx + 1)}
                                      </span>
                                    </div>
                                    <div style={{
                                      display: "flex",
                                      gap: "10px",
                                    }}>
                                      <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        style={{
                                          width: "32px",
                                          height: "32px",
                                          background: "rgba(29, 185, 84, 0.1)",
                                          border: "1px solid rgba(29, 185, 84, 0.3)",
                                          borderRadius: "8px",
                                          color: "#1db954",
                                          cursor: "pointer",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          fontSize: "14px",
                                        }}
                                      >
                                        <Volume2 size={14} />
                                      </motion.button>
                                      <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        style={{
                                          width: "32px",
                                          height: "32px",
                                          background: "rgba(147, 51, 234, 0.1)",
                                          border: "1px solid rgba(147, 51, 234, 0.3)",
                                          borderRadius: "8px",
                                          color: "#9333ea",
                                          cursor: "pointer",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          fontSize: "14px",
                                        }}
                                      >
                                        <Copy size={14} />
                                      </motion.button>
                                    </div>
                                  </div>
                                  
                                  <p style={{
                                    fontSize: "26px",
                                    color: "#f0fdf4",
                                    fontFamily: "'Noto Naskh Arabic', serif",
                                    fontWeight: "500",
                                    lineHeight: "1.8",
                                    margin: "0",
                                    direction: "rtl",
                                  }}>
                                    {ayah || ""}
                                  </p>

                                  {showTranslation && (
                                    <motion.div
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.2 }}
                                      style={{
                                        marginTop: "15px",
                                        padding: "15px",
                                        background: "rgba(29, 185, 84, 0.08)",
                                        borderRadius: "10px",
                                        borderLeft: "4px solid #1db954",
                                      }}
                                    >
                                      <p style={{
                                        color: "#c8e6c9",
                                        fontSize: "14px",
                                        lineHeight: "1.6",
                                        margin: "0",
                                        fontStyle: "italic",
                                      }}>
                                        Translation of the ayah will appear here...
                                      </p>
                                    </motion.div>
                                  )}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "80px 20px",
                }}
              >
                <div style={{
                  fontSize: "60px",
                  marginBottom: "20px",
                  opacity: "0.3",
                }}>
                  📖
                </div>
                <h3 style={{
                  fontSize: "24px",
                  color: "#94a3b8",
                  marginBottom: "10px",
                }}>
                  No surahs found
                </h3>
                <p style={{
                  color: "#64748b",
                }}>
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Футер */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            marginTop: "80px",
            textAlign: "center",
            padding: "40px 20px",
          }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "16px",
            padding: "20px 40px",
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(10px)",
            borderRadius: "50px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            marginBottom: "20px",
          }}>
            <span style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#94a3b8",
              letterSpacing: "0.5px",
            }}>
              © 2008-2025 Meda Islamic App • Holy Quran
            </span>
            <div style={{
              width: "5px",
              height: "5px",
              background: "#1db954",
              borderRadius: "50%",
            }} />
            <span style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#22d3ee",
            }}>
              {Array.isArray(quran) ? quran.reduce((total, surah) => total + (surah.arabic?.length || 0), 0) : 0} Ayahs
            </span>
          </div>
          
          <p style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#64748b",
            maxWidth: "600px",
            margin: "20px auto 0",
            lineHeight: "1.6",
            direction: "rtl",
            fontFamily: "'Noto Naskh Arabic', serif",
          }}>
            القرآن الكريم هو كلام الله المنزل على النبي محمد ﷺ، المتعبد بتلاوته، المنقول إلينا بالتواتر
          </p>
        </motion.footer>
      </div>

      {/* CSS анимации */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.95);
          }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        input:focus {
          outline: none;
        }
        
        /* Кастомный скроллбар */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #1db954, #22d3ee);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #16a34a, #0ea5e9);
        }
      `}</style>
    </div>
  );
}