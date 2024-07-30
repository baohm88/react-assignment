import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../App";
import t2404ePic from '../assets/T2404E.jpg';

function Home() {
  const { isLoggedin } = useContext(CurrentUserContext);

  return (
    <>
      <section className="center">
        <h1>Welcome to T2404E</h1>
        {!isLoggedin && (
          <p>
            <Link to="/login">Log In</Link> to view Students
          </p>
        )}
        <img className="responsive" src={t2404ePic} alt="t2404e" />
      </section>
    </>
  );
}

export default Home;
