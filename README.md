# 🌌 Cosmic Explorer

**Cosmic Explorer** is a full-stack web application for exploring and sharing information about planets in our universe. Built with Node.js, Express.js, and MongoDB, the app allows registered users to create and manage planet posts, like planets, and search the cosmos—all with robust validation and secure authentication.

---

## 🚀 Features

- **Home Page:** Welcoming landing page with navigation to key areas.
- **Planet Catalog:** Browse all planet posts with image previews and quick details.
- **Planet Details:** See complete information and interact based on your login status.
- **User System:** Register, log in, and log out securely (bcrypt-hashed passwords).
- **Create/Edit/Delete Planets:** Authenticated users can manage their own planet posts.
- **Like Planets:** Users can like planet posts they don’t own—one like per planet per user.
- **Search:** Filter planets by name or solar system (case-insensitive).
- **Custom 404 Page:** Friendly error handling with navigation options.
- **Strong Route Guards:** Only authorized users can access protected actions/pages.
- **Clear Error Messages:** All forms provide helpful feedback on validation errors.

---

## 🛠️ Technology Stack

- **Node.js** & **Express.js** – Back-end server & routing
- **MongoDB** & **Mongoose** – Database & ORM
- **Express-Handlebars** (or EJS/Pug) – View engine for server-rendered pages
- **bcrypt** – Password hashing
- **HTML, CSS, JavaScript** – Front-end (uses provided static resources)

---

## ⚡ Getting Started

1. **Install dependencies**

    ```bash
    npm install
    ```

2. **Start the application**

    ```bash
    npm run start
    ```

   - The server runs from `index.js` on **port 3000**.

3. **Open in browser**

   Go to [http://localhost:3000](http://localhost:3000)

---

## 🔒 Security & Validation

- Passwords are hashed with bcrypt.
- Route guards enforce access control for all sensitive actions/pages.
- User input is validated both client-side and server-side.
- Users see clear, actionable error messages in forms.

---

## 📄 License

This project is for educational and demonstration purposes.

---

## 🙏 Acknowledgments

- [Express](https://expressjs.com/)
- [MongoDB](https://mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- HTML/CSS resources provided as part of the exam

---

> Enjoy exploring the universe with **Cosmic Explorer**!
