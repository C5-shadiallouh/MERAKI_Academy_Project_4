import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ city, setCity ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");
  return (
    <div>
      Register
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
        type="text"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
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
              setMessage("Account Registered Successfully");
            })
            .catch((err) => {
              setMessage(err.response.data);
            });
        }}
      >
        Register
      </button>
      {message}
    </div>
  );
};
export default Register;
