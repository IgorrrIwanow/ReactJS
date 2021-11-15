  import React from "react";
  import { Switch, Route, Redirect } from 'react-router-dom';
  import "./index.css";
  import Header from "./components/Header";
  import HomePage from "./routes/Home";
  import Profile from "./routes/Profile";
  import Chats from "./routes/Chats";
  import NavBar from "./components/NavBar";

function App() {
  

  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/chats">
          <Chats />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Redirect to="/chats"/>
      </Switch>
    </div>
  );
}

export default App;
