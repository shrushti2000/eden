import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { StateContext } from "../../Context";
import Toast from "../Toast/Toast";

const UserPersonalDetails = () => {
  const { state, dispatch } = useContext(StateContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [fullName, setFullName] = useState(state.user.fullName);
  const [displayName, setDisplayName] = useState(state.user.displayName);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch({ type: "SET_NO_OF_STEPS_COMPLETED", payload: 1 });
    }
  }, [location.pathname]);

  const submitUserPersonalDetails = (e) => {
    e.preventDefault();
    if (fullName === "" || displayName === "") {
      dispatch({ type: "TOGGLE_TOAST" });
      dispatch({
        type: "SET_TOAST_TEXT",
        payload: "Please enter all details properly",
      });
    } else {
      dispatch({ type: "SET_FULL_NAME", payload: fullName });
      dispatch({ type: "SET_DISPLAY_NAME", payload: displayName });
      dispatch({ type: "SET_NO_OF_STEPS_COMPLETED", payload: 3 });
      navigate("/workspace-details");
    }
  };

  return (
    <>
      {state.showToast && <Toast />}
      <div className="page-container flex-vt jc-sa">
        <h2 className="page-header">Welcome! First things first...</h2>
        <h4 className="page-sub-header">You can always change them later.</h4>
        <form className="form flex-vt jc-sb jc-sa">
          <label className="label-text">Full Name</label>
          <input
            className="input"
            type="text"
            placeholder="Steve Jobs"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label className="label-text">Display Name</label>
          <input
            className="input"
            type="text"
            placeholder="Steve"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <button className="btn" onClick={submitUserPersonalDetails}>
            Create Workspace
          </button>
        </form>
      </div>
    </>
  );
};

export default UserPersonalDetails;
