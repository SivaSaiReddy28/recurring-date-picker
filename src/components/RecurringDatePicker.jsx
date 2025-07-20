import React from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import CustomizationOptions from "./CustomizationOptions";
import DateRangePicker from "./DateRangePicker";
import CalendarPreview from "./CalendarPreview";

export default function RecurringDatePicker() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "1.5rem",
        backgroundColor: "#d3e0ebff",
        borderRadius: "1rem",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        border: "1px solid #e5e7eb",
      }}
    >
      <h2
        style={{
          fontSize: "1.75rem",
          fontWeight: "bold",
          color: "#1f2937",
          marginBottom: "1rem",
          textAlign: "center",
          borderBottom: "2px solid #e5e7eb",
          backgroundColor: "#6ce8d3ff",
          borderRadius: "0.5rem",
          padding: "0.5rem 1rem",
        }}
      >
        Recurring Date Picker
      </h2>
      <RecurrenceOptions />
      <CustomizationOptions />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
}
