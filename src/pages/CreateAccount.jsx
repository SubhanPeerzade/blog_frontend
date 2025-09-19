import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authActions";
import { useNavigate } from "react-router-dom";
import "../styles/CreateAccount.scss";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Note: we navigate only after a successful submit (see handleSubmit).

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // ✅ Correct

  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("[register] submit clicked", formData);
    try {
      const result = await dispatch(registerUser(formData)).unwrap();
      console.log("[register] success", result);
      navigate("/");
    } catch (err) {
      console.error("[register] failed", err);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <Typography className="signup-title" variant="h4" gutterBottom>
          Create Account
        </Typography>

        {error && <div className="signup-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
          />

          <Button
            className="signup-button"
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Create Account"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
