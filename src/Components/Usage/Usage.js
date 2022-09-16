import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../Context";
import "./Usage.css";

const Usage = () => {
  const { state, dispatch } = useContext(StateContext);
  const navigate = useNavigate();
  const [usage, setUsage] = useState("");

  const submitUsageDetails = () => {
    if (usage !== "") {
      dispatch({ type: "SET_USAGE", payload: usage });

      dispatch({ type: "SET_NO_OF_STEPS_COMPLETED", payload: 6 });
      navigate("/onboarding-success");
    } else {
      alert("enter all fields");
    }
  };
  return (
    <div className="page-container flex-vt jc-sa">
      <h2 className="page-header">How are you planning to use Eden?</h2>
      <h4 className="page-sub-header">
        We will streamline your setup experience accordingly.
      </h4>
      <form className="form flex-vt jc-sb jc-sa">
        <div className="cards__container flex-hz">
          <div
            className="card-container flex-vt"
            onClick={() => setUsage("personalUse")}
          >
            <p className="card__text--primary">For myself</p>
            <p className="card__text--secondary">
              Write better.Think more clearly. Stay Organized
            </p>
          </div>
          <div
            className="card-container flex-vt"
            onClick={() => setUsage("team")}
          >
            <p className="card__text--primary">With my team</p>
            <p className="card__text--secondary">
              Write better.Think more clearly. Stay Organized
            </p>
          </div>
          <div></div>
        </div>
        <button className="btn" onClick={submitUsageDetails}>
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default Usage;
