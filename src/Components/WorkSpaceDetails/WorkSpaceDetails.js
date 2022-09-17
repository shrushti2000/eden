import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StateContext } from "../../Context";
import Toast from "../Toast/Toast";
import "./WorkSpaceDetails.css";

const WorkSpaceDetails = () => {
  const { state, dispatch } = useContext(StateContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [workspaceName, setWorkSpaceName] = useState(state.user.workspaceName);
  const [workspaceURL, setWorkSpaceURL] = useState(state.user.workspaceURL);
  const [validUrl, setValidUrl] = useState(false);

  useEffect(() => {
    if (location.pathname === "/workspace-details") {
      dispatch({ type: "SET_NO_OF_STEPS_COMPLETED", payload: 3 });
    }
  }, [location.pathname]);

  const submitWorkSpaceDetails = (e) => {
    e.preventDefault();

    if (workspaceName !== "") {
      dispatch({ type: "SET_WORKSPACE_NAME", payload: workspaceName });

      dispatch({ type: "SET_WORKSPACE_URL", payload: workspaceURL });

      dispatch({ type: "SET_NO_OF_STEPS_COMPLETED", payload: 5 });
      navigate("/usage");
    } else {
      dispatch({ type: "TOGGLE_TOAST" });
      dispatch({
        type: "SET_TOAST_TEXT",
        payload: "Enter workspace name correctly",
      });
    }
  };
  return (
    <div className="page-container flex-vt jc-sa">
      {state.showToast && <Toast />}
      <h2 className="page-header">Let's set up a home for all your work </h2>
      <h4 className="page-sub-header">
        You can always create another workspace later.
      </h4>
      <form className="form flex-vt jc-sb jc-sa">
        <label className="label-text">Workspace Name</label>
        <input
          className="input"
          type="text"
          placeholder="Eden"
          value={workspaceName}
          onChange={(e) => setWorkSpaceName(e.target.value)}
        />
        <label className="label-text">
          Workspace URL<span className="text">(optional)</span>
        </label>
        <div className="input-container flex-hz">
          <div className="input-section-1 flex-hz jc-sa align-c">
            <p className="input-text">www.eden.com/</p>
          </div>

          <input
            className="input-section-2"
            type="text"
            placeholder="Example"
            value={workspaceURL}
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
