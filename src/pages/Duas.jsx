import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Moon, Star, BookOpen, Heart, Shield, Home, Utensils, Bed } from "lucide-react";

const duas = [
  {
    id: 1,
    name: "Дуа перед сном",
    arabic: "اللّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
    transliteration: "Allahumma bismika amutu wa ahya",
    translation: "О Аллах, с Твоим именем я умираю и оживаю.",
  },
  {
    id: 2,
    name: "Дуа после сна",
    arabic: "الْـحَمْـدُ للهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا",
    transliteration: "Alhamdu lillaahil-lathee ahyaanaa ba'da maa amaatanaa",
    translation: "Хвала Аллаху, Который оживил нас после смерти.",
  },
  {
    id: 3,
    name: "Дуа перед едой",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: "С именем Аллаха.",
  },
  {
    id: 4,
    name: "Дуа после еды",
    arabic: "الْـحَمْـدُ للهِ الَّذِي أَطْعَمَنِي وَسَقَانِي",
    transliteration: "Alhamdu lillaahil-lathee at'amanee wasaqaanee",
    translation: "Хвала Аллаху, Который накормил и напоил меня.",
  },
  {
    id: 5,
    name: "Дуа при тревоге",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ...",
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan...",
    translation: "О Аллах, я прибегаю к Тебе от тревоги и печали…",
  },
  {
    id: 6,
    name: "Дуа при входе в дом",
    arabic: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا",
    transliteration: "Bismillahi walajna wa bismillahi kharajna",
    translation: "С именем Аллаха мы вошли, и с именем Аллаха мы вышли.",
  },
  {
    id: 7,
    name: "Дуа при выходе из дома",
    arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ",
    transliteration: "Bismillahi tawakkaltu 'ala Allah",
    translation: "С именем Аллаха, я полагаюсь на Аллаха.",
  },
  {
    id: 8,
    name: "Дуа при входе в мечеть",
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahumma iftah li abwaba rahmatik",
    translation: "О Аллах, открой мне врата Твоей милости.",
  },
  {
    id: 9,
    name: "Дуа при выходе из мечети",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    transliteration: "Allahumma inni as'aluka min fadlik",
    translation: "О Аллах, я прошу у Тебя Твоей милости.",
  },
  {
    id: 10,
    name: "Дуа при грусти",
    arabic: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ",
    transliteration: "Hasbiyallahu la ilaha illa Huwa",
    translation: "Достаточно мне Аллаха. Нет божества, кроме Него.",
  },
  {
    id: 11,
    name: "Дуа при входе в туалет",
    arabic: "اللَّهُ أَجْرَكَ مِنَ الْخَبَثِ وَالْخَبَائِثِ",
    transliteration: "Allah ajrak minal khabathi walkhaba’ith",
    translation: "Пусть Аллах вознаградит тебя за избавление от нечистот мужских и женских.",
  },
  {
    id: 12,
    name: "Дуа при выходе из туалета",
    arabic: "غُفْرَانَكَ",
    transliteration: "Ghufranak",
    translation: "Прошу у Тебя прощения.",
  },
  {
    id: 13,
    name: "Дуа перед учебой",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni ilma",
    translation: "Господи, прибавь мне знания.",
  },
  {
    id: 14,
    name: "Дуа для защиты от зла",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'udhu bikalimatillahi tammati min sharri ma khalaq",
    translation: "Прибегаю к совершенным словам Аллаха от зла того, что Он создал.",
  },
  {
    id: 15,
    name: "Дуа перед сном (альтернативное)",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya",
    translation: "С Твоим именем, о Аллах, умираю и живу.",
  },
  {
    id: 16,
    name: "Дуа при встрече с кем-то",
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
    transliteration: "Assalamu ‘alaykum wa rahmatullahi wa barakatuh",
    translation: "Мир вам, милость Аллаха и Его благословения.",
  },
  {
    id: 17,
    name: "Дуа при расставании",
    arabic: "أَنتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيفَةُ فِي الْأَهْلِ",
    transliteration: "Antas-sahibu fis-safari wal-khalifatu fil-ahli",
    translation: "Ты — спутник в пути и хранитель дома.",
  },
  {
    id: 18,
    name: "Дуа при болезнях",
    arabic: "اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي",
    transliteration: "Allahumma rabban-naas adhhib al-ba’sa ishfi anta ash-shafi",
    translation: "О Аллах, Господь людей, убери болезнь, исцели, Ты — Исцеляющий.",
  },
  {
    id: 19,
    name: "Дуа при страхе",
    arabic: "اللَّهُمَّ إني أعوذ بك من الخوف",
    transliteration: "Allahumma inni a'udhu bika min al-khawf",
    translation: "О Аллах, я прибегаю к Тебе от страха.",
  },
  {
    id: 20,
    name: "Дуа благодарности",
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    transliteration: "Alhamdu lillahi rabbil ‘alamin",
    translation: "Хвала Аллаху, Господу миров.",
  },
  {
    id: 21,
    name: "Дуа о прощении грехов",
    arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
    transliteration: "Rabbana dhalamna anfusana wa in lam taghfir lana wa tarhamna lanakoonanna minal khasireen",
    translation: "Господь наш! Мы сделали зло сами себе. Если Ты не простишь нам и не помилуешь нас, мы непременно окажемся в числе потерпевших убыток.",
  },
  {
    id: 22,
    name: "Дуа за здоровье и благополучие",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ العَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ",
    transliteration: "Allahumma inni as’aluka al-‘afiyata fid-dunya wal-akhirah",
    translation: "О Аллах, я прошу у Тебя здоровья и благополучия в этом мире и в будущем.",
  },
  {
    id: 23,
    name: "Дуа при страхе и тревоге",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
    transliteration: "Allahumma inni a’udhu bika minal hammi wal hazan",
    translation: "О Аллах, я прибегаю к Тебе от тревоги и печали.",
  },
  {
    id: 24,
    name: "Дуа при поиске правильного пути",
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    transliteration: "Ihdinas siratal mustaqim",
    translation: "Веди нас прямым путём.",
  },
  {
    id: 25,
    name: "Дуа за прощение и милость",
    arabic: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
    transliteration: "Rabbi ighfir warham wa anta khayru ar-rahimeen",
    translation: "Господи, прости и помилуй, ведь Ты — лучший из милосердных.",
  },
  {
    id: 26,
    name: "Дуа о благодарности",
    arabic: "اللَّهُمَّ لَكَ الْحَمْدُ كَمَا يَحِقُّ لِجَلَالِ وَجْهِكَ",
    transliteration: "Allahumma laka al-hamdu kama yahiqqu lijalali wajhika",
    translation: "О Аллах, хвала Тебе в той мере, как достойно величия Твоего Лика.",
  },
  {
    id: 27,
    name: "Дуа о защите от зла",
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ",
    transliteration: "Bismillahilladhi la yadurru ma’asmihi shay’un fil-ardi wa la fis-sama’i",
    translation: "С именем Аллаха, с Которым ничто не причинит вреда на земле и на небе.",
  },
  {
    id: 28,
    name: "Дуа для получения благословения",
    arabic: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي",
    transliteration: "Rabbi aj’alni muqimas-salat wa min dhurriyati",
    translation: "Господи, сделай меня и потомков моих постоянными в молитве.",
  },
  {
    id: 29,
    name: "Дуа о терпении",
    arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
    transliteration: "Rabbi awzi’ni an ashkura ni’mataka",
    translation: "Господи, помоги мне благодарить за Твои благословения.",
  },
  {
    id: 30,
    name: "Дуа за защиту от бед",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ، وَالْجُنُونِ، وَالْجُذَامِ، وَمِنْ سَيِّئِ الْأَسْقَامِ",
    transliteration: "Allahumma inni a’udhu bika minal barasi wal jununi wal judhami wa min sayyi’il asqam",
    translation: "О Аллах, я прибегаю к Тебе от проказы, безумия, лепры и плохих болезней.",
  },
  {
    id: 31,
    name: "Дуа о помощи и поддержке",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ نَصْرَكَ وَالْهُدَى وَالْفَتْحَ وَالْفَضْلَ وَالرَّحْمَةَ",
    transliteration: "Allahumma inni as’aluka nasraka wal-huda wal-fath wal-fadl war-rahmah",
    translation: "О Аллах, я прошу Твоей помощи, руководства, победы, милости и прощения.",
  },
  {
    id: 32,
    name: "Дуа при путешествии",
    arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى",
    transliteration: "Allahumma inna nas’aluka fi safarina hadha al-birra wat-taqwa",
    translation: "О Аллах, мы просим у Тебя в этом путешествии праведности и богобоязненности.",
  },
  {
    id: 33,
    name: "Дуа о мире и спокойствии",
    arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا",
    transliteration: "Rabbana afrigh ‘alayna sabran wa thabbit aqdamana",
    translation: "Господи, ниспошли нам терпение и утверди наши ноги.",
  },
  {
    id: 34,
    name: "Дуа о прощении родителей",
    arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ",
    transliteration: "Rabbi ighfir li waliwalidayya walil-mu’minin",
    translation: "Господи, прости меня, моих родителей и всех верующих.",
  },
  {
    id: 35,
    name: "Дуа о добром конце жизни",
    arabic: "اللَّهُمَّ اجْعَلْ خَيْرَ عُمُرِي آخِرَهُ",
    transliteration: "Allahumma aj’al khayra ‘umri akhirahu",
    translation: "О Аллах, сделай конец моей жизни хорошим.",
  },
  
];

