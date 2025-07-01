# Smart Email Reply Generator (AI-Powered)

This project is a full-stack AI-powered application designed to generate email replies automatically based on the content and tone you choose.

It includes:

- A modern **web application** where users can paste email content and get AI-generated replies instantly.
- A lightweight **Chrome extension** that integrates directly into Gmail, allowing you to generate replies without leaving your inbox.

---

## Project Structure

```

smart-email-reply-generator/
├── assistant/      → Spring Boot API that handles AI response generation
├── frontend/     → React web application for user interaction

```

- The **frontend** is built using React and Material UI for a clean, responsive interface.
- The **backend** uses Spring Boot and Google Gemini AI to generate intelligent and context-aware replies.

---

## What It Does

- Automatically reads your email content
- Lets you choose a tone (formal, friendly, casual, etc.)
- Uses AI to draft a personalized reply
- Works either through the web UI or directly in Gmail via a browser extension

---

## Why This Project?

This project is built as a real-world, resume-ready application that showcases:

- Practical use of modern full-stack development
- Seamless integration of AI in everyday tasks
- Chrome extension development for productivity enhancement

---

## Individual Readmes

Each folder contains its own README with detailed setup and technical instructions:

- [`frontend/README.md`](./frontend/README.md) – Instructions for setting up the web UI
- [`assistant/README.md`](./backend/README.md) – Setup and API details for the Spring Boot backend

---

## Demo & Future Plans

We're working on deploying the app publicly and publishing the Chrome extension to the Web Store. Stay tuned for updates!

---

## API Keys

For privacy and security, this project uses environment variables to handle API keys and sensitive config. You’ll need to set those up in `.env` files (see individual readmes).

---

## Author

Made by [@isharaU](https://github.com/isharaU)


