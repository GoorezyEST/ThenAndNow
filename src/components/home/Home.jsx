import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home_container">
      <div className="home_content">
        <p className="home_title">My Work</p>
        <div className="home_buttons">
          <a href="/then" rel="noopener noreferrer" className="home_button">
            Then
          </a>
          <a href="/now" rel="noopener noreferrer" className="home_button">
            Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
