import React from "react";
import "../css/Courses.css"; // optional for styling

const Courses = () => {
  return (
    <section className="courses-coming-soon">
      <h2 style={{ color: "#036F3E", fontSize: "2.5rem", textAlign: "center", marginTop: "4rem" }}>
        Courses Coming Soon!
      </h2>
      <p style={{ color: "#036F3E80", fontSize: "1.2rem", textAlign: "center", marginTop: "1rem" }}>
        We are working on exciting IoT and Embedded Systems courses. Stay tuned for innovative content!
      </p>
    </section>
  );
};

export default Courses;
