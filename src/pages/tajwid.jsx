import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, Volume2, Eye, Music, Mic, Target, Zap, Filter, Hash } from "lucide-react";

const rules = [
  {
    id: 1,
    title: "Идгам (إدغام)",
    description:
      "Слияние — когда буква 'нун сакин' (نْ) или танвин встречается с одной из шести букв: ي, ر, م, ل, و, ن.",
    example_arabic: "مِن رَبِّهِمْ",
    transliteration: "min rabbihim",
    translation: "от их Господа",
    hint: "Буква 'нун' сливается с 'р', читается с удлинением.",
  },
  {
    id: 2,
    title: "Икляб (إقلاب)",
    description:
      "Преобразование — когда после 'нун сакин' или танвина идёт буква 'ب', нун превращается в 'мим' с губным звуком.",
    example_arabic: "أَنْبَأَهُم",
    transliteration: "anba-ahum",
    translation: "Он сообщил им",
    hint: "Нун превращается в мим перед ب.",
  },
  {
    id: 3,
    title: "Изхар (إظهار)",
    description:
      "Явное произношение 'нун сакин' и танвина перед буквами: ء، هـ، ع، ح، غ، خ.",
    example_arabic: "مِنْ عَذَابٍ",
    transliteration: "min ‘adhābin",
    translation: "от наказания",
    hint: "Нун читается отчётливо перед ‘айн.",
  },
  {
    id: 4,
    title: "Ихфа (إخفاء)",
    description:
      "Скрытие — если после 'нун сакин' или танвина идёт одна из 15 букв, звук читается носовым, между изхаром и идгамом.",
    example_arabic: "مِن ثَمَرَةٍ",
    transliteration: "min thamaratin",
    translation: "от плода",
    hint: "Нун не произносится отчётливо, читается носом.",
  },
  {
    id: 5,
    title: "Мадды (مد)",
    description:
      "Удлинение звука в чтении. Существует несколько видов мадды — таби‘и (естественный), мунфасиль (разделённый) и муталла (соединённый), с разной длительностью удлинения.",
    example_arabic: "قَالَ",
    transliteration: "qāla",
    translation: "Он сказал",
    hint: "Удлинение звука 'а' на 2, 4 или 6 гласных.",
  },
  {
    id: 6,
    title: "Гунна (غنة)",
    description:
      "Носовой звук, возникающий при чтении 'нун' и 'мим' с сукуном или танвином. Часто сопровождается удлинением.",
    example_arabic: "مَن يَعْمَلْ",
    transliteration: "man ya’mal",
    translation: "Кто действует",
    hint: "Носовое произношение на букве 'нун'.",
  },
  {
    id: 7,
    title: "Танвин (تنوين)",
    description:
      "Произношение двойного нуна в конце слова, но с изменениями по правилам идгам, икляб, ихфа и изхар.",
    example_arabic: "كِتَابٌ",
    transliteration: "kitābun",
    translation: "Книга",
    hint: "Правила чтения танвина зависят от следующей буквы.",
  },
  {
    id: 8,
    title: "Сукун (سكون)",
    description:
      "Отсутствие гласного звука на букве. Требует правильного чтения с остановкой или соединением с последующей буквой согласно правилам.",
    example_arabic: "مِنْ",
    transliteration: "min",
    translation: "от",
    hint: "Буква читается без гласного звука.",
  },
  {
    id: 9,
    title: "Тафхим (تفخيم)",
    description:
      "Утолщение (грубое произношение) звуков при чтении определённых букв, таких как ص، ض، ط، ظ، غ، ق، и خ.",
    example_arabic: "صَدَقَةٌ",
    transliteration: "ṣadaqatun",
    translation: "Садака",
    hint: "Буквы читаются с утолщением.",
  },
  {
    id: 10,
    title: "Таркийк (ترقيق)",
    description:
      "Мягкое, лёгкое произношение большинства букв арабского алфавита, противоположное тафхиму.",
    example_arabic: "بِسْمِ",
    transliteration: "bismi",
    translation: "С именем",
    hint: "Большинство букв читаются мягко.",
  },
];

