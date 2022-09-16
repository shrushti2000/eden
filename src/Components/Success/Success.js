import React from "react";

const Success = () => {
  return (
    <>
      <div className="page-container flex-vt jc-sa">
        <h2 className="page-header">Congratulations! Eren</h2>
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
