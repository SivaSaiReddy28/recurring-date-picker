import React from "react";
import { useRecurrenceStore } from "../store/recurrenceStore";

export default function CustomizationOptions() {
  const { recurrence, setRecurrence } = useRecurrenceStore();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const toggleDay = (day) => {
    const updatedDays = recurrence.daysOfWeek.includes(day)
      ? recurrence.daysOfWeek.filter((d) => d !== day)
      : [...recurrence.daysOfWeek, day];
    setRecurrence({ daysOfWeek: updatedDays });
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "block",
            marginBottom: "0.25rem",
            color: "#374151",
            fontWeight: "600",
          }}
        >
          Every
        </label>
        <input
          type="number"
          min="1"
          value={recurrence.interval}
          onChange={(e) =>
            setRecurrence({ interval: parseInt(e.target.value) })
          }
          style={{
            width: "80px",
            padding: "0.25rem 0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            outline: "none",
          }}
        />{" "}
        <span style={{ color: "#010101ff" }}>{recurrence.frequency}</span>
      </div>

      {recurrence.frequency === "weekly" && (
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.25rem",
              color: "#374151",
              fontWeight: "600",
            }}
          >
            Select Days:
          </label>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center",
              padding: "0.2rem 0",
            }}
          >
            {days.map((day, idx) => (
              <button
                key={idx}
                style={{
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: recurrence.daysOfWeek.includes(idx)
                    ? "#10b981" // emerald
                    : "#f3f4f6",
                  color: recurrence.daysOfWeek.includes(idx)
                    ? "#ffffff"
                    : "#374151",
                  boxShadow: recurrence.daysOfWeek.includes(idx)
                    ? "0 4px 8px rgba(16, 185, 129, 0.3)"
                    : "none",
                  transition: "background-color 0.2s ease",
                }}
                onClick={() => toggleDay(idx)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
