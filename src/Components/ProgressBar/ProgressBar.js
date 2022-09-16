import React, { useContext, useState } from "react";
import "./ProgressBar.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { StateContext } from "../../Context";

const StepProgressBar = () => {
  const { state } = useContext(StateContext);

  return (
    <div className="progress-bar-container">
      <ProgressBar
        percent={16.67 * state.noOfStepsCompleted}
        width="100%"
        filledBackground={"#5a4ad1"}
        height="2px"
        unfilledBackground={"#ededed"}
      >
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              style={{
                width: "40px",
                height: "40px",
                zindex: "2",
                color: `${accomplished ? "white" : "#40434a"}`,
                fontSize: "15px",
                border: `${
                  accomplished ? "2px solid #5a4ad1" : "2px solid #ededed"
                }`,
                backgroundColor: `${
                  accomplished ? "var(--primary-bg-color)" : "white"
                }`,
              }}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              style={{
                width: "40px",
                height: "40px",
                zindex: "2",
                color: `${accomplished ? "white" : "#40434a"}`,
                fontSize: "15px",
                border: `${
                  accomplished ? "2px solid #5a4ad1" : "2px solid #ededed"
                }`,
                backgroundColor: `${
                  accomplished ? "var(--primary-bg-color)" : "white"
                }`,
              }}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              style={{
                width: "40px",
                height: "40px",
                zindex: "2",
                color: `${accomplished ? "white" : "#40434a"}`,
                fontSize: "15px",
                border: `${
                  accomplished ? "2px solid #5a4ad1" : "2px solid #ededed"
                }`,
                backgroundColor: `${
                  accomplished ? "var(--primary-bg-color)" : "white"
                }`,
              }}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              style={{
                width: "40px",
                height: "40px",
                zindex: "2",
                color: `${accomplished ? "white" : "#40434a"}`,
                fontSize: "15px",
                border: `${
                  accomplished ? "2px solid #5a4ad1" : "2px solid #ededed"
                }`,
                backgroundColor: `${
                  accomplished ? "var(--primary-bg-color)" : "white"
                }`,
              }}
            >
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default StepProgressBar;
