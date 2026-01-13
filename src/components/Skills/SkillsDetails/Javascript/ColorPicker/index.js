// Simport { useState } from "react";
import "./index.css";

const button1 = () => {
  //const [isActive, setIsActive] = useState(false);
  console.log("clicked1");
};

const button2 = (click) => {
  console.log("clicked2");
};

const button3 = (click) => {
  console.log("clicked");
};

const button4 = (click) => {
  console.log("clicked");
};

const ColorPicker = () => (
  <div
    className="main-bg-container text-center d-flex flex-column justify-content-center"
    id="colorPickerContainer"
  >
    <h1 className="heading-01">Color Picker</h1>
    <div className="mt-3 mb-4">
      <button className="button-01" onClick={button1}>
        #e0e0e0
      </button>
      <button className="button-02" onClick={button2}>
        #6fcf97
      </button>
      <button className="button-03" onClick={button3}>
        #56ccf2
      </button>
      <button className="button-04" onClick={button4}>
        #bb6bd9
      </button>
    </div>
    <p className="paragragh">
      Background Color :
      <span className="span-01" id="selectedColorHexCode">
        #fffff
      </span>
    </p>
    <p>
      Try clicking on one of the colors above to change the background color of
      this page!
    </p>
  </div>
);

export default ColorPicker;
