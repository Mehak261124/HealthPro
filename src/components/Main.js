import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the navigate hook
import "./Main.css";
import { IoArrowBack } from "react-icons/io5";

export default function MainPage() {
  const [ivfCycles, setIvfCycles] = useState(1); // IVF Cycles state
  const [age, setAge] = useState(null); // Store selected age range
  const [icsi, setIcs] = useState(null); // Store ICSI procedure selection
  const [pgt, setPgt] = useState(null); // Store PGT Testing selection
  const [conditions, setConditions] = useState({
    pcos: false,
    endometriosis: false,
    lowOvarianReserve: false,
    maleFactorInfertility: false,
  }); // Store selected medical conditions

  const navigate = useNavigate(); // Use the navigate hook to navigate between pages

  // Calculate average age based on selected age range
  const getTotalAge = () => {
    switch (age) {
      case "under30":
        return 30;
      case "30-34":
        return 64;
      case "35-37":
        return 72;
      case "38-40":
        return 78;
      case "41-43":
        return 84;
      case "above43":
        return 43; // Example for above 43 years
      default:
        return 0; // Default case if no age is selected
    }
  };

  // Calculate the percentage
  const calculatePercentage = () => {
    const totalAge = getTotalAge();
    return totalAge && ivfCycles ? Math.round(totalAge / ivfCycles) : 0;
  };
  const handleSliderChange = (event) => {
    setIvfCycles(event.target.value);
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    if (name === "age") setAge(value);
    if (name === "icsi") setIcs(value);
    if (name === "pgt") setPgt(value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setConditions((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleCalculate = () => {
    const percentage = calculatePercentage();
    // Navigate to the result page with the percentage
    navigate("/result", { state: { percentage } });
  };

  return (
    <main className="main-container">
      <div className="breadcrumb">
        <span className="arrowBefore"> Home / </span>{" "}
        <span className="arrowAfter">
          {" "}
          <IoArrowBack />{" "}
        </span>{" "}
        <span className="breadcrumb-active">IVF Success Rate Calculator</span>
      </div>

      <div className="main-div">
        <h2 className="main-title">Which age range applies to you?</h2>
        <div className="radio-group">
          <label className={age === "under30" ? "selected" : ""}>
            <input
              type="radio"
              name="age"
              value="under30"
              onChange={handleRadioChange}
            />
            Under 30
          </label>
          <label className={age === "30-34" ? "selected" : ""}>
            <input
              type="radio"
              name="age"
              value="30-34"
              onChange={handleRadioChange}
            />
            Between 30 - 34
          </label>
          <label className={age === "35-37" ? "selected" : ""}>
            <input
              type="radio"
              name="age"
              value="35-37"
              onChange={handleRadioChange}
            />
            Between 35 - 37
          </label>
          <label className={age === "38-40" ? "selected" : ""}>
            <input
              type="radio"
              name="age"
              value="38-40"
              onChange={handleRadioChange}
            />
            Between 38 - 40
          </label>
          <label className={age === "41-43" ? "selected" : ""}>
            <input
              type="radio"
              name="age"
              value="41-43"
              onChange={handleRadioChange}
            />
            Between 41 - 43
          </label>
          <label className={age === "above43" ? "selected" : ""}>
            <input
              type="radio"
              name="age"
              value="above43"
              onChange={handleRadioChange}
            />
            Above 43
          </label>
        </div>
      </div>

      {/* IVF Cycles Section */}
      <div className="main-div">
        <h2 className="main-title">Number of IVF Cycles?</h2>
        <div className="slider-container" style={{ width: "100%" }}>
          <div
            className="slider-value"
            style={{
              left: `${(ivfCycles - 1) * 33.33}%`,
            }}
          >
            {ivfCycles}
          </div>
          <input
            type="range"
            min="1"
            max="4"
            step="1"
            value={ivfCycles}
            onChange={handleSliderChange}
            className="range-slider"
            style={{
              background: `linear-gradient(to right, #e57e69 0%, #e57e69 ${
                (ivfCycles - 1) * 33.33
              }%, #ececec ${(ivfCycles - 1) * 33.33}%, #ececec 100%)`,
            }}
          />
        </div>
      </div>

      {/* Previous Procedures Section */}
      <div className="main-div">
        <h2 className="main-title">
          Have you undergone these procedures before?
        </h2>
        <div className="radio-group1">
          <div className="radioDiv">
            <span className="radioTitle">ICSI Procedure:</span>
            <label className={icsi === "yes" ? "selected" : ""}>
              <input
                type="radio"
                name="icsi"
                value="yes"
                onChange={handleRadioChange}
              />
              Yes
            </label>
            <label className={icsi === "no" ? "selected" : ""}>
              <input
                type="radio"
                name="icsi"
                value="no"
                onChange={handleRadioChange}
              />
              No
            </label>
          </div>
          <div className="radioDiv">
            <span className="radioTitle">PGT Testing:</span>
            <label className={pgt === "yes" ? "selected" : ""}>
              <input
                type="radio"
                name="pgt"
                value="yes"
                onChange={handleRadioChange}
              />
              Yes
            </label>
            <label className={pgt === "no" ? "selected" : ""}>
              <input
                type="radio"
                name="pgt"
                value="no"
                onChange={handleRadioChange}
              />
              No
            </label>
          </div>
        </div>
      </div>

      {/* Medical Conditions Section */}
      <div className="main-div">
        <h2 className="main-title">
          Do you have any of these medical conditions?
        </h2>
        <div className="checkbox-group">
          <label className={conditions.pcos ? "selected" : ""}>
            <input
              type="checkbox"
              name="pcos"
              checked={conditions.pcos}
              onChange={handleCheckboxChange}
            />
            PCOS
          </label>
          <label className={conditions.endometriosis ? "selected" : ""}>
            <input
              type="checkbox"
              name="endometriosis"
              checked={conditions.endometriosis}
              onChange={handleCheckboxChange}
            />
            Endometriosis
          </label>
          <label className={conditions.lowOvarianReserve ? "selected" : ""}>
            <input
              type="checkbox"
              name="lowOvarianReserve"
              checked={conditions.lowOvarianReserve}
              onChange={handleCheckboxChange}
            />
            Low Ovarian Reserve
          </label>
          <label className={conditions.maleFactorInfertility ? "selected" : ""}>
            <input
              type="checkbox"
              name="maleFactorInfertility"
              checked={conditions.maleFactorInfertility}
              onChange={handleCheckboxChange}
            />
            Male Factor Infertility
          </label>
        </div>
      </div>

      <button className="calculate-button" onClick={handleCalculate}>
        Calculate
      </button>
    </main>
  );
}
