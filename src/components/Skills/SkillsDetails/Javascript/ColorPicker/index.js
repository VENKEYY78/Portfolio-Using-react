import { useState } from "react";

import "./index.css";

const ColorPicker = () => {
  const [bgColor, setBgColr] = useState("#ffffff");

  const changeColor = (color) => {
    setBgColr(color);
  };

  return (
    <div
      className="main-bg-container text-center d-flex flex-column justify-content-center"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="heading-01">Color Picker</h1>
      <div className="mt-3 mb-4">
        <button className="button-01" onClick={() => changeColor("#e0e0e0")}>
          #e0e0e0
        </button>
        <button className="button-02" onClick={() => changeColor("#6fcf97")}>
          #6fcf97
        </button>

        <button className="button-03" onClick={() => changeColor("#56ccf2")}>
          #56ccf2
        </button>

        <button className="button-04" onClick={() => changeColor("#bb6bd9")}>
          #bb6bd9
        </button>
      </div>
      <p className="paragragh">
        Background Color :
        <span className="span-01" id="selectedColorHexCode">
          {bgColor}
        </span>
      </p>
      <p>
        Try clicking on one of the colors above to change the background color
        of this page!
      </p>
    </div>
  );
};

export default ColorPicker;
