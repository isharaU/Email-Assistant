# Sinhala Email Reply Generator (AI-Powered)

This project is a full-stack, AI-powered application designed to automatically generate **email replies in Sinhala** based on the content and tone you choose.

It includes:

* A modern **web application** where users can paste email content and get AI-generated Sinhala replies instantly.
* A lightweight **Chrome extension** that integrates directly into Gmail, allowing you to generate replies without leaving your inbox.

---

## Project Structure

```
smart-email-reply-generator/
├── assistant/        → Spring Boot API that handles AI response generation
├── frontend/         → React web application for user interaction
├── assistant-ext/    → Chrome extension to integrate with Gmail
```

* The **frontend** is built using React and Material UI for a clean, responsive interface.
* The **backend** uses Spring Boot and Google Gemini AI to generate intelligent and context-aware Sinhala replies.
* The **Chrome extension** injects an “AI Reply” button directly into Gmail, calling your backend API to generate and insert a response.

---

## What It Does

* Automatically reads your email content
* Lets you choose a tone (formal, friendly, casual, etc.)
* Uses AI to draft a personalized **Sinhala reply**
* Works either through the web UI or directly in Gmail via a browser extension

---

## Chrome Extension: Email Writer Assistant

The **Email Writer Assistant** is a Chrome extension that enhances Gmail with AI-generated Sinhala replies.

### Features

* Adds an "AI Reply" button inside Gmail's compose toolbar
* Sends the current email content to your backend API
* Inserts the AI-generated **Sinhala response** into the email compose area

### Installation

1. Clone or download this repository
2. Go to `chrome://extensions/` in your Chrome browser
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select the `assistant-ext/` folder

### Usage

1. Open Gmail and click **Compose** or **Reply**
2. You’ll see a new **AI Reply** button in the toolbar
3. Click it to auto-generate a reply using the backend running at `http://localhost:8080/api/email/generate` (or your deployed URL)

### Key Files

* `manifest.json` – Chrome extension manifest
* `content.js` – Script that injects the reply button and handles logic
* `content.css` – (Optional) Styling for the injected button

---

## Demo & Future Plans

* **Chrome Extension Demo:** Try the AI-powered **Sinhala email reply assistant** online:
  [https://email-assistant-liart.vercel.app/](https://email-assistant-liart.vercel.app/)

We’re still working on full public deployment and publishing the Chrome extension to the Web Store. Stay tuned for updates!

---

## API Keys

For privacy and security, this project uses **environment variables** to handle API keys and sensitive config. You’ll need to set those up in `.env` files (see individual READMEs).

---

## Individual READMEs

* [`frontend/README.md`](./frontend/README.md) – Instructions for setting up the web UI
* [`assistant/README.md`](./assistant/README.md) – Setup and API details for the Spring Boot backend
* [`assistant-ext/README.md`](./assistant-ext/README.md) – Setup and usage for the Chrome extension

---

## Author

Made by [@isharaU](https://github.com/isharaU)
