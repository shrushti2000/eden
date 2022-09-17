import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { StateContext } from "../../Context";
import "./Toast.css";

const Toast = ({ text }) => {
  const { state, dispatch } = useContext(StateContext);

  return (
    <>
      <div class="toast__container flex-hz" id="toast__container-error">
        <p class="text-sm">{state.toastText}</p>
        <FontAwesomeIcon
          icon={faClose}
          className="fa-close"
          onClick={(e) => dispatch({ type: "TOGGLE_TOAST" })}
        />
      </div>
    </>
  );
};

export default Toast;
