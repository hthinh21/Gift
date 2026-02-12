import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo_ready.webp";
import bookBg from "./assets/book_bg_back.webp";
import leftCupid from "./assets/left_cupid.webp";
import rightCupid from "./assets/right_cupid.webp";
import beMyCover from "./assets/BeMy.jpg";
import blueHeart from "./assets/blue_heart.png";
import Flower from "./components/flower.jsx";
function App() {
  const [step, setStep] = useState(0);
  const [showBook, setShowBook] = useState(false);
  const [bookOpened, setBookOpened] = useState(false);

  useEffect(() => {
    if (step === 1) {
      const text = "Happy Valentine & Happy Anniversary";
      const element = document.getElementById("typeText");
      let i = 0;

      element.innerHTML = "";

      const typing = setInterval(() => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(typing);
        }
      }, 133);

      return () => clearInterval(typing);
    }
    if (step === 2) {
      createStars();
      createFloatingTexts();
    }
  }, [step]);

  const createStars = () => {
    const container = document.getElementById("starsContainer");
    if (container) {
      container.innerHTML = "";
      for (let i = 0; i < 200; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";
        container.appendChild(star);
      }
    }
  };

  const createFloatingTexts = () => {
    const texts = [
      "Happy Valentine & Happy Anniversary bby 💕",
      "Anh thương bé My nhiều 💖",
      "Bé My đợi Chảy nhaaaaaaa 💗",
      "Bé My ❤️",
      "Mãi là của nhau 💝",
      "Anh thương bé My nhiềuuuuuuuu 💕",
      "Happy Valentine & Happy Anniversary bby 💖",
    ];

    const container = document.getElementById("floatingTexts");

    const addFloatingText = () => {
      if (!container) return;

      const text = document.createElement("div");
      text.className = "floating-text";
      text.textContent = texts[Math.floor(Math.random() * texts.length)];

      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const endX = (Math.random() - 0.5) * 1000;
      const endY = (Math.random() - 0.5) * 1000;

      text.style.left = startX + "px";
      text.style.top = startY + "px";
      text.style.setProperty("--tx", endX + "px");
      text.style.setProperty("--ty", endY + "px");

      container.appendChild(text);

      setTimeout(() => text.remove(), 15000);
    };

    const interval = setInterval(addFloatingText, 2000);
    for (let i = 0; i < 5; i++) {
      setTimeout(addFloatingText, i * 400);
    }

    return () => clearInterval(interval);
  };

  const handleShowBook = () => {
    setShowBook(true);
  };

  const handleOpenBook = () => {
    if (!bookOpened) {
      setBookOpened(true);
    }
  };

  return (
    <div className="app">
      {/* Step 0: Màn hình bắt đầu */}
      {step === 0 && (
        <div className="step-0">
          <div className="valentine-start" onClick={() => setStep(1)}>
            <img src={logo} alt="Valentine Start" className="valentine-image" />
            <div className="heart-icon">💕🩵💕</div>
            <p>Bé My nhấn vô đây nha 🩵🩵🩵</p>
          </div>
        </div>
      )}

      {/* Step 1: Happy Valentine + Book */}
      {step === 1 && (
        <div
          className="step-1"
          style={{
            backgroundImage: `url(${bookBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {!showBook && <Flower />}
          {/* Logo ở giữa trên */}
          <div className="logo-top-center">
            <img src={logo} alt="Logo" />
          </div>
          {/* Cupid top left */}
          <div className="cupid cupid-top-left">
            <img src={leftCupid} alt="Cupid" />
          </div>

          {/* Cupid bottom right */}
          <div className="cupid cupid-bottom-right">
            <img src={rightCupid} alt="Cupid" />
          </div>

          <div className={`happy-valentine ${showBook ? "fade-out" : ""}`}>
            <h1 id="typeText">Happy Valentine & Happy Anniversary</h1>
            <div className="subtitle">Bé My ❤️</div>
            <p className="click-instruction" onClick={handleShowBook}>
              Bé My nhấn vô đây típ giúp Chảy nha ❤️
            </p>
          </div>

          {/* Book appears after clicking */}
          {showBook && (
            <div className="book-container">
              <div
                className={`book ${bookOpened ? "opened" : ""}`}
                onClick={handleOpenBook}
              >
                {/* Book Cover */}
                <div className="book-cover">
                  <img src={beMyCover} alt="Book Cover" />
                </div>

                {/* Right Page - Text */}
                <div className="book-page book-right">
                  <div className="page-content">
                    <p>
                      <br />
                      Gửi bé My iu dấu của anh, anh cảm ơn em vì đã đến bên anh
                      <br />
                      Anh mong rằng mình sẽ cùng nhau tạo ra nhiều kỷ niệm đẹp
                      trong tương lai.
                    </p>
                  </div>
                </div>
              </div>

              {!bookOpened && (
                <p className="book-instruction">
                  Nhấn vô hình để mở nha bóe ❤️
                </p>
              )}

              {bookOpened && (
                <div
                  className="book-instruction-continue"
                  onClick={() => setStep(2)}
                >
                  Bé My thúi nhấn vô đây típ nè 🤔🤔🤔
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Step 2: Thiên hà */}
      {step === 2 && (
        <div className="step-3">
          <div className="galaxy-bg"></div>
          <div className="stars" id="starsContainer"></div>

          {/* Trái tim lớn */}
          <div className="center-heart">
            <img src={blueHeart} alt="Big Heart" />
          </div>

          {/* Vòng tròn ảnh cặp đôi */}
          <div className="photo-circle">
            <img src={beMyCover} alt="Couple Photo" />
          </div>

          {/* Container cho chữ chạy */}
          <div id="floatingTexts"></div>
        </div>
      )}
    </div>
  );
}

export default App;
