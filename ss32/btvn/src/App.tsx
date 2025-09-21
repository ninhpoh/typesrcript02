import React from "react";
import { useSelector } from "react-redux";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Profile from "./components/Profile";
import ListUser from "./components/ListUser";
import Counter from "./components/Counter";
import RandomNumber from "./components/RandomNumber";
import ChangeState from "./components/ChangeState";

function App() {
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  const appStyle = {
    backgroundColor: isDarkMode ? "#111" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <>
      {/* <div style={appStyle}>
        <ThemeSwitcher />
        <hr />
      </div> */}
      <Profile />
      {/* <ListUser /> */}
      {/* <Counter /> */}
      {/* <RandomNumber /> */}
      {/* <ChangeState /> */}
    </>
  );
}

export default App;
