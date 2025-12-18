import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Play, 
  Pause, 
  Volume2, 
  SkipBack, 
  SkipForward,
  Music,
  ListMusic,
  Clock,
  ChevronRight,
  Filter,
  Heart,
  Download,
  Share2,
  Repeat,
  Shuffle,
  Moon,
  Star
} from "lucide-react";

const surahs = [
  { id: 0, name: "Azan", audio: "/audio/azan.mp3", description: "call to prayer." },
  { id: 1, name: "Al-Fatiha", audio: "/audio/fatiha.mp3", description: "The Opening Surah of the Quran." },
  { id: 2, name: "Al-Baqarah", audio: "/audio/baqarah.mp3", description: "The longest Surah of the Quran." },
  { id: 3, name: "Al-Imran", audio: "/audio/imran.mp3", description: "Surah Al-Imran, emphasizing God's oneness." },
  { id: 4, name: "An-Nisa", audio: "/audio/Nisa.mp3", description: "Surah An-Nisa, emphasizing God's oneness." },
  { id: 5, name: "Al-Ma'idah", audio: "/audio/ma'idah.mp3", description: "Surah Al-Ma'idah, emphasizing God's oneness." },
  { id: 6, name: "Al-An'am", audio: "/audio/an'am.mp3", description: "Surah Al-An'am, emphasizing God's oneness." },
  { id: 7, name: "Al-A'raf", audio: "/audio/a'raf.mp3", description: "Surah Al-A'raf, emphasizing God's oneness." },
  { id: 8, name: "Al-Anfal", audio: "/audio/anfal.mp3", description: "Surah Al-Anfal, emphasizing God's oneness." },
  { id: 9, name: "At-Tawbah", audio: "/audio/tawbah.mp3", description: "Surah At-Tawbah, emphasizing God's oneness." },
  { id: 10, name: "Yunus", audio: "/audio/yunus.mp3", description: "Surah Yunus, emphasizing God's oneness." },
  { id: 11, name: "Hud", audio: "/audio/hud.mp3", description: "Surah Hud, emphasizing God's oneness." },
  { id: 12, name: "Yusuf", audio: "/audio/yusuf.mp3", description: "Surah Yusuf, emphasizing God's oneness." },
  { id: 13, name: "Ar-Ra'd", audio: "/audio/ra'd.mp3", description: "Surah Ar-Ra'd, emphasizing God's oneness." },
  { id: 14, name: "Ibrahim", audio: "/audio/ibrahim.mp3", description: "Surah Ibrahim, emphasizing God's oneness." },
  { id: 15, name: "Al-Hijr", audio: "/audio/hijr.mp3", description: "Surah Al-Hijr, emphasizing God's oneness." },
  { id: 16, name: "An-Nahl", audio: "/audio/nahl.mp3", description: "Surah An-Nahl, emphasizing God's oneness." },
  { id: 17, name: "Al-Isra", audio: "/audio/isra.mp3", description: "Surah Al-Isra, emphasizing God's oneness." },
  { id: 18, name: "Al-Kahf", audio: "/audio/kahf.mp3", description: "Surah Al-Kahf, emphasizing God's oneness." },
  { id: 19, name: "Maryam", audio: "/audio/maryam.mp3", description: "Surah Maryam, emphasizing God's oneness." },
  { id: 20, name: "Ta-Ha", audio: "/audio/ta-ha.mp3", description: "Surah Ta-Ha, emphasizing God's oneness." },
  { id: 21, name: "Al-Anbiya", audio: "/audio/anbiya.mp3", description: "Surah Al-Anbiya, emphasizing God's oneness." },
  { id: 22, name: "Al-Hajj", audio: "/audio/hajj.mp3", description: "Surah Al-Hajj, emphasizing God's oneness." },
  { id: 23, name: "Al-Mu'minun", audio: "/audio/mu'minun.mp3", description: "Surah Al-Mu'minun, emphasizing God's oneness." },
  { id: 24, name: "An-Nur", audio: "/audio/nur.mp3", description: "Surah An-Nur, emphasizing God's oneness." },
  { id: 25, name: "Al-Furqan", audio: "/audio/furqan.mp3", description: "Surah Al-Furqan, emphasizing God's oneness." },
  { id: 26, name: "Ash-Shu'ara", audio: "/audio/shu'ara.mp3", description: "Surah Ash-Shu'ara, emphasizing God's oneness." },
  { id: 27, name: "An-Naml", audio: "/audio/naml.mp3", description: "Surah An-Naml, emphasizing God's oneness." },
  { id: 28, name: "Al-Qasas", audio: "/audio/qasas.mp3", description: "Surah Al-Qasas, emphasizing God's oneness." },
  { id: 29, name: "Al-Ankabut", audio: "/audio/ankabut.mp3", description: "Surah Al-Ankabut, emphasizing God's oneness." },
  { id: 30, name: "Ar-Rum", audio: "/audio/rum.mp3", description: "Surah Ar-Rum, emphasizing God's oneness." },
  { id: 31, name: "Luqman", audio: "/audio/luqman.mp3", description: "Surah Luqman, emphasizing God's oneness." },
  { id: 32, name: "As-Sajdah", audio: "/audio/sajdah.mp3", description: "Surah As-Sajdah, emphasizing God's oneness." },
  { id: 33, name: "Al-Ahzab", audio: "/audio/ahzab.mp3", description: "Surah Al-Ahzab, emphasizing God's oneness." },
  { id: 34, name: "Saba", audio: "/audio/saba.mp3", description: "Surah Saba, emphasizing God's oneness." },
  { id: 35, name: "Fatir", audio: "/audio/fatir.mp3", description: "Surah Fatir, emphasizing God's oneness." },
  { id: 36, name: "Ya-Sin", audio: "/audio/ya-sin.mp3", description: "Surah Ya-Sin, emphasizing God's oneness." },
  { id: 37, name: "As-Saffat", audio: "/audio/saffat.mp3", description: "Surah As-Saffat, emphasizing God's oneness." },
  { id: 38, name: "Sad", audio: "/audio/sad.mp3", description: "Surah Sad, emphasizing God's oneness." },
  { id: 39, name: "Az-Zumar", audio: "/audio/az-zumar.mp3", description: "Surah Az-Zumar, emphasizing God's oneness." },
  { id: 40, name: "Ghafir", audio: "/audio/ghafir.mp3", description: "Surah Ghafir, emphasizing God's oneness." },
  { id: 41, name: "Fussilat", audio: "/audio/fussilat.mp3", description: "Surah Fussilat, emphasizing God's oneness." },
  { id: 42, name: "Ash-Shura", audio: "/audio/shura.mp3", description: "Surah Ash-Shura, emphasizing God's oneness." },
  { id: 43, name: "Az-Zukhruf", audio: "/audio/zukhruf.mp3", description: "Surah Az-Zukhruf, emphasizing God's oneness." },
  { id: 44, name: "Ad-Dukhan", audio: "/audio/dukhan.mp3", description: "Surah Ad-Dukhan, emphasizing God's oneness." },
  { id: 45, name: "Al-Jathiyah", audio: "/audio/jathiyah.mp3", description: "Surah Al-Jathiyah, emphasizing God's oneness." },
  { id: 46, name: "Al-Ahqaf", audio: "/audio/ahqaf.mp3", description: "Surah Al-Ahqaf, emphasizing God's oneness." },
  { id: 47, name: "Muhammad", audio: "/audio/muhammad.mp3", description: "Surah Muhammad, emphasizing God's oneness." },
  { id: 48, name: "Al-Fath", audio: "/audio/fath.mp3", description: "Surah Al-Fath, emphasizing God's oneness." },
  { id: 49, name: "Al-Hujurat", audio: "/audio/hujurat.mp3", description: "Surah Al-Hujurat, emphasizing God's oneness." },
  { id: 50, name: "Qaf", audio: "/audio/qaf.mp3", description: "Surah Qaf, emphasizing God's oneness." },
  { id: 51, name: "Adh-Dhariyat", audio: "/audio/adh-dhariyat.mp3", description: "Surah Adh-Dhariyat, emphasizing God's oneness." },
  { id: 52, name: "At-Tur", audio: "/audio/at-tur.mp3", description: "Surah At-Tur, emphasizing God's oneness." },
  { id: 53, name: "An-Najm", audio: "/audio/an-najm.mp3", description: "Surah An-Najm, emphasizing God's oneness." },
  { id: 54, name: "Al-Qamar", audio: "/audio/al-qamar.mp3", description: "Surah Al-Qamar, emphasizing God's oneness." },
  { id: 55, name: "Ar-Rahman", audio: "/audio/ar-rahman.mp3", description: "Surah Ar-Rahman, emphasizing God's oneness." },
  { id: 56, name: "Al-Waqi'ah", audio: "/audio/al-waqi'ah.mp3", description: "Surah Al-Waqi'ah, emphasizing God's oneness." },
  { id: 57, name: "Al-Hadid", audio: "/audio/al-hadid.mp3", description: "Surah Al-Hadid, emphasizing God's oneness." },
  { id: 58, name: "Al-Mujadila", audio: "/audio/al-mujadila.mp3", description: "Surah Al-Mujadila, emphasizing God's oneness." },
  { id: 59, name: "Al-Hashr", audio: "/audio/al-hashr.mp3", description: "Surah Al-Hashr, emphasizing God's oneness." },
  { id: 60, name: "Al-Mumtahina", audio: "/audio/al-mumtahina.mp3", description: "Surah Al-Mumtahina, emphasizing God's oneness." },
  { id: 61, name: "As-Saff", audio: "/audio/as-saff.mp3", description: "Surah As-Saff, emphasizing God's oneness." },
  { id: 62, name: "Al-Jumu'ah", audio: "/audio/al-jumu'ah.mp3", description: "Surah Al-Jumu'ah, emphasizing God's oneness." },
  { id: 63, name: "Al-Munafiqun", audio: "/audio/al-munafiqun.mp3", description: "Surah Al-Munafiqun, emphasizing God's oneness." },
  { id: 64, name: "At-Taghabun", audio: "/audio/at-taghabun.mp3", description: "Surah At-Taghabun, emphasizing God's oneness." },
  { id: 65, name: "At-Talaq", audio: "/audio/at-talaq.mp3", description: "Surah At-Talaq, emphasizing God's oneness." },
  { id: 66, name: "At-Tahrim", audio: "/audio/at-tahrim.mp3", description: "Surah At-Tahrim, emphasizing God's oneness." },
  { id: 67, name: "Al-Mulk", audio: "/audio/al-mulk.mp3", description: "Surah Al-Mulk, emphasizing God's oneness." },
  { id: 68, name: "Al-Qalam", audio: "/audio/al-qalam.mp3", description: "Surah Al-Qalam, emphasizing God's oneness." },
  { id: 69, name: "Al-Haqqah", audio: "/audio/al-haqqah.mp3", description: "Surah Al-Haqqah, emphasizing God's oneness." },
  { id: 70, name: "Al-Ma'arij", audio: "/audio/al-maarij.mp3", description: "Surah Al-Ma'arij, emphasizing God's oneness." },
  { id: 71, name: "Nuh", audio: "/audio/nuh.mp3", description: "Surah Nuh, emphasizing God's oneness." },
  { id: 72, name: "Al-Jinn", audio: "/audio/al-jinn.mp3", description: "Surah Al-Jinn, emphasizing God's oneness." },
  { id: 73, name: "Al-Muzzammil", audio: "/audio/al-muzzammil.mp3", description: "Surah Al-Muzzammil, emphasizing God's oneness." },
  { id: 74, name: "Al-Muddathir", audio: "/audio/al-muddathir.mp3", description: "Surah Al-Muddathir, emphasizing God's oneness." },
  { id: 75, name: "Al-Qiyamah", audio: "/audio/al-qiyamah.mp3", description: "Surah Al-Qiyamah, emphasizing God's oneness." },
  { id: 76, name: "Al-Insan", audio: "/audio/al-insan.mp3", description: "Surah Al-Insan, emphasizing God's oneness." },
  { id: 77, name: "Al-Mursalat", audio: "/audio/al-mursalat.mp3", description: "Surah Al-Mursalat, emphasizing God's oneness." },
  { id: 78, name: "An-Naba", audio: "/audio/an-naba.mp3", description: "Surah An-Naba, emphasizing God's oneness." },
  { id: 79, name: "An-Nazi'at", audio: "/audio/an-nazi'at.mp3", description: "Surah An-Nazi'at, emphasizing God's oneness." },
  { id: 80, name: "Abasa", audio: "/audio/abasa.mp3", description: "Surah Abasa, emphasizing God's oneness." },
  { id: 81, name: "At-Takwir", audio: "/audio/at-takwir.mp3", description: "Surah At-Takwir, emphasizing God's oneness." },
  { id: 82, name: "Al-Infitar", audio: "/audio/al-infitar.mp3", description: "Surah Al-Infitar, emphasizing God's oneness." },
  { id: 83, name: "Al-Mutaffifin", audio: "/audio/al-mutaffifin.mp3", description: "Surah Al-Mutaffifin, emphasizing God's oneness." },
  { id: 84, name: "Al-Inshiqaq", audio: "/audio/al-inshiqaq.mp3", description: "Surah Al-Inshiqaq, emphasizing God's oneness." },
  { id: 85, name: "Al-Buruj", audio: "/audio/al-buruj.mp3", description: "Surah Al-Buruj, emphasizing God's oneness." },
  { id: 86, name: "At-Tariq", audio: "/audio/at-tariq.mp3", description: "Surah At-Tariq, emphasizing God's oneness." },
  { id: 87, name: "Al-A'la", audio: "/audio/al-a'la.mp3", description: "Surah Al-A'la, emphasizing God's oneness." },
  { id: 88, name: "Al-Ghashiyah", audio: "/audio/al-ghashiyah.mp3", description: "Surah Al-Ghashiyah, emphasizing God's oneness." },
  { id: 89, name: "Al-Fajr", audio: "/audio/al-fajr.mp3", description: "Surah Al-Fajr, emphasizing God's oneness." },
  { id: 90, name: "Al-Balad", audio: "/audio/al-balad.mp3", description: "Surah Al-Balad, emphasizing God's oneness." },
  { id: 91, name: "Ash-Shams", audio: "/audio/ash-shams.mp3", description: "Surah Ash-Shams, emphasizing God's oneness." },
  { id: 92, name: "Al-Lail", audio: "/audio/al-lail.mp3", description: "Surah Al-Lail, emphasizing God's oneness." },
  { id: 93, name: "Ad-Duha", audio: "/audio/ad-duha.mp3", description: "Surah Ad-Duha, emphasizing God's oneness." },
  { id: 94, name: "Ash-Sharh", audio: "/audio/ash-sharh.mp3", description: "Surah Ash-Sharh, emphasizing God's oneness." },
  { id: 95, name: "At-Tin", audio: "/audio/at-tin.mp3", description: "Surah At-Tin, emphasizing God's oneness." },
  { id: 96, name: "Al-Alaq", audio: "/audio/al-alaq.mp3", description: "Surah Al-Alaq, emphasizing God's oneness." },
  { id: 97, name: "Al-Qadr", audio: "/audio/al-qadr.mp3", description: "Surah Al-Qadr, emphasizing God's oneness." },
  { id: 98, name: "Al-Bayyinah", audio: "/audio/al-bayyinah.mp3", description: "Surah Al-Bayyinah, emphasizing God's oneness." },
  { id: 99, name: "Az-Zalzalah", audio: "/audio/az-zalzalah.mp3", description: "Surah Az-Zalzalah, emphasizing God's oneness." },
  { id: 100, name: "Al-Adiyat", audio: "/audio/al-adiyat.mp3", description: "Surah Al-Adiyat, emphasizing God's oneness." },
  { id: 101, name: "Al-Qari'ah", audio: "/audio/al-qariah.mp3", description: "Surah Al-Qari'ah, emphasizing God's oneness." },
  { id: 102, name: "At-Takathur", audio: "/audio/at-takathur.mp3", description: "Surah At-Takathur, emphasizing God's oneness." },
  { id: 103, name: "Al-Asr", audio: "/audio/asr.mp3", description: "Surah Al-Asr, emphasizing God's oneness." },
  { id: 104, name: "Al-Humazah", audio: "/audio/humazah.mp3", description: "Surah Al-Humazah, emphasizing God's oneness." },
  { id: 105, name: "Al-Fil", audio: "/audio/fil.mp3", description: "Surah Al-Fil, emphasizing God's oneness." },
  { id: 106, name: "Quraysh", audio: "/audio/quraysh.mp3", description: "Surah Quraysh, emphasizing God's oneness." },
  { id: 107, name: "Al-Ma'un", audio: "/audio/maun.mp3", description: "Surah Al-Ma'un, emphasizing God's oneness." },
  { id: 108, name: "Al-Kawthar", audio: "/audio/kauathar.mp3", description: "Surah Al-Kawthar, emphasizing God's oneness." },
  { id: 109, name: "Al-Kafirun", audio: "/audio/kafirun.mp3", description: "Surah Al-Kafirun, emphasizing God's oneness." },
  { id: 110, name: "An-Nasr", audio: "/audio/Nasr.mp3", description: "Surah An-Nasr, emphasizing God's oneness." },
  { id: 111, name: "Al-Masad", audio: "/audio/massad.mp3", description: "Surah Al-Masad, emphasizing God's oneness." },
  { id: 112, name: "Al-Ikhlas", audio: "/audio/ikhlas.mp3", description: "Surah Al-Ikhlas, emphasizing God's oneness." },
  { id: 113, name: "Al-Falaq", audio: "/audio/Falaq.mp3", description: "Surah Al-Falaq, emphasizing God's oneness." },
  { id: 114, name: "An-Nas", audio: "/audio/Nas.mp3", description: "Surah An-Nas, emphasizing God's oneness." },
];

