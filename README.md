

---

# 📚 StudyTogether – An Ed-Tech Platform

**StudyTogether** is a fully functional ed-tech platform that enables users to **create, consume, and rate educational content**. Built using the **MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS)**, it provides a seamless learning experience for students and a platform for instructors to showcase their expertise.

---

## 🚀 Features

### 👩‍🎓 For Students

* Browse and explore courses.
* Wishlist and cart checkout functionality.
* Access purchased course content (videos, documents, etc.).
* Manage profile and account details.

### 👨‍🏫 For Instructors

* Dashboard to manage courses.
* Create, update, and delete courses.
* View course ratings and feedback.
* Detailed insights into course performance.

### 🛠️ For Admin (Future Scope)

* Manage instructors and students.
* View platform-wide insights and revenue reports.
* Course and user management capabilities.

---

## 🏗️ System Architecture

The platform follows a **client-server architecture** with three main components:

* **Frontend (ReactJS + Redux + Tailwind CSS)**
* **Backend (NodeJS + ExpressJS)**
* **Database (MongoDB Atlas)**

Cloudinary is used for media storage, and Razorpay is integrated for payments.

---

## 🎨 Frontend

* Built using **ReactJS** with **Redux** for state management.
* UI designed in **Figma** and styled with **Tailwind CSS**.
* Key pages:

  * Homepage
  * Course List
  * Wishlist
  * Cart & Checkout
  * Course Content
  * User Profile & Edit Profile
  * Instructor Dashboard, Insights & Course Management

---

## ⚙️ Backend

* **Node.js + Express.js** for RESTful APIs.
* **MongoDB + Mongoose** for data storage.
* **JWT** for authentication & authorization.
* **Bcrypt** for secure password hashing.
* **Cloudinary** for media storage.
* **Razorpay** for payment integration.

### 🔑 Key Functionalities

* User Authentication (with OTP & Forgot Password).
* Course Management (CRUD operations).
* Payment Handling with Razorpay.
* Media Management with Cloudinary.
* Markdown support for content formatting.

---

## 🗄️ Database Schema

* **Student Schema** → name, email, password, enrolled courses.
* **Instructor Schema** → name, email, password, created courses.
* **Course Schema** → title, description, instructor, media, ratings.

---

## 🌐 API Design

RESTful APIs built with **Express.js**.

### Sample Endpoints

* `POST /api/auth/signup` → Create new user.
* `POST /api/auth/login` → Authenticate user.
* `GET /api/courses` → Fetch all courses.
* `GET /api/courses/:id` → Fetch course details.
* `POST /api/courses` → Create course (Instructor only).
* `PUT /api/courses/:id` → Update course.
* `DELETE /api/courses/:id` → Delete course.
* `POST /api/courses/:id/rate` → Rate a course.

---


## 🔮 Future Enhancements

* 🎮 **Gamification** (badges, leaderboards, points).
* 📚 **Personalized learning paths** for students.
* 🤝 **Social learning** (group discussions, peer reviews).
* 📱 **Mobile App** (React Native / Flutter).
* 🤖 **AI-powered recommendations**.
* 🕶️ **VR/AR integration** for immersive learning.

---

## 📂 Project Structure

```
StudyTogether/
│── frontend/        # ReactJS Frontend
│── backend/         # NodeJS + ExpressJS Backend
│── models/          # Mongoose Schemas
│── routes/          # API Routes
│── controllers/     # Business Logic
│── config/          # DB & Cloud Config
│── public/          # Static Assets
│── README.md
```

---

## 🛠️ Tech Stack

* **Frontend:** ReactJS, Redux, TailwindCSS
* **Backend:** NodeJS, ExpressJS
* **Database:** MongoDB + Mongoose
* **Authentication:** JWT, Bcrypt
* **Payments:** Razorpay
* **Media:** Cloudinary

---

## 📌 Conclusion

**StudyTogether** is designed to provide:

* ✅ An immersive learning experience for students.
* ✅ A scalable platform for instructors.
* ✅ A robust backend with secure authentication and payments.

Future improvements like **gamification, AI recommendations, and mobile support** will further enhance the platform’s capabilities.

---

✨ *Developed with MERN Stack for modern, scalable, and engaging ed-tech solutions.*

---

Would you like me to also **add a logo + shields.io badges (tech stack, license, build, etc.)** at the top so the README looks more **GitHub polished**?
