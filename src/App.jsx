// App.jsx - Video homepage preserved + 22 games vertical scrolling below
import { useRef, useState, useEffect } from "react";
import "./App.css";

// Video imports (keep as is)
import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";

// Import your 22 game images (pic1.jpg to pic22.jpg)
import gameImg1 from "./assets/pic1.jpg";
import gameImg2 from "./assets/pic2.jpg";
import gameImg3 from "./assets/pic3.jpg";
import gameImg4 from "./assets/pic4.jpg";
import gameImg5 from "./assets/pic5.jpg";
import gameImg6 from "./assets/pic6.jpg";
import gameImg7 from "./assets/pic7.jpg";
import gameImg8 from "./assets/pic8.jpg";
import gameImg9 from "./assets/pic9.jpg";
import gameImg10 from "./assets/pic10.jpg";
import gameImg11 from "./assets/pic11.jpg";
import gameImg12 from "./assets/pic12.jpg";
import gameImg13 from "./assets/pic13.jpg";
import gameImg14 from "./assets/pic14.jpg";
import gameImg15 from "./assets/pic15.jpg";
import gameImg16 from "./assets/pic16.jpg";
import gameImg17 from "./assets/pic17.jpg";
import gameImg18 from "./assets/pic18.jpg";
import gameImg19 from "./assets/pic19.jpg";
import gameImg20 from "./assets/pic20.jpg";
import gameImg21 from "./assets/pic21.jpg";
import gameImg22 from "./assets/pic22.jpg";

