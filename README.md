
## 📅 Recurring Date Picker (React + Vite + Tailwind)

A customizable recurring date picker component built using **React**, **Vite**, and **Tailwind CSS**, allowing users to configure and preview recurrence options like Daily, Weekly, Monthly, or Yearly—similar to features in Google Calendar or TickTick.

---

## 🛠 Quick Setup & Usage (Single Step)

Clone the repository, install dependencies, and start the dev server in one go:


git clone https://github.com/SivaSaiReddy28/recurring-date-picker.git

cd recurring-date-picker 

npm install && npm run dev

Then open your browser and navigate to:
👉 `http://localhost:5173`

To use the component inside your app:

```jsx
import RecurringDatePicker from './components/RecurringDatePicker';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RecurringDatePicker />
    </div>
  );
}

export default App;
```

---

## 📁 Folder Structure (Overview)

```
src/
├── assets/                      # Static assets
├── components/                 # UI Components
│   ├── CalendarPreview.jsx
│   ├── CustomizationOptions.jsx
│   ├── DateRangePicker.jsx
│   ├── RecurrenceOptions.jsx
│   └── RecurringDatePicker.jsx
├── store/                      # State management (Zustand or simple store)
├── App.jsx
├── main.jsx
├── App.css
├── index.css
```

---

## 🔧 Tech Stack

* React (JSX)
* Vite (Build Tool)
* Tailwind CSS (Utility-first CSS)
* Zustand or custom store (for state management)
* JavaScript (ES6+)

---

## 👨‍💻 Author

**Siva Sai Reddy Malepati**
🔗 GitHub: [SivaSaiReddy28](https://github.com/SivaSaiReddy28)
🔗 LinkedIn: [malepati-sivasaireddy](https://www.linkedin.com/in/malepati-sivasaireddy)

---

