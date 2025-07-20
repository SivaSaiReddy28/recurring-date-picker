import React from "react";
import Calendar from "react-calendar";
import { useRecurrenceStore } from "../store/recurrenceStore";
import "react-calendar/dist/Calendar.css";

function generateRecurringDates({
  startDate,
  endDate,
  frequency,
  interval,
  daysOfWeek,
}) {
  if (!startDate) return [];

  const result = [];
  let current = new Date(startDate);
  const lastDate = endDate
    ? new Date(endDate)
    : new Date(current.getFullYear() + 1, 11, 31);

  while (current <= lastDate) {
    const dayIndex = current.getDay();

    if (
      frequency === "daily" ||
      (frequency === "weekly" && daysOfWeek.includes(dayIndex))
    ) {
      result.push(new Date(current));
    }

    if (frequency === "daily") {
      current.setDate(current.getDate() + interval);
    } else if (frequency === "weekly") {
      current.setDate(current.getDate() + 1);
    } else if (frequency === "monthly") {
      current.setMonth(current.getMonth() + interval);
    } else if (frequency === "yearly") {
      current.setFullYear(current.getFullYear() + interval);
    }
  }

  return result;
}

export default function CalendarPreview() {
  const { recurrence } = useRecurrenceStore();
  const dates = generateRecurringDates(recurrence);

  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center", // center horizontally
        alignItems: "center", // center vertically
        flexDirection: "column",
        // backgroundColor: "#e5e2e2ff", // background color red
        padding: "1rem",
        // borderRadius: "1rem",
        // boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h3
        style={{
          marginBottom: "0.5rem",
          fontWeight: "700",
          color: "#000000ff", // white text on red bg
          textAlign: "center",
        }}
      >
        Recurring Dates Preview
      </h3>
      <div
        style={{
          backgroundColor: "#ffffff", // white background for calendar
          padding: "1rem",
          borderRadius: "0.75rem",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Calendar
          className="react-calendar"
          tileClassName={({ date }) =>
            dates.some((d) => d.toDateString() === date.toDateString())
              ? "highlight"
              : ""
          }
        />
      </div>
    </div>
  );
}
