import React from "react";
import "./After.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const colors = {
  orange: "rgb(21, 167, 252)",
  grey: "rgba(40, 40, 40, 0.75)",
};

function After() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [imgLoaded, setImgLoaded] = useState(true);
  const stars = Array(5).fill(0);
  const [textAreaValue, setTextAreaValue] = useState("");
  const navigate = useNavigate();

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleImgLoad = () => {
    console.log("Img loaded!");
    setImgLoaded(false);
  };

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentValue(0);
    setTextAreaValue("");
    navigate("../");
  };

  return (
    <div className="new">
      {imgLoaded && (
        <div className="new_loading">
          <span>Loading ...</span>
        </div>
      )}
      <div
        className="new_container"
        style={{ visibility: imgLoaded ? "hidden" : "visible" }}
      >
        <img
          src="https://i.imgur.com/k9xXlPA.jpg"
          alt="A photo of Mar del Plata"
          onLoad={handleImgLoad}
          className="new_img"
        />
        <form className="new_form" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="new_title">Mar del Plata</h2>
          <div className="new_stars">
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={26}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
          <textarea
            placeholder="What's your experience?"
            className="new_feed"
            value={textAreaValue}
            onChange={handleTextAreaChange}
          />
          <button
            className="new_btn"
            type="submit"
            disabled={currentValue < 1 || textAreaValue.trim() === ""}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default After;
