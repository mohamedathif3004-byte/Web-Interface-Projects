import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    aadharName: "",
    phone: "",
    pan: "",
    email: "",
    password: "",
    confirmPassword: "",
    aadhar: "",
    dob: "",
    gender: "",
    permanentAddress: "",
    currentAddress: "",
    sameAddress: false,
    photo: null,
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "sameAddress") {
      setFormData({
        ...formData,
        sameAddress: checked,
        currentAddress: checked ? formData.permanentAddress : "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
        currentAddress:
          formData.sameAddress && name === "permanentAddress"
            ? value
            : formData.currentAddress,
      });
    }
  };

  // Handle photo upload
  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file && file.size > 2 * 1024 * 1024) {
      setErrors({
        ...errors,
        photo: "Photo size must be less than 2 MB",
      });

      setFormData({
        ...formData,
        photo: null,
      });
    } else {
      setFormData({
        ...formData,
        photo: file,
      });

      setErrors({
        ...errors,
        photo: "",
      });
    }
  };

  // Form validation
  const validate = () => {
    let newErrors = {};

    // Username
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    // Aadhar Name
    if (!formData.aadharName.trim()) {
      newErrors.aadharName = "Aadhar Name is required";
    }

    // Username and Aadhar Name must be same
    if (
      formData.username &&
      formData.aadharName &&
      formData.username !== formData.aadharName
    ) {
      newErrors.aadharName =
        "Username and Aadhar Name must be the same";
    }

    // Phone Number
    const phoneRegex = /^\+\d{1,3}\d{10}$/;

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone =
        "Enter valid phone number with country code";
    }

    // PAN Card
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (!panRegex.test(formData.pan)) {
      newErrors.pan = "Invalid PAN Number";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid Email";
    }

    // Password
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number and special character";
    }

    // Confirm Password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Aadhar Number
    const aadharRegex = /^\d{12}$/;

    if (!aadharRegex.test(formData.aadhar)) {
      newErrors.aadhar = "Aadhar must be 12 digits";
    }

    // DOB
    if (!formData.dob) {
      newErrors.dob = "DOB is required";
    }

    // Gender
    if (!formData.gender) {
      newErrors.gender = "Select Gender";
    }

    // Permanent Address
    if (!formData.permanentAddress.trim()) {
      newErrors.permanentAddress =
        "Permanent Address is required";
    }

    // Current Address
    if (!formData.currentAddress.trim()) {
      newErrors.currentAddress =
        "Current Address is required";
    }

    // Photo
    if (!formData.photo) {
      newErrors.photo = "Upload Photo";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully!");
    }
  };

  // Clear form
  const handleClear = () => {
    setFormData({
      username: "",
      aadharName: "",
      phone: "",
      pan: "",
      email: "",
      password: "",
      confirmPassword: "",
      aadhar: "",
      dob: "",
      gender: "",
      permanentAddress: "",
      currentAddress: "",
      sameAddress: false,
      photo: null,
    });

    setErrors({});
  };

  return (
    <div className="container">

      <h1>User Registration Form</h1>

      <p className="subtitle">
        Please enter your details carefully
      </p>

      <form onSubmit={handleSubmit}>

        {/* Username */}
        <div className="form-group">
          <label>* Username</label>

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
          />

          <span>{errors.username}</span>
        </div>

        {/* Aadhar Name */}
        <div className="form-group">
          <label>* Aadhar Name</label>

          <input
            type="text"
            name="aadharName"
            placeholder="Enter Name as per Aadhar"
            value={formData.aadharName}
            onChange={handleChange}
          />

          <span>{errors.aadharName}</span>
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>* Phone Number</label>

          <input
            type="text"
            name="phone"
            placeholder="+919876543210"
            value={formData.phone}
            onChange={handleChange}
          />

          <span>{errors.phone}</span>
        </div>

        {/* PAN */}
        <div className="form-group">
          <label>* PAN Card</label>

          <input
            type="text"
            name="pan"
            placeholder="ABCDE1234F"
            value={formData.pan}
            onChange={handleChange}
          />

          <span>{errors.pan}</span>
        </div>

        {/* Email */}
        <div className="form-group">
          <label>* Email</label>

          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />

          <span>{errors.email}</span>
        </div>

        {/* Password */}
        <div className="form-group">
          <label>* Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />

          <span>{errors.password}</span>
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label>* Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <span>{errors.confirmPassword}</span>
        </div>

        {/* Aadhar Number */}
        <div className="form-group">
          <label>* Aadhar Number</label>

          <input
            type="text"
            name="aadhar"
            placeholder="Enter 12 Digit Aadhar Number"
            value={formData.aadhar}
            onChange={handleChange}
          />

          <span>{errors.aadhar}</span>
        </div>

        {/* DOB */}
        <div className="form-group">
          <label>* Date of Birth</label>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          <span>{errors.dob}</span>
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>* Gender</label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <span>{errors.gender}</span>
        </div>

        {/* Permanent Address */}
        <div className="form-group full-width">
          <label>* Permanent Address</label>

          <textarea
            name="permanentAddress"
            placeholder="Enter Permanent Address"
            value={formData.permanentAddress}
            onChange={handleChange}
          />

          <span>{errors.permanentAddress}</span>
        </div>

        {/* Same Address */}
        <div className="checkbox-group full-width">

          <input
            type="checkbox"
            name="sameAddress"
            checked={formData.sameAddress}
            onChange={handleChange}
          />

          <label>Same as Permanent Address</label>

        </div>

        {/* Current Address */}
        <div className="form-group full-width">
          <label>* Current Address</label>

          <textarea
            name="currentAddress"
            placeholder="Enter Current Address"
            value={formData.currentAddress}
            onChange={handleChange}
          />

          <span>{errors.currentAddress}</span>
        </div>

        {/* Photo */}
        <div className="form-group full-width">
          <label>* Upload Photo</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
          />

          <small>
            Maximum photo size: 2 MB
          </small>

          <span>{errors.photo}</span>
        </div>

        {/* Buttons */}
        <div className="buttons full-width">

          <button type="submit" className="submit-btn">
            Submit
          </button>

          <button
            type="button"
            className="clear-btn"
            onClick={handleClear}
          >
            Clear
          </button>

        </div>

      </form>

    </div>
  );
}

export default App;