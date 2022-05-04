import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const goto = useNavigate();
  const handleSubmit = () => {
    goto("/");
    alert("Message sent! We will connect to you shortly");
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form>
        <div className="form">
            <div className="formvalue">
          <label>NAME :</label>
          <input placeholder="your name" required></input>
          <br />
          <label>EMAIL :</label>
          <input type="email" placeholder="abc@gmail.com" required />
          <br />
          </div>
          {/* <input type="checkbox" id="agree">
            I agree
          </input>
          <br />
          <br /> */}
          <button id="b1" onClick={handleSubmit}>
            Connect
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
