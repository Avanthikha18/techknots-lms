import React from 'react';
import '../css/IotPortal.css'; // ✅ correct path


const IotPortal = () => {
  const devices = [
    { name: "Temperature Sensor", status: "Online", battery: "90%" },
    { name: "Humidity Sensor", status: "Online", battery: "80%" },
    { name: "Smart Hub", status: "Online", connected: 12 },
    { name: "Actuator", status: "Offline", battery: "N/A" },
  ];

  return (
    <section className="iot-section">
      <h2>IoT Devices</h2>
      <div className="iot-cards">
        {devices.map((device, index) => (
          <div className="iot-card" key={index}>
            <h3>{device.name}</h3>
            <div className="iot-sub-card">
              {device.status && <p>Status: {device.status}</p>}
              {device.battery && <p>Battery: {device.battery}</p>}
              {device.connected && <p>Connected Devices: {device.connected}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IotPortal;
