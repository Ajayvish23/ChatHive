# 💬 ChatHive — A Simple Chat Application

ChatHive is a **Node.js + Express + MongoDB** based chat app where users can send, edit, and delete messages.
It demonstrates full CRUD (Create, Read, Update, Delete) operations using **Mongoose** and **EJS templates**.

---

## 🚀 Features

* 📨 Create new chat messages
* 👀 View all chats in a styled list
* ✏️ Edit or update existing messages
* ❌ Delete chats easily
* 🎨 Clean and minimal EJS front-end
* 💾 MongoDB for persistent data storage

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Templating Engine:** EJS
* **Middleware:** Method-Override, Express Static
* **Styling:** CSS (public folder)

---

## 📁 Project Structure

```
project/
│
├── models/
│   └── chat.js
│
├── public/
│   ├── style.css
│   └── landing.css
│
├── views/
│   ├── landing.ejs
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── app.js
└── package.json
