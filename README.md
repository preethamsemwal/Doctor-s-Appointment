# 🏥 Healthcare Appointment Booking App

A **responsive single-page application (SPA)** built with **React** that enables users to **browse doctors**, **view detailed profiles**, and **book healthcare appointments online**.  
Appointments are stored in-memory using the **React Context API**, providing a seamless and dynamic user experience.

---

## 🚀 Features (Detailed)

### 📄 Doctor Directory (Home Page)
- Displays a curated list of doctors with:
  - 👤 Name  
  - 🩺 Specialization  
  - 🖼️ Thumbnail image  
- Each doctor card is clickable and links to their detailed profile.
- Built with a **clean grid layout** and fully **responsive design**.

---

### 👨‍⚕️ Doctor Profile Page
- Provides in-depth information about the doctor:
  - 🏅 Qualifications  
  - 📆 Experience  
  - 📝 Brief description  
- Includes a **"Book Appointment"** button that leads to a prelinked booking form.

---

### 🗓️ Book Appointment Page
- Allows users to book appointments by filling out:
  - Name
  - Email address
  - Preferred **date and time** (`datetime-local` input)
- Upon submission:
  - Appointment details are saved to context.
  - User is redirected to a **confirmation screen**.

---

### ✅ Appointment Confirmation Screen
- Displays a summary of the appointment:
  - Patient name
  - Email address
  - Date and time of appointment
- Includes a **button to return to the home page**.

---

### 📋 View Appointments
- Lists **all appointments booked in the current session**.
- Each entry displays:
  - Patient name  
  - Email  
  - Date & time  
  - Doctor ID or name
- Ideal for reviewing and managing upcoming appointments.

---

### 🧠 Global State with React Context API
- All appointment data is stored and accessed globally via **React Context**.
- Enables shared state across components **without prop drilling**.

---

### 💅 Responsive & Clean UI
- Styled using **custom CSS** for a modern, intuitive interface.
- Fully responsive across:
  - 🖥️ Desktop  
  - 📱 Mobile  
  - 💻 Tablet

---

## 🛠️ Tech Stack

- **Frontend**: React
- **State Management**: React Context API
- **Routing**: React Router v6+
- **Styling**: Custom CSS

---

## 📁 Folder Structure (Example)