const categories = [
  { id: "all", name: "Все дуа", icon: <BookOpen size={20} /> },
  { id: "sleep", name: "Перед сном", icon: <Bed size={20} /> },
  { id: "food", name: "Еда", icon: <Utensils size={20} /> },
  { id: "protection", name: "Защита", icon: <Shield size={20} /> },
  { id: "home", name: "Дом", icon: <Home size={20} /> },
  { id: "health", name: "Здоровье", icon: <Heart size={20} /> },
];

export default function Duas() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredDuas = duas.filter(dua => {
    const matchesSearch = 
      dua.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dua.arabic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dua.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dua.translation.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === "all") return matchesSearch;
    
    // Простая логика категорий на основе ключевых слов
    const categoryKeywords = {
      sleep: ["сон", "спать", "sleep", "bed", "amutu", "أحي"],
      food: ["еда", "еды", "food", "eat", "еду", "طعام", "bismillah"],
      protection: ["защит", "protect", "evil", "зло", "аузу", "أعوذ"],
      home: ["дом", "home", "house", "вход", "выход", "мечеть"],
      health: ["здоров", "болезн", "health", "sick", "исцел", "شفاء"],
    };
    
    const keywords = categoryKeywords[selectedCategory] || [];
    const matchesCategory = keywords.some(keyword => 
      dua.name.toLowerCase().includes(keyword) ||
      dua.translation.toLowerCase().includes(keyword) ||
      dua.arabic.toLowerCase().includes(keyword)
    );
    
    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    },
    hover: {
      y: -6,
      scale: 1.02,
      boxShadow: "0 20px 40px -12px rgba(29, 185, 84, 0.25)",
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
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(29, 185, 84, 0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
      }} />
      
      <div style={{
        position: "absolute",
        bottom: "-20%",
        left: "-10%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(80px)",
      }} />

      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
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
            <Moon size={18} color="#1db954" />
            <span style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
              color: "#94a3b8",
              textTransform: "uppercase",
            }}>
              Daily Supplications
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
            📿 Duas Collection
          </h1>
          
          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto 30px",
            opacity: "0.9",
            direction: "rtl",
            fontFamily: "'Noto Naskh Arabic', serif",
            lineHeight: "1.6",
          }}>
            مجموعة أدعية من السنة النبوية - كنز للقلوب والأرواح
          </p>

          {/* Поиск и фильтры */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              maxWidth: "600px",
              margin: "0 auto 30px",
            }}
          >
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
                placeholder="Search duas by name or text..."
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

            {/* Категории */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 20px",
                    background: selectedCategory === category.id 
                      ? "linear-gradient(135deg, #1db954, #16a34a)" 
                      : "rgba(255, 255, 255, 0.05)",
                    border: "1px solid",
                    borderColor: selectedCategory === category.id 
                      ? "rgba(29, 185, 84, 0.3)" 
                      : "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    color: selectedCategory === category.id ? "#fff" : "#94a3b8",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {category.icon}
                  {category.name}
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
              gap: "30px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <div style={{
              textAlign: "center",
              padding: "15px 25px",
              background: "rgba(255, 255, 255, 0.03)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}>
              <div style={{
                fontSize: "28px",
                fontWeight: "700",
                background: "linear-gradient(45deg, #1db954, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {duas.length}
              </div>
              <div style={{
                fontSize: "14px",
                color: "#94a3b8",
              }}>
                Total Duas
              </div>
            </div>
            
            <div style={{
              textAlign: "center",
              padding: "15px 25px",
              background: "rgba(255, 255, 255, 0.03)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}>
              <div style={{
                fontSize: "28px",
                fontWeight: "700",
                background: "linear-gradient(45deg, #9333ea, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {filteredDuas.length}
              </div>
              <div style={{
                fontSize: "14px",
                color: "#94a3b8",
              }}>
                Showing
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
            key={selectedCategory + searchQuery}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "25px",
              padding: "20px",
            }}
          >
            {filteredDuas.length > 0 ? (
              filteredDuas.map((dua, index) => (
                <motion.div
                  key={dua.id}
                  variants={itemVariants}
                  whileHover="hover"
                  style={{
                    background: "linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))",
                    backdropFilter: "blur(12px)",
                    borderRadius: "22px",
                    padding: "28px",
                    boxShadow: `
                      0 8px 25px rgba(0, 0, 0, 0.25),
                      0 0 0 1px rgba(255, 255, 255, 0.05),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `,
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                  }}
                >
                  {/* Акцентный угол */}
                  <div style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, rgba(29, 185, 84, 0.2), transparent 50%)",
                    borderBottomLeftRadius: "22px",
                  }} />

                  {/* Номер */}
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    width: "36px",
                    height: "36px",
                    background: "rgba(29, 185, 84, 0.15)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#1db954",
                    border: "1px solid rgba(29, 185, 84, 0.3)",
                  }}>
                    {dua.id}
                  </div>

                  {/* Название */}
                  <h2 style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#f8fafc",
                    marginBottom: "20px",
                    paddingRight: "40px",
                    minHeight: "60px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                    {dua.name}
                  </h2>

                  {/* Арабский текст */}
                  <div style={{
                    background: "rgba(0, 0, 0, 0.25)",
                    padding: "22px",
                    borderRadius: "14px",
                    marginBottom: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    textAlign: "center",
                    minHeight: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <p style={{
                      fontSize: "28px",
                      direction: "rtl",
                      color: "#d0f0c0",
                      lineHeight: "1.8",
                      fontFamily: "'Noto Naskh Arabic', serif",
                      fontWeight: "500",
                      margin: "0",
                    }}>
                      {dua.arabic}
                    </p>
                  </div>

                  {/* Транслитерация */}
                  <div style={{
                    marginBottom: "16px",
                    padding: "12px 16px",
                    background: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "10px",
                    borderLeft: "3px solid rgba(147, 51, 234, 0.5)",
                  }}>
                    <p style={{
                      fontStyle: "italic",
                      color: "#a5d6a7",
                      fontSize: "15px",
                      lineHeight: "1.5",
                      opacity: "0.9",
                      margin: "0",
                    }}>
                      {dua.transliteration}
                    </p>
                  </div>

                  {/* Перевод */}
                  <div style={{
                    padding: "18px",
                    background: "rgba(29, 185, 84, 0.08)",
                    borderRadius: "12px",
                    borderLeft: "4px solid #1db954",
                    marginBottom: "10px",
                  }}>
                    <p style={{
                      color: "#c8e6c9",
                      lineHeight: "1.6",
                      fontSize: "15px",
                      margin: "0",
                    }}>
                      {dua.translation}
                    </p>
                  </div>

                  {/* Контекст использования */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "12px",
                    color: "#94a3b8",
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}>
                      <Heart size={14} color="#1db954" />
                      <span>Daily Prayer</span>
                    </div>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}>
                      <div style={{
                        width: "6px",
                        height: "6px",
                        background: "#1db954",
                        borderRadius: "50%",
                        animation: `pulse 2s infinite ${index * 0.1}s`,
                      }} />
                      <span>From Sunnah</span>
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
                  padding: "60px 20px",
                }}
              >
                <div style={{
                  fontSize: "60px",
                  marginBottom: "20px",
                  opacity: "0.3",
                }}>
                  📿
                </div>
                <h3 style={{
                  fontSize: "24px",
                  color: "#94a3b8",
                  marginBottom: "10px",
                }}>
                  No duas found
                </h3>
                <p style={{
                  color: "#64748b",
                }}>
                  Try changing your search or filter criteria
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
              © 2008-2025 Meda Islamic App • Daily Supplications
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
              {duas.length} Blessed Duas
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
            May Allah accept our supplications and grant us peace, health, and guidance in this life and the next.
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
          background: linear-gradient(45deg, #1db954, #22d3ee, #9333ea);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #16a34a, #0ea5e9, #7c3aed);
        }
      `}</style>
    </div>
  );
}