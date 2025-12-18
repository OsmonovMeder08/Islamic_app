import React from "react";
import { motion } from "framer-motion";

  const hadiths = [
  {
    id: 1,
    name: "О намерении",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    transliteration: "Innama al-a'malu bin-niyāt wa innamā likulli imri'in mā nawā",
    translation: "Дела оцениваются по намерениям, и каждому человеку воздастся по его намерению.",
    source: "Сахих Бухари, 1",
  },
  {
    id: 2,
    name: "О доброте",
    arabic: "الدِّينُ النَّصِيحَةُ",
    transliteration: "Ad-dīn an-naṣīḥah",
    translation: "Религия — это искренний совет и доброта.",
    source: "Сахих Муслим, 55",
  },
  {
    id: 3,
    name: "О милосердии",
    arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ",
    transliteration: "Ar-rāḥimūna yarḥamuhumu ar-raḥmān",
    translation: "Милующие будут помилованы Милосердным.",
    source: "Сахих Бухари, 6015",
  },
  {
    id: 4,
    name: "О знании",
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    transliteration: "Ṭalabul ʿilmi farīḍatun ʿalā kulli muslim",
    translation: "Поиск знаний обязателен для каждого мусульманина.",
    source: "Ибн Маджа, 224",
  },
  {
    id: 5,
    name: "О чистоте",
    arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ",
    transliteration: "Aṭ-ṭuhūru shaṭru al-īmān",
    translation: "Чистота — половина веры.",
    source: "Сахих Муслим, 223",
  },
  {
    id: 6,
    name: "О хорошем слове",
    arabic: "الكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
    transliteration: "Al-kalimatu ṭ-ṭayyibatu ṣadaqah",
    translation: "Доброе слово — это садака (благотворительность).",
    source: "Сахих Бухари, 6034",
  },
  {
    id: 7,
    name: "О терпении",
    arabic: "الصَّبْرُ ضِيَاءٌ",
    transliteration: "Aṣ-ṣabru ḍiyāʾ",
    translation: "Терпение — это свет.",
    source: "Сахих Муслим, 2976",
  },
  {
    id: 8,
    name: "О прощении",
    arabic: "مَن لَا يَغْفِرْ لِلنَّاسِ لَا يَغْفِرِ اللَّهُ لَهُ",
    transliteration: "Man lā yaghfir linnās lā yaghfir allāhu lahu",
    translation: "Тот, кто не прощает людям, не будет прощён Аллахом.",
    source: "Сунан Ат-Тирмизи, 2032",
  },
  {
    id: 9,
    name: "О милосердии",
    arabic: "ارْحَمُوا مَن فِي الْأَرْضِ يَرْحَمْكُم مَن فِي السَّمَاءِ",
    transliteration: "Irḥamū man fil-arḍi yarḥamkum man fis-samāʾ",
    translation: "Проявляйте милосердие к тем, кто на земле, и Милосердный проявит милосердие к вам с небес.",
    source: "Сахих Муслим, 2318",
  },
  {
    id: 10,
    name: "О чистоте сердца",
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",
    transliteration: "Innamal a’malu binniyat",
    translation: "Дела оцениваются по намерениям.",
    source: "Сахих Бухари, 1",
  },
  {
    id: 11,
    name: "О искренности",
    arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ",
    transliteration: "Innamal mu’minuna ikhwa",
    translation: "Поистине, верующие — братья.",
    source: "Сахих Муслим, 2587",
  },
  {
    id: 12,
    name: "О улыбке",
    arabic: "تبسمك في وجه أخيك صدقة",
    transliteration: "Tabassumuka fee wajhi akheeka sadaqah",
    translation: "Твоя улыбка брату — это садака (благотворительность).",
    source: "Джами` ат-Тирмизи, 1956",
  },
  {
    id: 13,
    name: "О добрых делах",
    arabic: "خير الناس أنفعهم للناس",
    transliteration: "Khairun nas anfa’uhum linnas",
    translation: "Лучшие люди — те, кто приносит наибольшую пользу людям.",
    source: "Аль-Мударрис, хадис",
  },
  {
    id: 14,
    name: "О праведности",
    arabic: "إِنَّ اللهَ لا يَنظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    transliteration: "Inna Allaha la yanzuru ila suwarikum wa amwalikum walakin yanzuru ila qulubikum wa a’malikom",
    translation: "Воистину, Аллах не смотрит на ваши лица и имущество, но смотрит на ваши сердца и дела.",
    source: "Сахих Муслим, 2564",
  },
  {
    id: 15,
    name: "О щедрости",
    arabic: "السخاء لا يفقر",
    transliteration: "As-sakhaa' la yufqir",
    translation: "Щедрость не ведет к бедности.",
    source: "Сунан Ат-Тирмизи, 655",
  },
  {
    id: 15,
    name: "О намерении и искренности",
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    transliteration: "Innamal a'malu binniyyat wa innama likulli imri'in ma nawa",
    translation: "Дела оцениваются по намерениям, и каждому человеку воздастся по его намерению.",
    source: "Сахих Бухари, 1; Сахих Муслим, 1907",
  },
  {
    id: 16,
    name: "О милосердии и прощении",
    arabic: "مَنْ لاَ يَرْحَمُ لاَ يُرْحَمْ",
    transliteration: "Man la yarham la yurham",
    translation: "Кто не проявляет милосердия, к тому не проявляют милосердия.",
    source: "Сахих Бухари, 6015; Сахих Муслим, 2319",
  },
  {
    id: 17,
    name: "О доброте к родителям",
    arabic: "رِضَا اللهِ فِي رِضَا الْوَالِدِ وَسخْطُ اللهِ فِي سَخْطِ الْوَالِدِ",
    transliteration: "RidaAllahi fi rida alwalidi wa sukhtuAllahi fi sukhti alwalidi",
    translation: "Благоволение Аллаха в благоволении родителей, и гнев Аллаха — в гневе родителей.",
    source: "Тирмизи, 1899",
  },
  {
    id: 18,
    name: "О поиске знаний",
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    transliteration: "Talabul 'ilmi faridatun 'ala kulli muslim",
    translation: "Поиск знаний является обязанностью каждого мусульманина.",
    source: "Ибн Маджа, 224",
  },
  {
    id: 19,
    name: "О запрещении несправедливости",
    arabic: "لاَ يَزَالُ النَّاسُ بِخَيْرٍ مَا عَافَى النَّاسُ مِنْ كَيْدِهِمْ",
    transliteration: "La yazalu annasu bikhayrin ma 'afaa annasu min kaydihim",
    translation: "Люди будут в благе, пока избавляются от злых замыслов друг друга.",
    source: "Сахих Муслим, 182",
  },
  {
    id: 20,
    name: "О честности",
    arabic: "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ",
    transliteration: "Innas sidqa yahdi ila al-birr",
    translation: "Правда ведет к благочестию.",
    source: "Сахих Бухари, 6094",
  },
  {
    id: 21,
    name: "О справедливости",
    arabic: "إِنَّ الْعَدْلَ هُوَ الْمُسْتَقَامُ",
    transliteration: "Innal 'adla huwa al-mustaqam",
    translation: "Справедливость — это правильный путь.",
    source: "Сунан Абу Дауд, 2626",
  },
  {
    id: 22,
    name: "О благодарности",
    arabic: "مَن لَمْ يَشْكُرِ النَّاسَ لَمْ يَشْكُرِ اللَّهَ",
    transliteration: "Man lam yashkur annasa lam yashkur Allah",
    translation: "Кто не благодарит людей, тот не благодарит Аллаха.",
    source: "Тирмизи, 1954",
  },
  {
    id: 23,
    name: "О хороших словах",
    arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
    transliteration: "Al-kalimatu at-tayyibatu sadaqah",
    translation: "Доброе слово — это садака.",
    source: "Сахих Бухари, 6034",
  },
  {
    id: 24,
    name: "О контроле языка",
    arabic: "مَن كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    transliteration: "Man kana yu’minu billahi wal-yawmil akhir falyakul khayran aw liyasmut",
    translation: "Кто верит в Аллаха и в День Суда, пусть говорит хорошее или молчит.",
    source: "Сахих Бухари, 6136; Сахих Муслим, 47",
  },
  {
    id: 25,
    name: "О терпении",
    arabic: "الصَّبْرُ ضِيَاءٌ",
    transliteration: "As-sabru diya’",
    translation: "Терпение — свет.",
    source: "Сахих Муслим, 2976",
  },
  {
    id: 26,
    name: "О взаимопомощи",
    arabic: "الْمُسْلِمُ أَخُو الْمُسْلِمِ",
    transliteration: "Al-muslimu akhul muslim",
    translation: "Мусульманин — брат мусульманину.",
    source: "Сахих Бухари, 2443",
  },
  {
    id: 27,
    name: "О поклонении и добрых делах",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
    transliteration: "Innamal a’malu binniyat",
    translation: "Дела зависят от намерений.",
    source: "Сахих Бухари, 1",
  },
  {
    id: 28,
    name: "О справедливом суде",
    arabic: "لاَ يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ إِلَّا بِإِحْدَى ثَلاَثٍ",
    transliteration: "La yahillu damu imri’in muslimin illa bi ihda thalath",
    translation: "Не дозволено проливать кровь мусульманина, кроме как за три причины.",
    source: "Сахих Бухари, 6875",
  },
  {
    id: 29,
    name: "О покорности Аллаху",
    arabic: "لاَ يَنْفَعُ مَنْ لَا يَرْحَمُ",
    transliteration: "La yanfa’u man la yarham",
    translation: "Не принесёт пользы тот, кто не проявляет милосердия.",
    source: "Сахих Муслим, 2318",
  },
  {
    id: 30,
    name: "О благородстве",
    arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ",
    transliteration: "Innamal mu’minuna ikhwa",
    translation: "Поистине, верующие — братья.",
    source: "Сахих Муслим, 2587",
  },
  {
    id: 31,
    name: "О чистоте сердца",
    arabic: "الطُّهُورُ شَطْرُ الإِيْمَانِ",
    transliteration: "At-tuhuru shatru al-iman",
    translation: "Чистота — половина веры.",
    source: "Сахих Муслим, 223",
  },
  {
    id: 32,
    name: "О искренности",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
    transliteration: "Innamal a’malu binniyat",
    translation: "Дела зависят от намерений.",
    source: "Сахих Бухари, 1",
  },
  {
    id: 33,
    name: "О правде",
    arabic: "الْحَقُّ يُرْجِعُ النُّورَ",
    transliteration: "Al-haqqu yurji’u an-nur",
    translation: "Истина возвращает свет.",
    source: "Сунан Абу Дауд",
  },
  {
    id: 34,
    name: "О справедливости",
    arabic: "إِنَّ الْعَدْلَ هُوَ الْمُسْتَقَامُ",
    transliteration: "Innal 'adla huwa al-mustaqam",
    translation: "Справедливость — это правильный путь.",
    source: "Сунан Абу Дауд, 2626",
  },
  {
    id: 35,
    name: "О терпении",
    arabic: "الصَّبْرُ ضِيَاءٌ",
    transliteration: "As-sabru diya’",
    translation: "Терпение — свет.",
    source: "Сахих Муслим, 2976",
  },
  {
    id: 36,
    name: "О доброте",
    arabic: "الدِّينُ النَّصِيحَةُ",
    transliteration: "Ad-dinu an-nasiha",
    translation: "Религия — это искренний совет.",
    source: "Сахих Муслим, 55",
  },
  {
    id: 37,
    name: "О заботе о нуждающихся",
    arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ",
    transliteration: "Ma naqasat sadaqatun min mal",
    translation: "Садака не уменьшает имущества.",
    source: "Сахих Муслим, 2588",
  },
  {
    id: 38,
    name: "О благодарности",
    arabic: "مَن لَمْ يَشْكُرِ النَّاسَ لَمْ يَشْكُرِ اللَّهَ",
    transliteration: "Man lam yashkur annasa lam yashkur Allah",
    translation: "Кто не благодарит людей, тот не благодарит Аллаха.",
    source: "Тирмизи, 1954",
  },
  {
    id: 39,
    name: "О правдивости",
    arabic: "إِيَّاكَ وَالْكَذِبَ فَإِنَّهُ يُهْدِي إِلَى الْفُجُورِ",
    transliteration: "Iyyaka wal-kadhiba fa innahu yahdi ila al-fujur",
    translation: "Берегись лжи, ибо она ведёт к разврату.",
    source: "Сахих Бухари",
  },
];

