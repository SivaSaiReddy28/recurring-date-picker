import React from "react";
import { useRecurrenceStore } from "../store/recurrenceStore";

const frequencies = ["Daily", "Weekly", "Monthly", "Yearly"];

export default function RecurrenceOptions() {
  const { recurrence, setRecurrence } = useRecurrenceStore();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        marginBottom: "1rem",
      }}
    >
      {frequencies.map((freq) => (
        <button
          key={freq}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
            backgroundColor:
              recurrence.frequency.toLowerCase() === freq.toLowerCase()
                ? "#2563eb" // blue
                : "#f3f4f6", // light gray
            color:
              recurrence.frequency.toLowerCase() === freq.toLowerCase()
                ? "#ffffff"
                : "#374151",
            boxShadow:
              recurrence.frequency.toLowerCase() === freq.toLowerCase()
                ? "0 4px 10px rgba(37, 99, 235, 0.4)"
                : "none",
            transition: "background-color 0.2s ease",
          }}
          onClick={() =>
            setRecurrence({ frequency: freq.toLowerCase(), interval: 1 })
          }
        >
          {freq}
        </button>
      ))}
    </div>
  );
}
