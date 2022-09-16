import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { StateContext } from "../../Context";


const UserPersonalDetails = () => {
  const { state, dispatch } = useContext(StateContext);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
 

  const submitUserPersonalDetails = () => {
    if (fullName !== "" && displayName !== "") {
      dispatch({ type: "SET_FULL_NAME", payload: fullName });
      dispatch({ type: "SET_DISPLAY_NAME", payload: displayName });
      dispatch({ type: "SET_NO_OF_STEPS_COMPLETED", payload: 3 });
      navigate("/workspace-details");
    } else {
      alert("enter all fields")
    }
  };

  return (
    <div className="page-container flex-vt jc-sa">
      <h2 className="page-header">Welcome! First things first</h2>
      <h4 className="page-sub-header">You can always change them later</h4>
      <form className="form flex-vt jc-sb jc-sa">
        <label className="label-text">Full Name</label>
        <input
          className="input"
          type="text"
          placeholder="Steve Jobs"
          onChange={(e) => setFullName(e.target.value)}
        />
        <label className="label-text">Display Name</label>
        <input
          className="input"
          type="text"
          placeholder="Steve"
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <button className="btn" onClick={submitUserPersonalDetails}>
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default UserPersonalDetails;
