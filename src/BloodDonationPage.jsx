import React from "react";
import "./BloodDonationPage.css";
import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const BloodDonationPage = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/request-blood">Receive</Link>
          <Link to="/blood-requests">Donate</Link>
          <Link to="/HospitalConnect">Hospital</Link>
        </div>
        <div className="profile-section">
          <Link to="/messages" className="icon-link"><FaEnvelope size={30} /></Link>
          <Link to="/profile" className="icon-link"><FaUserCircle size={30} /></Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="content">
        {/* Motivation Section */}
        <section className="motivation">
          <h2>Save Lives, Donate Blood</h2>
          <p>
            Every drop counts! By donating blood, you are giving someone another chance at life. Be a hero today!
          </p>
          <p>
            Blood donation is a noble act that can save up to three lives per donation. 
            It helps patients suffering from severe anemia, accidents, surgeries, and other medical conditions.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="benefits">
          <h2>Why Donate Blood?</h2>
          <ul>
            <li>Helps save lives of patients in need.</li>
            <li>Improves heart health and reduces harmful iron stores.</li>
            <li>Stimulates blood cell production.</li>
            <li>Free health check-up during donation.</li>
            <li>Gives a sense of community and fulfillment.</li>
          </ul>
        </section>

        {/* Steps Section */}
        <section className="steps">
          <h2>Steps to Follow for Blood Donation</h2>
          <ul>
            <li>Eat a healthy meal before donating.</li>
            <li>Stay hydrated by drinking plenty of water.</li>
            <li>Bring a valid ID and donor card if available.</li>
            <li>Rest and relax after donation.</li>
            <li>Avoid heavy physical activities for the rest of the day.</li>
          </ul>
        </section>

        {/* Who Can Donate Section */}
        <section className="adv">
          <h2>Who Can Donate Blood?</h2>
          <p>
            Blood donors should be healthy individuals aged 18-65, weighing at least 50 kg,
            and free from infections or medical conditions that prevent donation.
          </p>
        </section>
      </main>
    </div>
  );
};

export default BloodDonationPage;
