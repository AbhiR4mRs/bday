const fs = require('fs');
let content = fs.readFileSync('src/Home.jsx', 'utf8');

// Add import
if (!content.includes('ReactPlayer')) {
  content = content.replace("import { Sparkles", "import ReactPlayer from 'react-player/youtube';\nimport { Sparkles");
}

// Replace iframe logic
const iframeRegex = /\{\/\* Music Iframe \*\/\}\s*\{partyStarted && \(\s*<iframe[\s\S]*?><\/iframe>\s*\)\}/;
const playerReplacement = `{/* Music Player */}
      <div className="hidden">
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
      </div>`;

content = content.replace(iframeRegex, playerReplacement);
fs.writeFileSync('src/Home.jsx', content);
console.log('Updated Home.jsx for ReactPlayer');
