

# 📘 README.md for Task Manager MERN App

You can copy the entire content below and place it in your project root:

```
mern-task-manager/
├── frontend/
├── backend/
└── README.md   ← place it here
```

---

## 🧾 README.md

```markdown
# 📝 Task Manager (MERN Stack Project)

A full-stack **Task Manager (To-Do List)** web application built using the **MERN stack** — MongoDB, Express, React, and Node.js.  
Users can **Create**, **Read**, **Update**, and **Delete** (CRUD) tasks, as well as mark them as completed.

---

## 🚀 Features

✅ Create new tasks (with title and optional description)  
✅ View all tasks in a list format  
✅ Edit existing tasks  
✅ Delete tasks with confirmation  
✅ Mark tasks as Completed / Pending  
✅ Responsive Material UI interface  
✅ Real-time updates (no page reloads)

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React (Vite), Material UI, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Version Control | Git & GitHub |

---

## 🗂️ Project Structure

```

mern-task-manager/
│
├── frontend/                 # React (Vite) app
│   ├── src/
│   │   ├── api/api.js
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── EditTaskDialog.jsx
│   │   ├── pages/Dashboard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── .env
│
├── backend/                  # Express + MongoDB API
│   ├── config/db.js
│   ├── controllers/taskController.js
│   ├── models/Task.js
│   ├── routes/taskRoutes.js
│   ├── middleware/errorMiddleware.js
│   ├── server.js
│   └── .env
│
└── README.md

````

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/mern-task-manager.git
cd mern-task-manager
````

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/taskmanager?retryWrites=true&w=majority
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

Server runs on → **[http://localhost:5000](http://localhost:5000)**

---

### 3️⃣ Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create `.env` in `frontend/`:

```
VITE_API_BASE=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Frontend runs on → **[http://localhost:5173](http://localhost:5173)**

---

## 🧪 API Endpoints

| Method   | Endpoint         | Description                                 |
| -------- | ---------------- | ------------------------------------------- |
| `POST`   | `/api/tasks`     | Create a new task                           |
| `GET`    | `/api/tasks`     | Fetch all tasks                             |
| `PUT`    | `/api/tasks/:id` | Update task (title, description, or status) |
| `DELETE` | `/api/tasks/:id` | Delete task by ID                           |

---

## 🧠 Example JSON Request

### ➕ Add Task

```json
POST /api/tasks
{
  "title": "Finish Assignment",
  "description": "Complete the MERN project by tonight"
}
```

### ✏️ Update Task

```json
PUT /api/tasks/64c0b1234abc
{
  "title": "Finish MERN Project",
  "status": "Completed"
}
```

---

## 🖥️ Screenshots

| Home (Dashboard)                                                            | Edit Dialog                                                                     |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| ![Dashboard](https://via.placeholder.com/500x300?text=Dashboard+Screenshot) | ![Edit Dialog](https://via.placeholder.com/500x300?text=Edit+Dialog+Screenshot) |

*(Replace with your own screenshots)*

---

## 🏁 Run Both Together (Optional)

In the root folder, you can add a script to run both:

```bash
npm install concurrently --save-dev
```

Add this to root `package.json`:

```json
"scripts": {
  "dev": "concurrently \"npm run dev --prefix backend\" \"npm run dev --prefix frontend\""
}
```

Now run both servers:

```bash
npm run dev
```

---

## 🧾 Submission Checklist

✔️ All CRUD operations working
✔️ No console errors
✔️ Proper folder structure
✔️ MongoDB Atlas connected
✔️ README file included
✔️ Screenshots added
✔️ Uploaded to GitHub

---
<img width="1366" height="768" alt="alfred_backend_setup_3" src="https://github.com/user-attachments/assets/7bae9af6-09e5-4a0f-b32c-079145fd61a0" />
<img width="1366" height="768" alt="alfred_backend_2" src="https://github.com/user-attachments/assets/1e9a1a74-94ab-4ad6-a2a9-f44597151cde" />
<img width="1366" height="768" alt="task" src="https://github.com/user-attachments/assets/170147b0-346f-425a-8f58-b17bfcf9d9ce" />
<img width="1366" height="763" alt="db" src="https://github.com/user-attachments/assets/757bea76-a7ef-444a-96dc-008f524ddc56" />
<img width="1366" height="765" alt="css" src="https://github.com/user-attachments/assets/c32cb5d5-4ae2-4dcb-b910-09646a844686" />
<img width="1365" height="763" alt="api" src="https://github.com/user-attachments/assets/c2c13350-f8ac-440d-bc37-0d4ff93bacf1" />
<img width="1366" height="765" alt="alfred_frontend_1" src="https://github.com/user-attachments/assets/ed01311c-93b7-4e19-8313-65ab30f22bcc" />



