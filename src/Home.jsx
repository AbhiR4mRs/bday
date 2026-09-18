import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player/youtube';
import { Sparkles, Heart, Frown, PartyPopper, Music } from 'lucide-react';

const homeImages = [
  '/images/hidha1.jpg',
  '/images/hidha2.jpg',
  '/images/hidha3.jpg',
  '/images/hidha4.jpg',
  '/images/hidha5.jpg',
];

const floatingItems = ['🎈', '✨', '🎉', '🎊', '🥳', '🎂', 'img'];

export default function Home() {
  const [partyStarted, setPartyStarted] = useState(false);
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    // Shuffle and pick 3 random images for the home page showcase
    const shuffled = [...homeImages].sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, 3));
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      {/* Music Player */}
      <div className="absolute top-0 left-0 w-[1px] h-[1px] opacity-0 pointer-events-none -z-50 overflow-hidden">
        <ReactPlayer 
          url="https://www.youtube.com/watch?v=Gs069dndIYk" 
          playing={partyStarted} 
          loop={true}
          volume={1}
          width="10px"
          height="10px"
          playsinline={true}
          config={{
            youtube: {
              playerVars: { autoplay: 1 }
            }
          }}
        />
      </div>

      {/* Start Party Overlay */}
      <AnimatePresence>
        {!partyStarted && (
          <motion.div 
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, -2, 2, 0]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <button 
                onClick={() => setPartyStarted(true)}
                className="group relative px-8 py-5 md:px-12 md:py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full font-black text-2xl md:text-4xl shadow-[0_0_60px_rgba(236,72,153,0.6)] flex items-center gap-4 overflow-hidden transform transition-all hover:scale-110 active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
                <PartyPopper className="w-8 h-8 md:w-10 md:h-10 animate-bounce" /> 
                <span>START THE PARTY!</span>
                <Music className="w-8 h-8 md:w-10 md:h-10 animate-pulse" />
              </button>
            </motion.div>
            <p className="mt-6 text-pink-300 font-medium tracking-widest animate-pulse text-sm md:text-base text-center">
              (TURN UP YOUR VOLUME)
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center text-center p-4 relative pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
          className="z-10 bg-slate-900/40 p-6 md:p-12 rounded-3xl backdrop-blur-sm border border-white/5"
        >
          <motion.div
             animate={{ rotate: [-2, 2, -2] }}
             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black mb-4 md:mb-6 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">Happy<br/>Birthday<br/></span><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">Hidha!</span> <span className="text-white">🎂</span>
            </h1>
          </motion.div>
          <p className="text-xl md:text-3xl text-slate-200 font-bold tracking-widest mt-4">
            18th September 2026
          </p>
        </motion.div>

        {/* Floating elements */}
        {partyStarted && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {[...Array(35)].map((_, i) => {
              const itemType = floatingItems[Math.floor(Math.random() * floatingItems.length)];
              const size = Math.random() * 40 + 20;
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ 
                    x: Math.random() * window.innerWidth, 
                    y: window.innerHeight + 100,
                    opacity: 0
                  }}
                  animate={{ 
                    y: -150,
                    x: `calc(${Math.random() * 100}vw)`,
                    rotate: Math.random() * 720 - 360,
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: Math.random() * 8 + 6,
                    repeat: Infinity,
                    delay: Math.random() * 10,
                    ease: "linear"
                  }}
                >
                  {itemType === 'img' ? (
                    <img 
                      src="/images/hidha1.jpg" 
                      alt="face" 
                      style={{ width: size, height: size }}
                      className="rounded-full object-cover border-2 border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                    />
                  ) : (
                    <span style={{ fontSize: size }}>{itemType}</span>
                  )}
                </motion.div>
              )
            })}
          </div>
        )}
      </section>

      {/* Funny Meme Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.6 }}
          >
            <h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-12 text-pink-400 drop-shadow-md">Wait a minute...</h2>
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-slate-800/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-2xl border-4 border-pink-500/30 max-w-2xl mx-auto transform -rotate-3 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-6 text-white drop-shadow-lg">You're getting OLD! 👵🏼</h3>
              <p className="text-lg md:text-2xl text-slate-300 font-medium">But don't worry, you still look exactly the same as you did yesterday. 😉</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Random Featured Images */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 uppercase tracking-widest"
        >
          COOL
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {randomImages.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: idx === 1 ? -2 : 2, zIndex: 20 }}
              className="rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] aspect-[4/5] border-2 border-white/10 relative group"
            >
              <img src={src} alt="Random hidha" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <Heart className="text-pink-500 w-8 h-8 fill-current animate-bounce" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apology Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-slate-900 to-black relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-black/50 p-8 md:p-16 rounded-[3rem] border border-pink-500/20 shadow-[0_0_50px_rgba(236,72,153,0.1)] backdrop-blur-lg"
          >
            <motion.div
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="inline-block"
            >
              <Frown className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 text-pink-400" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">An Apology...</h2>
            
            <p className="text-lg md:text-2xl text-slate-300 leading-relaxed mb-6 font-medium">
              I know this wish is coming a bit late, and I am truly sorry for that. Things have been really crazy and I was caught up in some bad situations lately, which kept me away. 
            </p>
            <p className="text-lg md:text-2xl text-slate-300 leading-relaxed mb-10 font-medium">
              But I wanted to make sure I still made something special for you, because you mean a lot to me. I hope this little website makes up for it!
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 flex items-center gap-3">
                Happy Belated Birthday <Heart className="text-pink-500 fill-current w-8 h-8" />
              </div>
              <p className="text-xl md:text-3xl font-bold text-pink-400 mt-4 flex items-center justify-center gap-4 animate-pulse">
                <img src="/images/hidha1.jpg" alt="Hidha" className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
                I miss you BRO.
                <img src="/images/hidha3.jpg" alt="Hidha" className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
