import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("https://rentify-backend-xi.vercel.app/login", formData);
      console.log(response.data);
      // Handle successful login (e.g., store token, redirect to dashboard)
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="p-4 rounded-lg max-width-400 w-100">
        <h1 className="text-white mb-4 text-center">Login</h1>
        <div className="row justify-content-center">
          <div className="col-md-4">
            {error && <div className="alert alert-danger mb-3">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#799351", borderColor: "#799351" }}>Login</button>
            </form>
          </div>
        </div>
        <div className="row mt-3 text-center">
          <div className="col">
            <p className="text-dark mb-0">Don't have an account? <Link to="/register" className="text-success text-decoration-none">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
