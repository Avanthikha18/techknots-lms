import React from "react";
import "../css/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5fdf8]">
      {/* Hero Content */}
      <div className="hero-content text-center z-10 px-4">
        <h1 className="text-5xl font-bold text-[#036F3E] mb-6">
          Welcome to Tech IoT LMS
        </h1>
        <p className="text-[#036F3E]/80 mb-6 text-lg">
          Learn IoT, Embedded Systems & Data-Driven Technology
        </p>
        <button className="bg-[#036F3E] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
          Get Started
        </button>
      </div>

      {/* IoT Devices */}
      <img src="/hero-graphics/sensor.svg" className="device device-sensor" alt="Sensor" />
      <img src="/hero-graphics/microcontroller.svg" className="device device-microcontroller" alt="Microcontroller" />
      <img src="/hero-graphics/cloud.svg" className="device device-cloud" alt="Cloud" />
      <img src="/hero-graphics/node.svg" className="device device-node" alt="IoT Node" />
<img src="/hero-graphics/gateway.svg" className="device device-gateway" alt="Gateway" />
<img src="/hero-graphics/hub.svg" className="device device-hub" alt="Hub" />
<img src="/hero-graphics/motor.svg" className="device device-motor" alt="Motor" />
<img src="/hero-graphics/actuator.svg" className="device device-actuator" alt="Actuator" />

      {/* Data flow dots */}
      <div className="data-dot data-dot-1"></div>
      <div className="data-dot data-dot-2"></div>
    </section>
  );
};

export default HeroSection;
