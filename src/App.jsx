import { useState, useEffect } from "react";
import "./App.css";
import BeMy4 from "./assets/BeMy4.jpg";
import BeMy9 from "./assets/BeMy9.jpg";
import BeMy10 from "./assets/BeMy10.jpg";
import BeMy11 from "./assets/BeMy11.jpg";
import BeMy12 from "./assets/BeMy12.jpg";
import BeMy13 from "./assets/BeMy13.jpg";
import BeMy14 from "./assets/BeMy14.jpg";
import BeMy15 from "./assets/BeMy15.jpg";
import BeMy16 from "./assets/BeMy16.jpg";
import BeMy17 from "./assets/BeMy17.jpg";
import BeMy18 from "./assets/BeMy18.jpg";
import logo from "./assets/logo_ready.webp";
import bookBg from "./assets/book_bg_back.webp";
import leftCupid from "./assets/left_cupid.webp";
import rightCupid from "./assets/right_cupid.webp";
import beMyCover from "./assets/BeMy.jpg";
import Flower from "./components/flower.jsx";

function App() {
  const [step, setStep] = useState(0);
  const [showFlower, setShowFlower] = useState(false);
  const [showBook, setShowBook] = useState(false);
  const [bookOpened, setBookOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại

  useEffect(() => {
    if (step === 1) {
      const text = "Happy Valentine's Day & Happy Anniversary";
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
    "Anh thương vợ nhiềuuuuuuuu 💕",
    "Happy Valentine & Happy Anniversary bby 💖",
  ];

  // THÊM MẢNG HÌNH
  const images = [BeMy4, BeMy9, BeMy10, BeMy11, BeMy12, BeMy13, BeMy14, BeMy15, BeMy16, BeMy17, BeMy18];

  const container = document.getElementById("floatingTexts");

  const addFloatingText = () => {
    if (!container) return;

    const isImage = Math.random() > 0.6;

    if (isImage) {
      const img = document.createElement("img");
      img.className = "floating-image";
      img.src = images[Math.floor(Math.random() * images.length)];

      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const endX = (Math.random() - 0.5) * 1000;
      const endY = (Math.random() - 0.5) * 1000;

      img.style.left = startX + "px";
      img.style.top = startY + "px";
      img.style.setProperty("--tx", endX + "px");
      img.style.setProperty("--ty", endY + "px");

      container.appendChild(img);
      setTimeout(() => img.remove(), 15000);
    } else {
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
    }
  };

  const interval = setInterval(addFloatingText, 2000);
  for (let i = 0; i < 5; i++) {
    setTimeout(addFloatingText, i * 400);
  }

  return () => clearInterval(interval);
};

  const handleShowFlower = () => {
    setShowFlower(true);
  };

  const handleShowBook = () => {
    setShowBook(true);
  };

  const handleOpenBook = () => {
    if (!bookOpened) {
      setBookOpened(true);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageContents.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

const pageContents = [
  {
    left: <img src={BeMy4} alt="Page 1" />,
    right: (
      <>
        <br />
        Gửi Vợ My thúiii,
        <br />
        <br />
        Đây là mùa Valentine đầu tiên tụi mình iu xa nhệ, chưa được nắm tay
        nhau, chưa được ôm nhau, nhưng anh lúc nào cũng ở cạnh em nhaaa. 
        <br />
        <br />
        Cảm ơn em vì đã xuất hiện trong cuộc đời anh, cảm ơn em đã kiên nhẫn,
        đã chờ đợi và đã thương Chảy nhìu đến zậy.
      </>
    ),
  },
  {
    left: <img src={BeMy11} alt="Page 2" />,
    right: (
      <>
        <br />
        Anh
        chưa tặng em được bó hoa mùa Valentine năm nay, nhưng anh hy vọng bó
        hoa nhỏ em vừa thấy sẽ làm em vui.
        <br />
        <br />
        Cảm ơn em vì đã xuất hiện trong cuộc đời anh,
      </>
    ),
  },
  {
    left: <img src={BeMy12} alt="Page 3" />,
    right: (
      <>
        <br />
        Cảm ơn em đã kiên nhẫn, đã chờ đợi và đã thương Chảy nhìu tới zậyyyy.
        <br />
      </>
    ),
  },
  {
    left: <img src={BeMy9} alt="Page 4" />,
    right: ( 
      <>
        <br />
        Dù khoảng cách có xa bao nhiêu đi nữa, anh vẫn lun thương em kakaka.
        <br />       
        <br />
        Cảm ơn em vì đã tin tưởng anh và đã cho anh cơ hội cho anh được đến bên em.
        <br />       
        <br />
        Anh thưn em nhìu lắm bé My thúi ới ời ơi 💕
      </>
    ),
  },
  {
    left: <img src={BeMy10} alt="Page 5" />,   
    right: (
      <>
        <br />
        Happy Valentine's Day 💕
        <br />
        <br />
        Happy Anni! 🎉
        <br />
        <br />
        Anh thương vợ nhèooo lắmmmm 💖
        <br />
        <br />
        From Chảy 😜😜
      </>
    ),
  },
  
];

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
          {showFlower && !showBook && <Flower />}
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

          <div
            className={`happy-valentine ${
              showFlower || showBook ? "fade-out" : ""
            }`}
          >
            <h1 id="typeText">
              Happy Valentine's Day <br />& Happy Anniversary
            </h1>
            <div className="subtitle">Bé My ❤️</div>
            <p className="click-instruction" onClick={handleShowFlower}>
              Nhấn zô đây có quà cho
              <br />
              Bé My thúiiiiiiii
            </p>
          </div>

          {showFlower && !showBook && (
            <div className="flower-continue" onClick={handleShowBook}>
              Chưa hết đâu cục dànggg, nhấn zô đây còn nữaaaa
            </div>
          )}

          {/* Book appears after clicking */}
          {showBook && (
            <div className="book-container">
              <div className={`book ${bookOpened ? "opened" : ""}`}>
                {/* Book Cover */}
                <div className="book-cover" onClick={handleOpenBook}>
                  <img src={beMyCover} alt="Book Cover" />
                </div>

                {/* Left Page */}
                <div className="book-page book-left">
                  <div className="page-content">
                    {typeof pageContents[currentPage].left === "string" ? (
                      <p>{pageContents[currentPage].left}</p>
                    ) : (
                      pageContents[currentPage].left
                    )}
                  </div>
                </div>

                {/* Right Page */}
                <div className="book-page book-right">
                  <div className="page-content">
                    <p>{pageContents[currentPage].right}</p>
                  </div>
                </div>
              </div>

              {!bookOpened && (
                <p className="book-instruction">
                  Nhấn vô hình để mở nha bóe ❤️
                </p>
              )}

              {bookOpened && (
                <>
                  {/* Navigation buttons */}
                  <div className="page-navigation">
                    {currentPage > 0 && (
                      <button className="nav-btn prev-btn" onClick={handlePrevPage}>
                        ← Trang trước
                      </button>
                    )}
                    {currentPage < pageContents.length - 1 && (
                      <button className="nav-btn next-btn" onClick={handleNextPage}>
                        Trang sau →
                      </button>
                    )}
                  </div>

                  {currentPage === pageContents.length - 1 && (
                    <div
                      className="book-instruction-continue"
                      onClick={() => setStep(2)}
                    >
                      Bé My thúi nhấn vô đây để típ nè 🤔🤔🤔
                    </div>
                  )}
                </>
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
            <img src={logo} alt="Big Heart" />
          </div>

          {/* Container cho chữ chạy */}
          <div id="floatingTexts"></div>
        </div>
      )}
    </div>
  );
}

export default App;