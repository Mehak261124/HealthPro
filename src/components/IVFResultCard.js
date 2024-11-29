import React from "react";
import { useLocation, Link } from "react-router-dom"; // Import Link for navigation
import "./IVFResultCard.css";
import coupleImage from "../assests/couple.png"; // Corrected asset path
import ScorerCircle from "./ScorerCircle"; // Import ScorerCircle component
import { IoArrowBack } from "react-icons/io5";

function IVFResultCard() {
  const location = useLocation();
  const score = location.state?.percentage || 64; // Get the score passed from Main (or default to 64)

  return (
    <>
      <div className="ivf-card">
        {/* Breadcrumb with a clickable "Home" */}
        <div className="breadcrumb1">
          <Link to="/" className="breadcrumb-link">
          <span className="arrowBefore"> Home / </span>{" "}
          </Link>
          <span className="arrowAfter">
          {" "}
          <IoArrowBack />{" "}
        </span>{" "}
        <span className="breadcrumb-active">IVF Success Rate Calculator <b>/ Result</b></span>
        </div>
        <h1 className="ivf-heading">Your estimated IVF Success Rate is</h1>
        <div className="result-container">
          <div className="chart">
            {/* Pass the dynamic score to ScorerCircle */}
            <ScorerCircle score={score} />
            <p>With 1 IVF Cycle</p>
          </div>

          <div className="image-container">
            <div className="gradient-bg"></div>
            <img src={coupleImage} alt="Couple" />
          </div>
        </div>
      </div>
    </>
  );
}

export default IVFResultCard;
