import React from "react";
import "../SupportItems/SupportItems.css";

const SupportItem = ({ icon, title, description }) => {
  return (
    <div className="support-item">
      <img src={icon} alt={title} className="icon" />
      {/* <div className="icon">{icon}</div> */}
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

// SupportItem.propTypes = {
//   icon: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

export default SupportItem;
