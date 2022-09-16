import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserPersonalDetails from "./Components/UserPersonalDetails/UserPersonalDetails";
import WorkSpaceDetails from "./Components/WorkSpaceDetails/WorkSpaceDetails";
import Usage from "./Components/Usage/Usage";
import Success from "./Components/Success/Success";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import StepProgressBar from "./Components/ProgressBar/ProgressBar";
import logoImage from "./assests/eden-logo.PNG";
import { useContext } from "react";
import { StateContext } from "./Context";

function App() {
  const { state, dispatch } = useContext(StateContext);
  return (
    <>
      <div className="hero-container flex-hz">
        <img className="hero-logo" src={logoImage} />
        <h2 className="hero-text">Eden</h2>
      </div>
      <StepProgressBar />
      <Routes>
        <Route path="/" exact element={<UserPersonalDetails />}></Route>
        <Route path="/workspace-details" element={<WorkSpaceDetails />}></Route>
        <Route path="/usage" element={<Usage />}></Route>
        <Route path="/onboarding-success" element={<Success />}></Route>
      </Routes>
    </>
  );
}

export default App;
