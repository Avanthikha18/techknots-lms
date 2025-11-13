import React from "react";
import DropdownSection from "./DropdownSection";
import "../css/ExploreDropdown.css";

const sections = [
  {
    title: "Trending Courses",
    items: ["AI & ML", "IoT", "Data Science", "Cybersecurity"],
  },
  {
    title: "Categories",
    items: ["Programming", "Robotics", "Cloud Computing", "Networking"],
  },
];

const ExploreDropdown = () => {
  return (
    <div className="dropdown-container">
      {sections.map((section, idx) => (
        <DropdownSection key={idx} title={section.title} items={section.items} />
      ))}
    </div>
  );
};

export default ExploreDropdown;
