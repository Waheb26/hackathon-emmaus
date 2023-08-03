import { useNavigate } from "react-router-dom";
import "./Estimate.css";
import desktopIcon from "/desktop_icon.jpg";
import tabletIcon from "/tablet_icon.jpg";
import phoneIcon from "/phone_icon.jpg";
function Estimate() {
  const navigate = useNavigate();
  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="estimate_main_div">
      <h1 className="estimate_title">Nouvelle Estimation </h1>
      <div className="estimate_div_button">
        <button
          className="estimate_button"
          onClick={() => handleButtonClick("/laptopForm")}
        >
          <img src={desktopIcon} alt="" />
        </button>
        <button
          className="estimate_button"
          onClick={() => handleButtonClick("/tabletForm")}
        >
          <img src={tabletIcon} alt="" />
        </button>
        <button
          className="estimate_button"
          onClick={() => handleButtonClick("/Form")}
        >
          <img src={phoneIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
export default Estimate;
