import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);

  useEffect(() => {
    if (step === 3) {
      createStars();
      createFloatingTexts();
    }
  }, [step]);

  const createStars = () => {
    const container = document.getElementById('starsContainer');
    if (container) {
      container.innerHTML = '';
      for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
      }
    }
  };

  const createFloatingTexts = () => {
    const texts = [
      'Happy Valentine\'s & Happy Anniversary bby 💕',
      'Anh thương bé My nhiều 💖',
      'Bé My đợi Chảy nhaaaaaaa 💗',
      'Bé My ❤️',
      'Mãi là của nhau 💝',
      'Anh thương bé My nhiềuuuuuuuu 💕',
      'Happy Valentine\'s & Happy Anniversary bby 💖'
    ];

    const container = document.getElementById('floatingTexts');
    
    const addFloatingText = () => {
      if (!container) return;
      
      const text = document.createElement('div');
      text.className = 'floating-text';
      text.textContent = texts[Math.floor(Math.random() * texts.length)];
      
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const endX = (Math.random() - 0.5) * 1000;
      const endY = (Math.random() - 0.5) * 1000;
      
      text.style.left = startX + 'px';
      text.style.top = startY + 'px';
      text.style.setProperty('--tx', endX + 'px');
      text.style.setProperty('--ty', endY + 'px');
      
      container.appendChild(text);
      
      setTimeout(() => text.remove(), 15000);
    };
    
    const interval = setInterval(addFloatingText, 2000);
    for (let i = 0; i < 5; i++) {
      setTimeout(addFloatingText, i * 400);
    }
    
    return () => clearInterval(interval);
  };

  const handleFlipCard = () => {
    setCardFlipped(true);
    setTimeout(() => setStep(3), 2000);
  };

  return (
    <div className="app">
      {/* Step 0: Màn hình bắt đầu */}
      {step === 0 && (
        <div className="step-0">
          <div className="valentine-start" onClick={() => setStep(1)}>
            <h1>Chảy gửi Bé My</h1>
            <div className="heart-icon">💕🩵💕</div>
            <p>Bé My nhấn vô màn hình nha 🩵🩵🩵</p>
          </div>
        </div>
      )}

      {/* Step 1: Happy Valentine */}
      {step === 1 && (
        <div className="step-1" onClick={() => setStep(2)}>
          <div className="happy-valentine">
            <h1>Happy Valentine & Happy Anniversary</h1>
            <div className="subtitle">Bé My ❤️</div>
            <p className="click-instruction">Bé My nhấn típ nha ❤️</p>
          </div>
        </div>
      )}

      {/* Step 2: Thiệp lật */}
      {step === 2 && (
        <div className="step-2">
          <div className="card-container">
            <div className={`card ${cardFlipped ? 'flipped' : ''}`} onClick={handleFlipCard}>
              <div className="card-front">
                <img src="/src/assets/BeMy.jpg" alt="Valentine Card" />
              </div>
              <div className="card-back">
                <p>
                  Gửi vợ với tình thương bao ngập ưới.<br />
                  Thấy tuy chỉ chết vì là em, Tekoai<br />
                  khác tay kinh gìa cũu mà sửi với e<br />
                  muốn thật gian kiến được lại với<br />
                  chờ thôi. Chúc em sĩ tốt công anh<br />
                  cho xứng hạ vẫn thái cho đời aký. ❤️
                </p>
              </div>
            </div>
            <p className="card-instruction">Nhấn vào thiệp để lật ❤️</p>
          </div>
        </div>
      )}

      {/* Step 3: Thiên hà */}
      {step === 3 && (
        <div className="step-3">
          <div className="galaxy-bg"></div>
          <div className="stars" id="starsContainer"></div>
          
          {/* Trái tim lớn */}
          <div className="center-heart">
            <img src="/src/assets/blue_heart.png" alt="Big Heart" />
          </div>
          
          {/* Vòng tròn ảnh cặp đôi */}
          <div className="photo-circle">
            <img src="/src/assets/couple-photo.png" alt="Couple Photo" />
          </div>
          
          {/* Container cho chữ chạy */}
          <div id="floatingTexts"></div>
        </div>
      )}
    </div>
  );
}

export default App;