const surahCategories = [
  { id: "all", name: "Все суры", icon: <ListMusic size={18} /> },
  { id: "makki", name: "Макканские", icon: <Moon size={18} /> },
  { id: "madani", name: "Мединские", icon: <Star size={18} /> },
  { id: "short", name: "Короткие", icon: <Clock size={18} /> },
];

export default function Surahs() {
  const audioRef = useRef(null);
  const [currentSurah, setCurrentSurah] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  // Фильтрация сур
  const filteredSurahs = surahs.filter(surah => {
    const matchesSearch = 
      surah.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeCategory === "all") return matchesSearch;
    
    // Простая логика категорий
    const categories = {
      makki: [50, 51, 52, 53, 54, 55, 56, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114],
      madani: [2, 3, 4, 5, 8, 9, 22, 24, 33, 47, 48, 49, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 76, 98, 99],
      short: [1, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114]
    };
    
    return matchesSearch && categories[activeCategory]?.includes(surah.id);
  });

  // Эффекты для аудио
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentSurah) {
      audio.pause();
      audio.load();
      audio.currentTime = 0;
      setProgress(0);
      setDuration(0);

      if (isPlaying) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn("Автовоспроизведение заблокировано:", err);
          });
        }
      }
    }
  }, [currentSurah]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Ошибка воспроизведения:", err);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Обработчики аудио
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) setProgress(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) setDuration(audio.duration);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = parseFloat(e.target.value);
    if (audio) {
      audio.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleEnded = () => {
    if (isRepeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else if (isShuffle) {
      playRandomSurah();
    } else {
      playNextSurah();
    }
  };

  // Управление воспроизведением
  const handleSelect = (surah) => {
    if (currentSurah?.id === surah.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSurah(surah);
      setIsPlaying(true);
    }
  };

  const playNextSurah = () => {
    const currentIndex = filteredSurahs.findIndex(s => s.id === currentSurah?.id);
    const nextIndex = (currentIndex + 1) % filteredSurahs.length;
    setCurrentSurah(filteredSurahs[nextIndex]);
    setIsPlaying(true);
  };

  const playPrevSurah = () => {
    const currentIndex = filteredSurahs.findIndex(s => s.id === currentSurah?.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredSurahs.length - 1;
    setCurrentSurah(filteredSurahs[prevIndex]);
    setIsPlaying(true);
  };

  const playRandomSurah = () => {
    const randomIndex = Math.floor(Math.random() * filteredSurahs.length);
    setCurrentSurah(filteredSurahs[randomIndex]);
    setIsPlaying(true);
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18
      }
    },
    hover: {
      y: -4,
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
            <Music size={18} color="#1db954" />
            <span style={{
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
              color: "#94a3b8",
              textTransform: "uppercase",
            }}>
              Holy Quran Audio
            </span>
            <Volume2 size={18} color="#22d3ee" />
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
            📖 Quran Surahs Collection
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
            سور القرآن الكريم - كاملة بصوت جميل
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
                placeholder="Search surahs by name..."
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
              gap: "10px",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "15px",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}>
              {surahCategories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 20px",
                    background: activeCategory === category.id 
                      ? "linear-gradient(135deg, #1db954, #16a34a)" 
                      : "rgba(255, 255, 255, 0.05)",
                    border: "1px solid",
                    borderColor: activeCategory === category.id 
                      ? "rgba(29, 185, 84, 0.3)" 
                      : "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    color: activeCategory === category.id ? "#fff" : "#94a3b8",
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
                {surahs.length}
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
          </motion.div>
        </motion.header>

        {/* Аудио плеер */}
        {currentSurah && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "30px",
              marginBottom: "40px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <audio
              ref={audioRef}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
              style={{ display: "none" }}
            >
              <source src={currentSurah.audio} type="audio/mp3" />
            </audio>

            {/* Акцентная полоса */}
            <div style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              height: "4px",
              background: "linear-gradient(90deg, #1db954, #22d3ee, #9333ea)",
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
            }} />

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "25px",
            }}>
              <div style={{
                width: "70px",
                height: "70px",
                background: "linear-gradient(135deg, #1db954, #16a34a)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                boxShadow: "0 10px 30px rgba(29, 185, 84, 0.3)",
              }}>
                📖
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#f8fafc",
                  marginBottom: "5px",
                }}>
                  {currentSurah.name}
                </h3>
                <p style={{
                  color: "#94a3b8",
                  fontSize: "14px",
                  margin: "0",
                }}>
                  {currentSurah.description}
                </p>
              </div>
              <div style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#1db954",
                background: "rgba(29, 185, 84, 0.1)",
                padding: "8px 16px",
                borderRadius: "20px",
                border: "1px solid rgba(29, 185, 84, 0.3)",
              }}>
                Surah {currentSurah.id}
              </div>
            </div>

            {/* Прогресс бар */}
            <div style={{ marginBottom: "20px" }}>
              <input
                type="range"
                min="0"
                max={duration}
                value={progress}
                onChange={handleSeek}
                style={{
                  width: "100%",
                  height: "6px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "3px",
                  appearance: "none",
                }}
              />
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
                color: "#94a3b8",
                marginTop: "8px",
              }}>
                <span>{formatTime(progress)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Управление */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsShuffle(!isShuffle)}
                  style={{
                    background: "none",
                    border: "none",
                    color: isShuffle ? "#1db954" : "#94a3b8",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  <Shuffle size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={playPrevSurah}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#f1f5f9",
                    cursor: "pointer",
                    fontSize: "24px",
                  }}
                >
                  <SkipBack size={24} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "linear-gradient(135deg, #1db954, #16a34a)",
                    border: "none",
                    borderRadius: "50%",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 25px rgba(29, 185, 84, 0.3)",
                  }}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={playNextSurah}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#f1f5f9",
                    cursor: "pointer",
                    fontSize: "24px",
                  }}
                >
                  <SkipForward size={24} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsRepeat(!isRepeat)}
                  style={{
                    background: "none",
                    border: "none",
                    color: isRepeat ? "#1db954" : "#94a3b8",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                >
                  <Repeat size={20} />
                </motion.button>
              </div>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                width: "200px",
              }}>
                <Volume2 size={18} color="#94a3b8" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  style={{
                    flex: 1,
                    height: "4px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "2px",
                    appearance: "none",
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Список сур */}
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory + searchQuery}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "20px",
              padding: "20px",
            }}
          >
            {filteredSurahs.length > 0 ? (
              filteredSurahs.map((surah, index) => (
                <motion.div
                  key={surah.id}
                  variants={itemVariants}
                  whileHover="hover"
                  onClick={() => handleSelect(surah)}
                  style={{
                    background: currentSurah?.id === surah.id 
                      ? "linear-gradient(145deg, rgba(29, 185, 84, 0.2), rgba(22, 163, 74, 0.3))" 
                      : "linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))",
                    backdropFilter: "blur(12px)",
                    borderRadius: "20px",
                    padding: "24px",
                    boxShadow: currentSurah?.id === surah.id
                      ? "0 15px 35px rgba(29, 185, 84, 0.25)"
                      : "0 8px 25px rgba(0, 0, 0, 0.25)",
                    border: currentSurah?.id === surah.id
                      ? "1px solid rgba(29, 185, 84, 0.4)"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Номер суры */}
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    width: "40px",
                    height: "40px",
                    background: currentSurah?.id === surah.id
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(255, 255, 255, 0.05)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: currentSurah?.id === surah.id ? "#fff" : "#94a3b8",
                    border: currentSurah?.id === surah.id
                      ? "1px solid rgba(255, 255, 255, 0.3)"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                  }}>
                    {surah.id}
                  </div>

                  {/* Иконка */}
                  <div style={{
                    width: "50px",
                    height: "50px",
                    background: currentSurah?.id === surah.id
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(255, 255, 255, 0.05)",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    marginBottom: "20px",
                    border: currentSurah?.id === surah.id
                      ? "1px solid rgba(255, 255, 255, 0.3)"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                  }}>
                    {currentSurah?.id === surah.id && isPlaying ? "🎵" : "📖"}
                  </div>

                  {/* Название */}
                  <h3 style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: currentSurah?.id === surah.id ? "#fff" : "#f8fafc",
                    marginBottom: "12px",
                    paddingRight: "50px",
                  }}>
                    {surah.name}
                  </h3>

                  {/* Описание */}
                  <p style={{
                    color: currentSurah?.id === surah.id ? "#d1fae5" : "#94a3b8",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    marginBottom: "20px",
                  }}>
                    {surah.description}
                  </p>

                  {/* Кнопка воспроизведения */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "16px",
                    borderTop: "1px solid",
                    borderTopColor: currentSurah?.id === surah.id
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(255, 255, 255, 0.1)",
                  }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(surah);
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        background: currentSurah?.id === surah.id && isPlaying
                          ? "rgba(255, 255, 255, 0.2)"
                          : "rgba(29, 185, 84, 0.1)",
                        border: "1px solid",
                        borderColor: currentSurah?.id === surah.id && isPlaying
                          ? "rgba(255, 255, 255, 0.3)"
                          : "rgba(29, 185, 84, 0.3)",
                        borderRadius: "10px",
                        color: currentSurah?.id === surah.id && isPlaying ? "#fff" : "#1db954",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {currentSurah?.id === surah.id && isPlaying ? (
                        <>
                          <Pause size={16} />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play size={16} />
                          Play
                        </>
                      )}
                    </motion.button>

                    <ChevronRight 
                      size={18} 
                      color={currentSurah?.id === surah.id ? "#fff" : "#94a3b8"} 
                    />
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
              © 2008-2025 Meda Islamic App • Quran Audio
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
              {surahs.length} Blessed Recitations
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
            May Allah bless all those who recite and listen to the Holy Quran with sincerity and devotion.
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
        
        /* Стили для input range */
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.1);
          outline: none;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #1db954;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #1db954;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}