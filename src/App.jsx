import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./component/router";
import { createContext, useState } from "react";

export const CurrentUserContext = createContext({
  isAdmin: false,
  isLoggedin: false,
  setAdmin: () => {},
  setLoggedin: () => {},
  setLoggedout: () => {},
});

// export const CurrentUserContext = createContext();

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedin, setLoggedin] = useState(false);

  function updateAdminStatus() {
    setIsAdmin((state) => !state);
  }

  function handleLogin() {
    setLoggedin((state) => !state);
  }

  function handleLogout() {
    setIsAdmin(false);
    setLoggedin(false);
  }

  const ctxValue = {
    isAdmin: isAdmin,
    isLoggedin: isLoggedin,
    setAdmin: updateAdminStatus,
    setLoggedin: handleLogin,
    setLoggedout: handleLogout,
  };

  return (
    <>
      <CurrentUserContext.Provider value={ctxValue}>
        <Routes>
          {routes.map((item, index) => {
            const Page = item.component;
            const Layout = item.layout;
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
