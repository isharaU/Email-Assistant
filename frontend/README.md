# 📬 Email Reply Generator (React + MUI + Axios)

A smart email assistant that generates contextual replies based on the input email and an optional tone. Built with **React**, **Material UI**, and **Axios**. Backend API should be running locally to handle the request.

---

## 🚀 Features

- ✍️ Input original email content
- 🎯 Choose tone (optional): Formal, Casual, Friendly, etc.
- 🤖 Generate a smart email reply via backend API
- ⏳ Shows loading spinner while generating
- 🧾 Read-only output field for reply
- 📋 One-click copy to clipboard

---

## 🧰 Tech Stack

- **Frontend:** React (Vite or CRA), Material UI
- **Networking:** Axios
- **Backend:** Expects a local API at `http://localhost:8080/api/email/generate`  
  *(Returns JSON with a `reply` field or a plain string)*

---

## 📦 Installation

```bash
# Clone this repo
git clone https://github.com/isharaU/Email-Assistant.git
cd Email-Assistant

# Install dependencies
npm install

# Start the dev server
npm run dev  
````

---

## 🌐 Backend API

> Make sure your backend is running at `http://localhost:8080`.

### Example POST request:

```bash
POST /api/email/generate
Content-Type: application/json

{
  "emailContent": "Hello, I’d like to schedule a meeting next week.",
  "tone": "Formal"
}
```

### Expected Response:

```json
{
  "reply": "Dear Sir/Madam, Thank you for your message. I would be happy to arrange a meeting next week..."
}
```

## 👨‍💻 Author

Built with ❤️ by [@isharaU](https://github.com/isharaU)

---

## 📝 License

This project is licensed under the MIT License.



