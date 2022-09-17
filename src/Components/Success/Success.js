import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { StateContext } from "../../Context";
import "./Success.css";

const Success = () => {
  const { state } = useContext(StateContext);

  return (
    <>
      <div className="page-container flex-vt">
        <div className="tickmark-container flex-hz">
          <FontAwesomeIcon icon={faCheck} className="tickmark-icon" />
        </div>

        <h2 className="page-header">
          Congratulations! {state.user.displayName}
        </h2>
        <h4 className="page-sub-header">
          You have completed onboarding,you can start using the Eden!
        </h4>
        <form className="form">
          <button className="btn">Launch Eden</button>
        </form>
      </div>
    </>
  );
};

export default Success;
