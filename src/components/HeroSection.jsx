import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  // Scroll to planet data section
  const handleExploreClick = () => {
    const section = document.getElementById("planet-data");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Scroll to contact section
  const handleContactClick = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Explore the Wonders of Our Solar System</h1>

        <p>
          Discover fascinating planetary data, compare celestial bodies,
          and learn how planetary science helps humanity understand space.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={handleExploreClick}
          >
            Explore the Data
          </button>

          <button
            className="btn-secondary"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/images/planet.png"
          alt="Planet"
        />
      </div>
    </section>
  );
};

export default HeroSection;

