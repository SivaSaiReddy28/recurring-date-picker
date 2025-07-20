import React from "react";
import { useRecurrenceStore } from "../store/recurrenceStore";

export default function DateRangePicker() {
  const { recurrence, setRecurrence } = useRecurrenceStore();

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ marginBottom: "0.75rem" }}>
        <label
          style={{
            display: "block",
            marginBottom: "0.25rem",
            color: "#374151",
            fontWeight: "bold",
          }}
        >
          Start Date:
        </label>
        <input
          type="date"
          value={recurrence.startDate || ""}
          onChange={(e) => setRecurrence({ startDate: e.target.value })}
          style={{
            width: "95%",
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            outline: "none",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            transition: "border-color 0.2s ease-in-out",
            backgroundColor: "#d7d7d7ff",
          }}
        />
      </div>

      <div>
        <label
          style={{
            display: "block",
            marginBottom: "0.25rem",
            color: "#374151",
            fontWeight: "bold",
          }}
        >
          End Date (optional):
        </label>
        <input
          type="date"
          value={recurrence.endDate || ""}
          onChange={(e) => setRecurrence({ endDate: e.target.value })}
          style={{
            width: "96%",
            padding: "0.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            outline: "none",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            transition: "border-color 0.2s ease-in-out",
            backgroundColor: "#d7d7d7ff",
          }}
        />
      </div>
    </div>
  );
}
