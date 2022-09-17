import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StateContext } from "../../Context";
import teamsLogo from "../../assests/team-logo.PNG";
import "./Usage.css";
import Toast from "../Toast/Toast";

const Usage = () => {
  const { state, dispatch } = useContext(StateContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [usage, setUsage] = useState(state.user.usage);

  useEffect(() => {
    if (location.pathname === "/usage") {
      dispatch({ type: "SET_NO_OF_STEPS_COMPLETED", payload: 5 });
    }
  }, [location.pathname]);

  const submitUsageDetails = (e) => {
    e.preventDefault();
    if (usage !== "") {
      dispatch({ type: "SET_USAGE", payload: usage });

      dispatch({ type: "SET_NO_OF_STEPS_COMPLETED", payload: 6 });
      navigate("/onboarding-success");
    } else {
      dispatch({ type: "TOGGLE_TOAST" });
      dispatch({ type: "SET_TOAST_TEXT", payload: "Please select Your Plan" });
    }
  };
  return (
    <div className="page-container flex-vt jc-sa">
      {state.showToast && <Toast />}
      <h2 className="page-header">How are you planning to use Eden?</h2>
      <h4 className="page-sub-header">
        We'll streamline your setup experience accordingly.
      </h4>
      <form className="form flex-vt jc-sb jc-sa">
        <div className="cards__container flex-hz">
          <div
            className="card-container flex-vt"
            onClick={() => setUsage("personalUse")}
            style={{
              border:
                usage === "personalUse"
                  ? "2px solid #5a4ad1"
                  : "2px solid #9ba0ab",
            }}
          >
            <FontAwesomeIcon
              icon={faUser}
              className="icons"
              style={{ color: usage === "personalUse" ? "#5a4ad1" : "#40434a" }}
            />
            <p className="card__text--primary">For myself</p>
            <p className="card__text--secondary">
              Write better.Think more clearly. Stay organized
            </p>
          </div>
          <div
            className="card-container flex-vt"
            onClick={() => setUsage("team")}
            style={{
              border:
                usage === "team" ? "2px solid #5a4ad1" : "2px solid #9ba0ab",
            }}
          >
            <img src={teamsLogo} className="logo-img" />
            <p className="card__text--primary">With my team</p>
            <p className="card__text--secondary">
              Wikis,docs,tasks & projects,all in one place.
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