function App() {
  const videoRef = useRef(null);
  const scrollRef = useRef(null);
  const videos = [video1, video2, video3];
  const [currentVideo, setCurrentVideo] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  // 22 GAMES DATA - VERTICAL SCROLLING LAYOUT (BELOW VIDEO)
  const games = [
    { id: 1, name: "Warriors", price: "$29.99", oldPrice: "$59.99", discount: "-50%", icon: "⚔️", color: "#6c63ff", image: gameImg1 },
    { id: 2, name: "Racing Extreme", price: "$39.99", oldPrice: "$69.99", discount: "-43%", icon: "🏎️", color: "#ff6b6b", image: gameImg2 },
    { id: 3, name: "Shadow Legends", price: "$24.99", oldPrice: "$49.99", discount: "-50%", icon: "🗡️", color: "#ffd93d", image: gameImg3 },
    { id: 4, name: "Fantasy Quest", price: "$34.99", oldPrice: "$54.99", discount: "-36%", icon: "🗺️", color: "#6bcb77", image: gameImg4 },
    { id: 5, name: "Zombie Survival", price: "$44.99", oldPrice: "$64.99", discount: "-31%", icon: "🧟", color: "#ff6b6b", image: gameImg5 },
    { id: 6, name: "Space Explorer", price: "$49.99", oldPrice: "$79.99", discount: "-38%", icon: "🚀", color: "#4d96ff", image: gameImg6 },
    { id: 7, name: "Dragon's Legacy", price: "$59.99", oldPrice: "$89.99", discount: "-33%", icon: "🐉", color: "#9b59b6", image: gameImg7 },
    { id: 8, name: "Cyberpunk 2078", price: "$39.99", oldPrice: "$69.99", discount: "-43%", icon: "🤖", color: "#e74c3c", image: gameImg8 },
    { id: 9, name: "Mystic Realms", price: "$34.99", oldPrice: "$59.99", discount: "-42%", icon: "🔮", color: "#1abc9c", image: gameImg9 },
    { id: 10, name: "Battle Royale X", price: "$24.99", oldPrice: "$49.99", discount: "-50%", icon: "🏆", color: "#f39c12", image: gameImg10 },
    { id: 11, name: "Horizon Zero North", price: "$59.99", oldPrice: "$79.99", discount: "-25%", icon: "🏹", color: "#3498db", image: gameImg11 },
    { id: 12, name: "FIFA Ultimate", price: "$69.99", oldPrice: "$89.99", discount: "-22%", icon: "⚽", color: "#2ecc71", image: gameImg12 },
    { id: 13, name: "Ninja Storm", price: "$29.99", oldPrice: "$54.99", discount: "-45%", icon: "🥷", color: "#e67e22", image: gameImg13 },
    { id: 14, name: "Pirate's Fortune", price: "$39.99", oldPrice: "$64.99", discount: "-38%", icon: "🏴‍☠️", color: "#16a085", image: gameImg14 },
    { id: 15, name: "Underworld Arena", price: "$44.99", oldPrice: "$74.99", discount: "-40%", icon: "🏛️", color: "#8e44ad", image: gameImg15 },
    { id: 16, name: "Steampunk Empire", price: "$49.99", oldPrice: "$69.99", discount: "-29%", icon: "⚙️", color: "#d35400", image: gameImg16 },
    { id: 17, name: "Dark Souls Legacy", price: "$59.99", oldPrice: "$79.99", discount: "-25%", icon: "💀", color: "#2c3e50", image: gameImg17 },
    { id: 18, name: "Alien Invasion", price: "$34.99", oldPrice: "$59.99", discount: "-42%", icon: "👾", color: "#27ae60", image: gameImg18 },
    { id: 19, name: "Motor GP Elite", price: "$54.99", oldPrice: "$79.99", discount: "-31%", icon: "🏍️", color: "#c0392b", image: gameImg19 },
    { id: 20, name: "Kingdom Wars", price: "$49.99", oldPrice: "$74.99", discount: "-33%", icon: "🏰", color: "#2980b9", image: gameImg20 },
    { id: 21, name: "Neon Drifter", price: "$27.99", oldPrice: "$49.99", discount: "-44%", icon: "🎵", color: "#e84393", image: gameImg21 },
    { id: 22, name: "Vampire Masquerade", price: "$39.99", oldPrice: "$59.99", discount: "-33%", icon: "🧛", color: "#6c5ce7", image: gameImg22 }
  ];

  // Game Pass free games
  const gamepassGames = [
    { name: "Little Blackjack", icon: "🃏", free: true },
    { name: "Asphalt Legends", icon: "🏎️", free: true },
    { name: "Word of the Day", icon: "📖", free: true },
    { name: "The Forex Game", icon: "💰", free: true },
    { name: "Call of Duty: Warzone", icon: "🎖️", free: true },
    { name: "ROBLOX", icon: "🟩", free: true },
    { name: "Minecraft Java", icon: "⛏️", free: true },
    { name: "Raid: Shadow Legends", icon: "⚔️", free: true },
    { name: "Candy Crush Saga", icon: "🍬", free: true },
    { name: "Fortnite", icon: "🎯", free: true },
    { name: "Forza Horizon 6", icon: "🏁", free: true },
    { name: "Club Vegas Slots", icon: "🎰", free: true }
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
    if (!container) return;
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

  const showToast = (gameName, price) => {
    setToastMessage(`✅ ${gameName} added to cart - ${price}`);
    setTimeout(() => setToastMessage(null), 2000);
  };

  const handleImageError = (e, icon, name) => {
    e.target.style.display = "none";
    const fallback = e.target.parentElement.querySelector(".img-fallback");
    if (fallback) {
      fallback.style.display = "flex";
      fallback.textContent = icon || name.slice(0, 2);
    }
  };

  return (
    <div className="app">
      {/* VIDEO SECTION - FULLSCREEN (COMPLETELY UNCHANGED) */}
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

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stat"><span className="stat-number">22+</span> <span>Premium Games</span></div>
        <div className="stat"><span className="stat-number">★ 4.8</span> <span>Average Rating</span></div>
        <div className="stat"><span className="stat-number">🔥</span> <span>Daily Deals</span></div>
        <div className="stat"><span className="stat-number">🎁</span> <span>Game Pass</span></div>
      </div>

      {/* GAMES SECTION - VERTICAL SCROLLING GRID (BELOW VIDEO) */}
      <section className="games-section">
        <div className="section-header">
          <h2 className="section-title">🔥 Featured Games</h2>
          <div className="stats-info">22 epic titles available</div>
        </div>

        <div className="games-grid">
          {games.map((game) => (
            <div className="game-card" key={game.id}>
              <div className="card-image">
                <img 
                  src={game.image} 
                  alt={game.name}
                  onError={(e) => handleImageError(e, game.icon, game.name)}
                />
                <div className="img-fallback" style={{ display: "none" }}>
                  {game.icon}
                </div>
                <span className="discount-badge">{game.discount}</span>
              </div>
              <div className="card-info">
                <h3>{game.name}</h3>
                <div className="prices">
                  <span className="old">{game.oldPrice}</span>
                  <span className="current">{game.price}</span>
                </div>
                <button 
                  className="buy-btn"
                  onClick={() => showToast(game.name, game.price)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GAME PASS SECTION */}
      <section className="gamepass-section">
        <div className="gamepass-header">
          <h2>🎮 Game Pass · Free to Play</h2>
          <div className="gamepass-badge">STANDARD · INCLUDED</div>
        </div>
        <div className="gamepass-grid">
          {gamepassGames.map((game, idx) => (
            <div className="gamepass-item" key={idx}>
              <div className="gamepass-icon">{game.icon}</div>
              <div className="gamepass-info">
                <h4>{game.name}</h4>
                <p>{game.free ? "Free" : "Game Pass"}</p>
              </div>
              <button 
                className="gamepass-get-btn"
                onClick={() => showToast(game.name, "Free")}
              >
                Get
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES SECTION */}
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
        <p>© 2024 GameStore. All rights reserved. | 22+ premium games available</p>
      </footer>

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="cart-toast show">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default App;