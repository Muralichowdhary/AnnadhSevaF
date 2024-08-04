import React from "react";
import "./styles/Contact.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const send = async () => {
    const response = await axios.post(
      " https://annadhsevab.onrender.com/api/contact",
      {
        name: document.querySelector("#name").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
        email: document.querySelector("#email").value,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (response.status !== 201) {
      toast.error("Failed to post Request");
      return;
    }
    toast.success("Message successfully sent");
  };

  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-form">
          <textarea
            id="message"
            name="message"
            placeholder="Enter Message"
          ></textarea>
          <div className="contact-inputs">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <input id="email" type="email" name="email" placeholder="Email" />
          </div>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Enter Subject"
          />
          <button onClick={send}>Send</button>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <i className="icon home-icon"></i>
            <p>
              Anadh Seva organization, Kukatpally.
              <br />
              Hyderabad, 501510
            </p>
          </div>
          <div className="contact-item">
            <i className="icon phone-icon"></i>
            <p>
              9867543210
              <br />
              Mon to Fri 9am to 6pm
            </p>
          </div>
          <div className="contact-item">
            <i className="icon email-icon"></i>
            <p>
              support@anadhseva.com
              <br />
              Send us your query anytime!
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;
