import React, { useState } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [stage, setStage] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);

  const handleNo = () => {
    if (stage < 3) {
      setStage(prev => prev + 1);
      setYesScale(prev => prev + 0.5);
      setNoScale(prev => prev * 0.7);
    }
  };

  const handleYes = () => {
    setStage(4);
  };

  const messages = [
    "Will you be mine? 💝",
    "Please? Pretty please? 🥺",
    "I'm not giving up! Consider it again? 💕",
    "You're breaking my heart... Last chance! 💔",
    "Thank you for saying YES! I love you! ❤️"
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-md w-full mx-4 text-center">
        <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-bounce" />
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          {messages[stage]}
        </h1>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          {(stage < 4) && (
            <>
              <button
                onClick={handleYes}
                style={{ transform: `scale(${yesScale})` }}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Yes
              </button>

              {(stage < 3) && (
                <button
                  onClick={handleNo}
                  style={{ transform: `scale(${noScale})` }}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  No
                </button>
              )}
            </>
          )}

          {stage === 4 && (
            <div className="animate-bounce">
              <Heart className="w-24 h-24 text-red-500 fill-current" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;