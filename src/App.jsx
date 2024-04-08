import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
function App() {
  return (
    <div className="app">
      <h1 style={{ color: "white" }}>User Form</h1>
      <UserForm />
    </div>
  );
}

export default App;