export default function Hadiths() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
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
        top: "-20%",
        right: "-10%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(29, 185, 84, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(40px)",
      }} />
      
      <div style={{
        position: "absolute",
        bottom: "-30%",
        left: "-20%",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
      }} />

      <div
        style={{
          maxWidth: "1000px",
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
            marginBottom: "60px",
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
            <div style={{
              width: "10px",
              height: "10px",
              background: "#1db954",
              borderRadius: "50%",
              animation: "pulse 2s infinite",
            }} />
            <span style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
              color: "#94a3b8",
              textTransform: "uppercase",
            }}>
              Sacred Sayings
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: "800",
            lineHeight: "1.2",
            marginBottom: "20px",
            background: "linear-gradient(45deg, #1db954, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            📜 Prophetic Hadith Collection
          </h1>
          
          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "0 auto",
            opacity: "0.9",
            direction: "rtl",
            fontFamily: "'Noto Naskh Arabic', serif",
          }}>
            مجموعة أحاديث النبي ﷺ - كنز من الحكمة والإرشاد
          </p>
        </motion.header>

        {/* Основной контент */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            gap: "30px",
            padding: "20px",
          }}
        >
          {hadiths.map((hadith, index) => (
            <motion.div
              key={hadith.id}
              variants={itemVariants}
              whileHover="hover"
              style={{
                background: "linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))",
                backdropFilter: "blur(12px)",
                borderRadius: "24px",
                padding: "32px",
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
              {/* Номер хадиса */}
              <div style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "40px",
                height: "40px",
                background: "rgba(29, 185, 84, 0.15)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: "700",
                color: "#1db954",
                border: "1px solid rgba(29, 185, 84, 0.3)",
              }}>
                {hadith.id}
              </div>

              {/* Иконка */}
              <div style={{
                width: "50px",
                height: "50px",
                background: "linear-gradient(135deg, rgba(29, 185, 84, 0.2), rgba(147, 51, 234, 0.2))",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                marginBottom: "20px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}>
                📜
              </div>

              {/* Название */}
              <h2 style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#f8fafc",
                marginBottom: "16px",
                paddingRight: "50px",
              }}>
                {hadith.name}
              </h2>

              {/* Арабский текст */}
              <div style={{
                background: "rgba(0, 0, 0, 0.2)",
                padding: "20px",
                borderRadius: "16px",
                marginBottom: "20px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}>
                <p style={{
                  fontSize: "28px",
                  direction: "rtl",
                  textAlign: "right",
                  color: "#d0f0c0",
                  lineHeight: "1.6",
                  fontFamily: "'Noto Naskh Arabic', serif",
                  fontWeight: "500",
                  margin: "0",
                }}>
                  {hadith.arabic}
                </p>
              </div>

              {/* Транслитерация */}
              <p style={{
                fontStyle: "italic",
                color: "#a5d6a7",
                marginBottom: "16px",
                fontSize: "15px",
                lineHeight: "1.5",
                opacity: "0.9",
              }}>
                {hadith.transliteration}
              </p>

              {/* Перевод */}
              <div style={{
                padding: "18px",
                background: "rgba(29, 185, 84, 0.08)",
                borderRadius: "12px",
                marginBottom: "20px",
                borderLeft: "4px solid #1db954",
              }}>
                <p style={{
                  color: "#c8e6c9",
                  lineHeight: "1.6",
                  fontSize: "16px",
                  margin: "0",
                }}>
                  {hadith.translation}
                </p>
              </div>

              {/* Источник */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                paddingTop: "16px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}>
                <div style={{
                  width: "6px",
                  height: "6px",
                  background: "#1db954",
                  borderRadius: "50%",
                  animation: `pulse 2s infinite ${index * 0.1}s`,
                }} />
                <p style={{
                  fontSize: "14px",
                  color: "#94a3b8",
                  fontStyle: "italic",
                  margin: "0",
                  fontWeight: "500",
                }}>
                  {hadith.source}
                </p>
              </div>

              {/* Декоративная линия */}
              <div style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                height: "3px",
                background: "linear-gradient(90deg, #1db954, transparent)",
                borderBottomLeftRadius: "24px",
                borderBottomRightRadius: "24px",
              }} />
            </motion.div>
          ))}
        </motion.div>

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
          }}>
            <span style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#94a3b8",
              letterSpacing: "0.5px",
            }}>
              © 2008-2025 Meda Islamic App • Hadith Collection
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
              {hadiths.length} Hadiths
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
            Все хадисы приведены из авторитетных источников исламской традиции. 
            May the peace and blessings of Allah be upon our Prophet Muhammad ﷺ
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        /* Кастомный скроллбар */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.8);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #1db954, #22d3ee);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #16a34a, #0ea5e9);
        }
      `}</style>
    </div>
  );
}