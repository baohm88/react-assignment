import React, { useState } from "react";

export default function Contact() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleInputChange(e) {
    setUserInput((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (userInput.name === "") {
      alert("please enter your name");
      return;
    }

    if (userInput.email === "") {
      alert("please enter your email");
    }

    if (!emailIsValid(userInput.email)) {
      alert("Please enter a valid email address.");
    }

    if (userInput.subject === "") {
      alert("Please enter your subject.");
    }

    if (userInput.message === "") {
      alert("Please enter your message address.");
    }

    alert("Your message has been sent successfully. Thanks for your inquiry");
    setUserInput({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <section className="center">
      <h2>Contact</h2>
      <div className="form-control">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            value={userInput.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            value={userInput.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={userInput.subject}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            value={userInput.message}
            onChange={handleInputChange}
          ></textarea>
          <p className="actions">
            <button>Submit</button>
          </p>
        </form>
      </div>
    </section>
  );
}
