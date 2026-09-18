import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, ZoomIn, Play } from 'lucide-react';

const galleryItems = [
  { id: 1, type: 'image', src: '/images/hidha1.jpg' },
  { id: 2, type: 'image', src: '/images/hidha2.jpg' },
  { id: 3, type: 'image', src: '/images/hidha3.jpg' },
  { id: 4, type: 'image', src: '/images/hidha4.jpg' },
  { id: 5, type: 'image', src: '/images/hidha5.jpg' },
  { id: 6, type: 'image', src: '/images/Snapchat-1787947559.jpg' },
  { id: 7, type: 'video', src: '/images/Snapchat-1053693005.mp4' },
  { id: 8, type: 'video', src: '/images/Snapchat-1392712010.mp4' },
  { id: 9, type: 'video', src: '/images/Snapchat-2045127382.mp4' },
  { id: 10, type: 'video', src: '/images/Snapchat-290493632.mp4' },
  { id: 11, type: 'video', src: '/images/Snapchat-332187108.mp4' },
  { id: 12, type: 'video', src: '/images/Snapchat-815652830.mp4' },
  { id: 13, type: 'video', src: '/images/Snapchat-926919095.mp4' },
  { id: 14, type: 'video', src: '/images/video_2026-09-18_10-10-46.mp4' },
  { id: 15, type: 'video', src: '/images/video_2026-09-18_10-10-56.mp4' },
  { id: 16, type: 'video', src: '/images/video_2026-09-18_10-11-03.mp4' },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDownload = (e, src, filename) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 pt-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 uppercase tracking-widest">
          Dumbness OF YOU
        </h1>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (idx % 10) * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group rounded-xl md:rounded-2xl overflow-hidden cursor-pointer break-inside-avoid border border-white/10 bg-slate-800/50 shadow-lg"
              onClick={() => setSelectedItem(item)}
            >
              {item.type === 'video' ? (
                <>
                  <video 
                    src={item.src} 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    muted 
                    loop 
                    playsInline
                    onMouseOver={e => e.target.play()}
                    onMouseOut={e => e.target.pause()}
                  />
                  <div className="absolute top-2 right-2 bg-black/50 p-2 rounded-full backdrop-blur-md">
                    <Play size={16} className="text-white fill-current" />
                  </div>
                </>
              ) : (
                <img 
                  src={item.src} 
                  alt={`Gallery item ${item.id}`} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              
              {/* Overlay with download button */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                <button className="p-2 md:p-3 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors">
                  <ZoomIn size={20} className="md:w-6 md:h-6" />
                </button>
                <button 
                  onClick={(e) => handleDownload(e, item.src, `hidha-dumbness-${item.id}.${item.type === 'video' ? 'mp4' : 'jpg'}`)}
                  className="p-2 md:p-3 bg-pink-500 hover:bg-pink-400 rounded-full text-white shadow-lg transition-colors"
                >
                  <Download size={20} className="md:w-6 md:h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-2 md:p-4 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white p-2 z-50 bg-black/20 rounded-full"
              onClick={() => setSelectedItem(null)}
            >
              <X size={28} className="md:w-8 md:h-8" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <video 
                  src={selectedItem.src} 
                  controls 
                  autoPlay
                  className="max-w-full max-h-[75vh] md:max-h-[85vh] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                />
              ) : (
                <img 
                  src={selectedItem.src} 
                  alt="Selected" 
                  className="max-w-full max-h-[75vh] md:max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10" 
                />
              )}
              <button 
                onClick={(e) => handleDownload(e, selectedItem.src, `hidha-dumbness-${selectedItem.id}.${selectedItem.type === 'video' ? 'mp4' : 'jpg'}`)}
                className="mt-4 md:mt-6 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white rounded-full font-bold shadow-lg shadow-pink-500/25 transition-all transform hover:scale-105 active:scale-95"
              >
                <Download size={20} /> Download {selectedItem.type === 'video' ? 'Video' : 'Image'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
