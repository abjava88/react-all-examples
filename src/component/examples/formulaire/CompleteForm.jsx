import React, { useRef, useEffect, useState } from "react";

const CompleteForm = () => {
  const inputRef = useRef(null);
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [isMounted, setIsMounted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsMounted(true);
    inputRef.current && inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Le nom d'utilisateur est requis.";
    }
    if (!formData.email) {
      newErrors.email = "L'adresse email est requise.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "L'adresse email est invalide.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      if (newErrors.username) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: isMounted ? "green" : "black" }}>
        Exemple de formulaire complet
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              ref={inputRef}
            />
            {errors.username && (
              <span style={{ color: "red", marginLeft: "5px" }}>{errors.username}</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span style={{ color: "red", marginLeft: "5px" }}>{errors.email}</span>
            )}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CompleteForm;
