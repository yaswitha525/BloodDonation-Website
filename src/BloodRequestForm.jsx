import React, { useState } from "react";
import './blood-form.css'; 

const BloodRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodType: "",
    address: "",
    phone: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Blood Request Submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          age: "",
          bloodType: "",
          address: "",
          phone: ""
        });
      }, 3000);
    }, 1000);
  };

  return (
    <div className="form-container">
      <div className="form-header">

        <h2>Blood Request Form</h2>
      </div>
      
      {isSubmitted ? (
        <div className="success-message">
          <div className="success-icon"></div>
          <h3>Request Submitted Successfully!</h3>
          <p>Thank you for your request. We'll connect you with donors soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="blood-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder=" "
            />
            <label className="form-label">Full Name</label>
            <div className="input-line"></div>
          </div>
          
          <div className="form-row">
            <div className="form-group half">
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="form-input"
                placeholder=" "
              />
              <label className="form-label">Age</label>
              <div className="input-line"></div>
            </div>
            
            <div className="form-group half">
              <select
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                required
                className="form-input form-select"
              >
                <option value="" disabled>Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              <label className={`form-label ${formData.bloodType ? 'active' : ''}`}>Blood Type</label>
              <div className="input-line"></div>
            </div>
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="form-input"
              placeholder=" "
            />
            <label className="form-label">Address</label>
            <div className="input-line"></div>
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
              placeholder=" "
              pattern="[0-9]{10}"
            />
            <label className="form-label">Phone Number</label>
            <div className="input-line"></div>
            <span className="input-hint">10-digit number without spaces</span>
          </div>
          
          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loader"></span>
            ) : (
              'Submit Blood Request'
            )}
          </button>
          
          <div className="form-footer">
            <p>Your information is secure and will only be shared with matched donors</p>
          </div>
        </form>
      )}
    </div>
  );
};

export default BloodRequestForm;