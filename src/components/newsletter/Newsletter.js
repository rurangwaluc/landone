import { useState } from "react";
import styled from "styled-components";
import db from "./firebase";
import firebase from "firebase/compat/app";

import './Newsletter.scss';


const Newsletter = ({ myTheme }) => {
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");
    const inputHandler = (e) => {
      setInput(e.target.value);
    };
    const submitHandler = (e) => {
      e.preventDefault();
      if (input) {
        console.log(input);
        // add to firebase
        db.collection("emails").add({
          email: input,
          time: firebase.firestore.FieldValue.serverTimestamp(),
          
        });
        setInput("");
        setMessage("Thank you for Subscribing!!!");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    };
    return (
      <div className="newsletter" data-theme={myTheme}>
        <div className="wrapper">
        <div  id="subscribebox">
        <i class="fa fa-envelope fa-4x"></i>
        <h3>Join Our Newsletter</h3>
          <form onSubmit={submitHandler}>
          
            <input type="email" id="email-input" onChange={inputHandler} value={input} />
            <button id="subscribe-button" type="submit">Submit</button>
          </form>
          {message && <Alert>{message}</Alert>}
        </div>
        </div>
      </div>
    );
};



const Alert = styled.p`
  position: relative;
  padding: 0.4rem;
  margin: 0.5rem;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(13, 148, 13, 0.685);
  color: #ffffff;
  backdrop-filter: blur(10px);
  z-index: 3;
`;

export default Newsletter