const fs = require('fs');
let content = fs.readFileSync('src/Home.jsx', 'utf8');

// Fix emoji transparency bug by changing h1 classes
content = content.replace(
  /className="text-6xl sm:text-7xl md:text-9xl font-black mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 drop-shadow-\[0_0_15px_rgba\(236,72,153,0\.3\)\]"/g,
  'className="text-6xl sm:text-7xl md:text-9xl font-black mb-4 md:mb-6 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]"'
);

content = content.replace(
  /Happy<br\/>Birthday<br\/><span className="text-pink-500">Hidha!<\/span> 🎂/g,
  '<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">Happy<br/>Birthday<br/></span><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">Hidha!</span> <span className="text-white">🎂</span>'
);

content = content.replace(
  /Some random cool moments 😎/g,
  'COOL'
);

// Also remove transparent text classes from the H2 around COOL
content = content.replace(
  /className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400"/g,
  'className="text-3xl md:text-5xl font-black text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 uppercase tracking-widest"'
);

fs.writeFileSync('src/Home.jsx', content);
console.log('Fixed Home.jsx');
