// App.jsx - Full version with videos + game slider below
import { useRef, useState, useEffect } from "react";
import "./App.css";

import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";

function App() {
  const videoRef = useRef(null);
  const scrollRef = useRef(null);
  const videos = [video1, video2, video3];
  const [currentVideo, setCurrentVideo] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const games = [
    { id: 1, name: "Cyber Warriors", price: "$29.99", oldPrice: "$59.99", discount: "-50%", icon: "⚔️", color: "#6c63ff" },
    { id: 2, name: "Racing Extreme", price: "$39.99", oldPrice: "$69.99", discount: "-43%", icon: "🏎️", color: "#ff6b6b" },
    { id: 3, name: "Shadow Legends", price: "$24.99", oldPrice: "$49.99", discount: "-50%", icon: "🗡️", color: "#ffd93d" },
    { id: 4, name: "Fantasy Quest", price: "$34.99", oldPrice: "$54.99", discount: "-36%", icon: "🗺️", color: "#6bcb77" },
    { id: 5, name: "Zombie Survival", price: "$44.99", oldPrice: "$64.99", discount: "-31%", icon: "🧟", color: "#ff6b6b" },
    { id: 6, name: "Space Explorer", price: "$49.99", oldPrice: "$79.99", discount: "-38%", icon: "🚀", color: "#4d96ff" },
  ];

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Autoplay blocked:", err));
    }
  }, [currentVideo]);

  const scrollSlider = (direction) => {
    const container = scrollRef.current;
    const cardWidth = 300;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setActiveIndex(Math.max(0, activeIndex - 1));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setActiveIndex(Math.min(games.length - 1, activeIndex + 1));
    }
  };

  return (
    <div className="app">
      {/* VIDEO SECTION - Fullscreen */}
      <section className="video-section">
        <video
          ref={videoRef}
          className="bg-video"
          muted
          autoPlay
          playsInline
          onEnded={handleNextVideo}
          key={currentVideo}
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        
        <div className="hero-content">
          <span className="badge">🎮 GAMING STORE</span>
          <h1 className="title">
            LEVEL UP<br />
            <span className="gradient">YOUR GAME</span>
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Numquam repellendus ut labore rem quaerat.
          </p>
          <div className="buttons">
            <button className="btn-primary">Shop Now →</button>
            <button className="btn-secondary">Watch Trailer</button>
          </div>
        </div>
        
        <div className="scroll-hint">▼ SCROLL DOWN</div>
      </section>

      {/* GAMES SECTION - Horizontal Slider */}
      <section className="games-section">
        <div className="section-header">
          <h2 className="section-title">🔥 Featured Games</h2>
          <div className="slider-controls">
            <button className="slider-arrow" onClick={() => scrollSlider('left')}>←</button>
            <button className="slider-arrow" onClick={() => scrollSlider('right')}>→</button>
          </div>
        </div>

        <div className="slider-container" ref={scrollRef}>
          {games.map((game) => (
            <div className="game-card" key={game.id}>
              <div className="card-image" style={{ background: game.color }}>
                <span className="game-icon">{game.icon}</span>
                <span className="discount">{game.discount}</span>
              </div>
              <div className="card-info">
                <h3>{game.name}</h3>
                <div className="prices">
                  <span className="old">{game.oldPrice}</span>
                  <span className="current">{game.price}</span>
                </div>
                <button className="buy-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        <div className="progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(activeIndex / (games.length - 1)) * 100}%` }}></div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section">
        <h2 className="section-title">📁 Browse Categories</h2>
        <div className="categories-grid">
          {["Action", "RPG", "Racing", "Sports", "Horror", "Adventure"].map((cat, i) => (
            <div className="category" key={i}>
              <span>{["⚔️", "🗡️", "🏎️", "⚽", "👻", "🗺️"][i]}</span>
              <h4>{cat}</h4>
              <p>{Math.floor(Math.random() * 300) + 100} games</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 GameStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;