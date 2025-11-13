import React from "react";

const DropdownSection = ({ title, items }) => {
  return (
    <div className="dropdown-section">
      <h4>{title}</h4>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownSection;
