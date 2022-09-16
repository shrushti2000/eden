import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../Context";
import "./WorkSpaceDetails.css";

const WorkSpaceDetails = () => {
  const { state, dispatch } = useContext(StateContext);
  const navigate = useNavigate();
  const [workspaceName, setWorkSpaceName] = useState("");
  const [workspaceURL, setWorkSpaceURL] = useState("");

  const submitWorkSpaceDetails = () => {
    if (workspaceName !== "" && workspaceURL !== "") {
      dispatch({ type: "SET_WORKSPACE_NAME", payload: workspaceName });
      dispatch({ type: "SET_WORKSPACE_URL", payload: workspaceURL });
      dispatch({ type: "SET_NO_OF_STEPS_COMPLETED", payload: 5 });
      navigate("/usage");
    } else {
      alert("enter all fields");
    }
  };
  return (
    <div className="page-container flex-vt jc-sa">
      <h2 className="page-header">Let's set up a home for all your work </h2>
      <h4 className="page-sub-header">
        You can always create another workspace later
      </h4>
      <form className="form flex-vt jc-sb jc-sa">
        <label className="label-text">Workspace Name</label>
        <input
          className="input"
          type="text"
          placeholder="Steve Jobs"
          onChange={(e) => setWorkSpaceName(e.target.value)}
        />
        <label className="label-text">
          Workspace URL<span className="text">(optional)</span>
        </label>
        <div className="input-container flex-hz">
          <div className="input-section-1 flex-hz jc-sa align-c">
            <p className="input-text">www.eden.com</p>
          </div>

          <input
            className="input-section-2"
            type="text"
            placeholder="Steve"
            onChange={(e) => setWorkSpaceURL(e.target.value)}
          />
        </div>

        <button className="btn" onClick={submitWorkSpaceDetails}>
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default WorkSpaceDetails;
