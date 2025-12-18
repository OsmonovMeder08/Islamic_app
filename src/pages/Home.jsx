export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: '#f1f5f9',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Декоративные элементы */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-20%',
        width: '70%',
        height: '70%',
        background: 'radial-gradient(circle, rgba(29, 185, 84, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-20%',
        width: '60%',
        height: '60%',
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />

      <div
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: '40px 20px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Заголовок */}
        <header
          style={{
            textAlign: 'center',
            marginBottom: 60,
            animation: 'fadeInDown 0.8s ease-out',
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            padding: '12px 24px',
            borderRadius: 50,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: 30,
          }}>
            <div style={{
              width: 8,
              height: 8,
              background: '#1db954',
              borderRadius: '50%',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 1,
              color: '#94a3b8',
              textTransform: 'uppercase',
            }}>
              Meda Islamic App
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 20,
            background: 'linear-gradient(45deg, #1db954, #22d3ee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Quran & Hadith with Soul
          </h1>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#cbd5e1',
            maxWidth: 600,
            margin: '0 auto',
            opacity: 0.9,
          }}>
            Immerse yourself in divine wisdom through modern design
          </p>
        </header>

        {/* Основной контент */}
        <section
          style={{
            background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9))',
            backdropFilter: 'blur(12px)',
            borderRadius: 32,
            padding: '50px 40px',
            boxShadow: `
              0 20px 40px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            animation: 'slideUp 0.8s ease-out 0.2s both',
          }}
        >
          {/* Акцентная полоса */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #1db954, #9333ea)',
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
          }} />

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginBottom: 30,
          }}>
            <div style={{
              width: 60,
              height: 60,
              background: 'linear-gradient(135deg, #1db954, #16a34a)',
              borderRadius: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              boxShadow: '0 10px 25px -5px rgba(29, 185, 84, 0.3)',
              animation: 'float 3s ease-in-out infinite',
            }}>
              🎧
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}>
              <h2 style={{
                fontSize: 28,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #fff, #94a3b8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Spiritual Experience
              </h2>
              <div style={{
                display: 'flex',
                gap: 8,
                alignItems: 'center',
              }}>
                <div style={{ width: 6, height: 6, background: '#1db954', borderRadius: '50%' }} />
                <div style={{ width: 6, height: 6, background: '#9333ea', borderRadius: '50%', animation: 'pulse 1.5s infinite 0.3s' }} />
                <div style={{ width: 6, height: 6, background: '#22d3ee', borderRadius: '50%', animation: 'pulse 1.5s infinite 0.6s' }} />
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              lineHeight: 1.7,
              color: '#e2e8f0',
              maxWidth: 600,
              margin: '0 auto',
              padding: '25px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 20,
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'transform 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <p style={{ marginBottom: 15 }}>
                Listen to the Holy Quran and authentic Hadiths through a beautifully crafted interface with smooth, 
                soulful animations. Deepen your spiritual connection — anytime, anywhere.
              </p>
              
              <div style={{
                width: 40,
                height: 2,
                background: 'linear-gradient(90deg, transparent, #1db954, transparent)',
                margin: '20px auto',
              }} />
              
              <p style={{
                direction: 'rtl',
                fontFamily: "'Noto Naskh Arabic', serif",
                fontSize: '1.3rem',
                lineHeight: 1.8,
                color: '#c4b5fd',
                fontStyle: 'normal',
              }}>
                🎧 استمع إلى القرآن الكريم والأحاديث النبوية الصحيحة من خلال واجهة مصممة بعناية، مع رسوم متحركة سلسة ومؤثرة. 
                عِش تجربة روحانية أعمق — في أي وقت، ومن أي مكان.
              </p>
            </div>

            {/* Особенности */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 20,
              marginTop: 20,
            }}>
              {[
                { icon: '📖', title: 'Complete Quran', desc: 'All 114 Surahs' },
                { icon: '🎯', title: 'Authentic Hadith', desc: 'Sahih Collection' },
                { icon: '✨', title: 'Modern Design', desc: 'Smooth Animations' },
                { icon: '🌙', title: 'Spiritual Focus', desc: 'Deep Connection' }
              ].map((feature, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '25px 20px',
                  borderRadius: 20,
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  animation: `fadeIn 0.5s ease-out ${0.4 + index * 0.1}s both`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(29, 185, 84, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(29, 185, 84, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                }}
                >
                  <div style={{
                    fontSize: 32,
                    marginBottom: 15,
                    opacity: 0.9,
                  }}>
                    {feature.icon}
                  </div>
                  <h4 style={{
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 8,
                    color: '#f8fafc',
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{
                    fontSize: 14,
                    color: '#94a3b8',
                  }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Футер */}
        <footer
          style={{
            marginTop: 60,
            textAlign: 'center',
            animation: 'fadeIn 0.8s ease-out 0.6s both',
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '16px 32px',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            borderRadius: 50,
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <span style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#94a3b8',
              letterSpacing: 0.5,
            }}>
              © 2008-2025 Meda Islamic App
            </span>
            <div style={{
              width: 4,
              height: 4,
              background: '#1db954',
              borderRadius: '50%',
            }} />
            <span style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#22d3ee',
            }}>
              v2.0
            </span>
          </div>
        </footer>
      </div>

      {/* CSS анимации */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
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
      `}</style>
    </div>
  );
}