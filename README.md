# Task Tracker - MERN Stack

A full-stack Task Tracker web application built using the MERN Stack. Users can create, update, delete, and manage tasks with a responsive user interface and RESTful APIs.

---

## ScreenShots

<img width="959" height="482" alt="Screenshot 2026-06-29 104353" src="https://github.com/user-attachments/assets/4765c172-1996-434c-b30b-b8cddea71551" />

---

## 📌 Features

- Create a new task
- View all tasks
- Update existing tasks
- Delete tasks
- Mark tasks as Completed/Pending
- Form validation
- REST API integration
- MongoDB database
- Responsive UI
- Dynamic updates without page refresh

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

---


## 🚀 Live Demo

[Click here to visit project](https://task-tracker-nu-puce.vercel.app)

Backend API: https://task-tracker-wl7l.onrender.com

---

## 📂 Project Structure

```
Task-Tracker/
│
├── frontend/
│   ├── src/
│       ├── components/
│       │   ├── AddTodo
│       │   └── TodoList
│       ├──config/
│       │  └── config 
│       └── helpers/
│           └── axioHelper
│    
├── backend/
│   ├── controllers/
│   │   └── task.controller
│   ├── routes/
│   │   └── task.route
│   ├── models/
│   │   └── task.model
│   ├── db/
│   │   └── index.js
│   ├── utils/
│   │   ├── ApiError
│   │   ├── ApiResponse
│   │   └── asyncHandler
│   ├── index.js
│   ├── constant.js
│   └── app.js
│    
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Sarvesh7617/Task-Tracker.git
```

---

### Frontend

```bash
  cd frontend
  npm install
```

### ⚙️ Environment Variables

Create a .env file in the root of your project and add Backend url:
  ```env
      VITE_BACKEND_URL=your localhost backend url/api/v1
      BACKEND_URL:Your localhost backend url
  ```

### Run development server
  ```bash
    npm run dev
  ```

---


### Backend


```bash
cd Backend
```


### ⚙️ Environment Variables

Create a .env file in the root of your project:
  ```env
  PORT=5000
  MONGOOSE_URL="mongodb+srv://realUser:realPass@cluster0.xxxxx.mongodb.net"
  CORS_ORIGIN=your backend localhost url
  ```


### Run development server
  ```bash
  npm run dev
  ```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/v1/tasks | Get all tasks |
| POST | /api/v1/tasks | Create a task |
| PUT | /api/v1/tasks/:id | Update a task |
| DELETE | /api/v1/tasks/:id | Delete a task |

---

## 👨‍💻 Author

**Sarvesh Soni**

GitHub: https://github.com/your-username
