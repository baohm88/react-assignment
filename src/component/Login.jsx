import { useContext, useState } from "react";
import { CurrentUserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setAdmin, setLoggedin } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = userInput;

    if (username === "admin" && password === "1") {
      setLoggedin();
      setAdmin();
      return navigate("/students");
    } else if (username === "student" && password === "1") {
      setLoggedin();
      return navigate("/students");
    } else {
      alert("Wrong credentials");
    }
  }

  function handleChange(e) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <section>
        <div className="login-form-wrapper">
        <div className="login-form">
          <h3 className="center">LOG IN</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={userInput.username}
              onChange={handleChange}
              autoFocus
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userInput.password}
              onChange={handleChange}
            />

            <p className="actions">
              <button className="login-btn">Login</button>
            </p>
          </form>
        </div>
        </div>
      </section>
    </>
  );
}