export default function Tajwid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "Все правила", icon: <BookOpen size={18} /> },
    { id: "noon", label: "Нун и танвин", icon: <Target size={18} /> },
    { id: "madd", label: "Мадды", icon: <Music size={18} /> },
    { id: "pronounce", label: "Произношение", icon: <Mic size={18} /> },
  ];

  const filteredRules = rules.filter(rule => {
    const matchesSearch = 
      rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.example_arabic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.transliteration.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    
    const tabRules = {
      noon: ["идгам", "икляб", "изхар", "ихфа", "танвин", "нун"],
      madd: ["мадды", "мадд", "удлинение"],
      pronounce: ["гунна", "сукун", "тафхим", "таркийк", "произношение"],
    };
    
    const keywords = tabRules[activeTab] || [];
    const matchesTab = keywords.some(keyword => 
      rule.title.toLowerCase().includes(keyword) ||
      rule.description.toLowerCase().includes(keyword) ||
      rule.hint.toLowerCase().includes(keyword)
    );
    
    return matchesSearch && matchesTab;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 130,
        damping: 18
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const getRuleColor = (id) => {
    const colors = [
      "#1db954", "#22d3ee", "#9333ea", "#f59e0b", 
      "#ef4444", "#06b6d4", "#8b5cf6", "#10b981",
      "#f97316", "#ec4899"
    ];
    return colors[(id - 1) % colors.length];
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
        top: "-15%",
        right: "-15%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
      }} />
      
      <div style={{
        position: "absolute",
        bottom: "-20%",
        left: "-15%",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(22, 163, 74, 0.12) 0%, transparent 70%)",
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
            <Volume2 size={18} color="#9333ea" />
            <span style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
              color: "#94a3b8",
              textTransform: "uppercase",
            }}>
              Quranic Recitation Rules
            </span>
            <BookOpen size={18} color="#22d3ee" />
          </div>

          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: "800",
            lineHeight: "1.2",
            marginBottom: "20px",
            background: "linear-gradient(45deg, #9333ea, #22d3ee, #1db954)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            📖 Tajweed Rules
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
            أساسيات التجويد - فن قراءة القرآن الكريم كما أنزل
          </p>

          {/* Поиск и табы */}
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
                placeholder="Search tajweed rules..."
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
                  e.target.style.borderColor = "rgba(147, 51, 234, 0.3)";
                }}
                onBlur={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              />
            </div>

            {/* Табы */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "15px",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}>
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 24px",
                    background: activeTab === tab.id 
                      ? "linear-gradient(135deg, #9333ea, #7c3aed)" 
                      : "rgba(255, 255, 255, 0.05)",
                    border: "1px solid",
                    borderColor: activeTab === tab.id 
                      ? "rgba(147, 51, 234, 0.3)" 
                      : "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    color: activeTab === tab.id ? "#fff" : "#94a3b8",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </motion.button>
              ))}
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
                background: "linear-gradient(45deg, #9333ea, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {rules.length}
              </div>
              <div style={{
                fontSize: "14px",
                color: "#94a3b8",
              }}>
                Total Rules
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
                background: "linear-gradient(45deg, #1db954, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {filteredRules.length}
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
                10+
              </div>
              <div style={{
                fontSize: "14px",
                color: "#94a3b8",
              }}>
                Categories
              </div>
            </div>
          </motion.div>
        </motion.header>

        {/* Основной контент */}
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab + searchQuery}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
              gap: "25px",
              padding: "20px",
            }}
          >
            {filteredRules.length > 0 ? (
              filteredRules.map((rule, index) => (
                <motion.div
                  key={rule.id}
                  variants={itemVariants}
                  whileHover="hover"
                  style={{
                    background: "linear-gradient(145deg, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.95))",
                    backdropFilter: "blur(12px)",
                    borderRadius: "22px",
                    padding: "30px",
                    boxShadow: `
                      0 10px 30px rgba(0, 0, 0, 0.3),
                      0 0 0 1px rgba(255, 255, 255, 0.05),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `,
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                  }}
                >
                  {/* Акцентная полоса */}
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    height: "4px",
                    background: `linear-gradient(90deg, ${getRuleColor(rule.id)}, transparent)`,
                    borderTopLeftRadius: "22px",
                    borderTopRightRadius: "22px",
                  }} />

                  {/* Номер и иконка */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}>
                      <div style={{
                        width: "44px",
                        height: "44px",
                        background: `rgba(${parseInt(getRuleColor(rule.id).slice(1,3), 16)}, ${parseInt(getRuleColor(rule.id).slice(3,5), 16)}, ${parseInt(getRuleColor(rule.id).slice(5,7), 16)}, 0.15)`,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        fontWeight: "700",
                        color: getRuleColor(rule.id),
                        border: `1px solid ${getRuleColor(rule.id)}30`,
                      }}>
                        <Hash size={20} />
                      </div>
                      <div style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#94a3b8",
                        background: "rgba(255, 255, 255, 0.03)",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}>
                        Rule {rule.id}
                      </div>
                    </div>
                    <div style={{
                      fontSize: "24px",
                      opacity: "0.3",
                    }}>
                      📖
                    </div>
                  </div>

                  {/* Заголовок */}
                  <h2 style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "#f8fafc",
                    marginBottom: "16px",
                    lineHeight: "1.3",
                  }}>
                    {rule.title}
                  </h2>

                  {/* Арабское название */}
                  <div style={{
                    marginBottom: "20px",
                    padding: "12px 16px",
                    background: "rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                    borderLeft: "3px solid rgba(29, 185, 84, 0.5)",
                  }}>
                    <p style={{
                      fontSize: "18px",
                      direction: "rtl",
                      textAlign: "right",
                      color: "#d0f0c0",
                      fontFamily: "'Noto Naskh Arabic', serif",
                      fontWeight: "600",
                      margin: "0",
                    }}>
                      {rule.title}
                    </p>
                  </div>

                  {/* Описание */}
                  <div style={{
                    marginBottom: "25px",
                  }}>
                    <p style={{
                      color: "#cbd5e1",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      margin: "0 0 15px 0",
                    }}>
                      {rule.description}
                    </p>
                  </div>

                  {/* Пример */}
                  <div style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    padding: "20px",
                    borderRadius: "14px",
                    marginBottom: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "12px",
                      color: "#94a3b8",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}>
                      <Eye size={16} />
                      <span>Example in Quran</span>
                    </div>
                    
                    <p style={{
                      fontSize: "32px",
                      direction: "rtl",
                      textAlign: "center",
                      color: "#f0fdf4",
                      fontFamily: "'Noto Naskh Arabic', serif",
                      fontWeight: "600",
                      lineHeight: "1.8",
                      margin: "0 0 15px 0",
                      padding: "10px",
                      background: "rgba(0, 0, 0, 0.2)",
                      borderRadius: "8px",
                    }}>
                      {rule.example_arabic}
                    </p>
                    
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "15px",
                      marginTop: "15px",
                    }}>
                      <div style={{
                        padding: "12px",
                        background: "rgba(29, 185, 84, 0.08)",
                        borderRadius: "8px",
                        borderLeft: "3px solid #1db954",
                      }}>
                        <div style={{
                          fontSize: "12px",
                          color: "#94a3b8",
                          marginBottom: "5px",
                        }}>
                          Transliteration
                        </div>
                        <p style={{
                          color: "#a5d6a7",
                          fontSize: "15px",
                          fontWeight: "500",
                          margin: "0",
                          fontStyle: "italic",
                        }}>
                          {rule.transliteration}
                        </p>
                      </div>
                      
                      <div style={{
                        padding: "12px",
                        background: "rgba(147, 51, 234, 0.08)",
                        borderRadius: "8px",
                        borderLeft: "3px solid #9333ea",
                      }}>
                        <div style={{
                          fontSize: "12px",
                          color: "#94a3b8",
                          marginBottom: "5px",
                        }}>
                          Translation
                        </div>
                        <p style={{
                          color: "#d8b4fe",
                          fontSize: "15px",
                          margin: "0",
                        }}>
                          {rule.translation}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Подсказка */}
                  <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "16px",
                    background: "rgba(59, 130, 246, 0.08)",
                    borderRadius: "12px",
                    borderLeft: "4px solid #3b82f6",
                  }}>
                    <div style={{
                      minWidth: "32px",
                      height: "32px",
                      background: "rgba(59, 130, 246, 0.2)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      color: "#3b82f6",
                    }}>
                      💡
                    </div>
                    <div>
                      <div style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#94a3b8",
                        marginBottom: "5px",
                      }}>
                        Important Note
                      </div>
                      <p style={{
                        color: "#bfdbfe",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        margin: "0",
                      }}>
                        {rule.hint}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
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
                  No rules found
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
              © 2008-2025 Meda Islamic App • Tajweed Rules
            </span>
            <div style={{
              width: "5px",
              height: "5px",
              background: "#9333ea",
              borderRadius: "50%",
            }} />
            <span style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#22d3ee",
            }}>
              {rules.length} Rules of Recitation
            </span>
          </div>
          
          <p style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#64748b",
            maxWidth: "600px",
            margin: "20px auto 0",
            lineHeight: "1.6",
          }}>
            May Allah help us recite the Quran correctly and grant us understanding of His words.
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
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.8);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #9333ea, #22d3ee, #1db954);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7c3aed, #0ea5e9, #16a34a);
        }
      `}</style>
    </div>
  );
}