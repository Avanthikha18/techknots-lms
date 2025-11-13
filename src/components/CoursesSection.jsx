import React from 'react';
import '../css/CoursesSection.css';

const CoursesSection = () => {
  const courses = [
    { title: "IoT Basics", instructor: "John Doe" },
    { title: "Advanced IoT Systems", instructor: "Jane Smith" },
    { title: "Embedded Systems", instructor: "Alex Johnson" },
    { title: "AI for IoT", instructor: "Emily Davis" },
  ];

  return (
    <section className="courses-section">
      <h2>Featured Courses</h2>
      <div className="courses-cards">
        {courses.map((course, idx) => (
          <div className="course-card" key={idx}>
            <h3>{course.title}</h3>
            <p>{course.instructor}</p>
            <button className="enroll-btn">Enroll Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
