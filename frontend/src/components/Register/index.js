import React, { useState } from "react";
import axios from "axios";
import "./style.css";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  return (
    <div className="register">
      <h1>Register</h1>
      <h2 style={!message ? { display: "none" } : { display: "flex" }}>
        {message}
      </h2>
      <input
        type="text"
        placeholder="firstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="lastName "
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="city"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPasswordValidation(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder=" confirm password"
        onChange={(e) => {
          if (passwordValidation == e.target.value) {setPassword(e.target.value);}
          else {
          }
        }}
      />
      <button
        onClick={() => {
          if (passwordValidation == password) {
            axios
              .post("http://localhost:5000/users/", {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                city: city,
                password: password,
                email: email,
              })
              .then((result) => {
               setMessage("Account registered successfully");
              })
              .catch((err) => {
                setMessage(err.response.data);
              });
          } else {
            setMessage("password doesn't mat");
          }
        }}
      >
        Register
      </button>
    </div>
  );
};
export default Register;
