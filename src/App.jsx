import React from "react";
import RecurringDatePicker from "./components/RecurringDatePicker";
import "./index.css";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#8eaadeff",
        minHeight: "100vh",
        padding: "1.5rem",
      }}
    >
      <RecurringDatePicker />
    </div>
  );
}

export default App;
