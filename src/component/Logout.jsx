import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { setLoggedout } = useContext(CurrentUserContext);

  const navigate = useNavigate();

  useEffect(() => {
    setLoggedout();
    return navigate("/");
  });

  return;
}
