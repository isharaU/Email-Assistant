# Email Writer Assistant

Email Writer Assistant is a Chrome extension that adds an "AI Reply" button to Gmail's compose window. It uses an AI backend to generate professional email replies automatically.

## Features

- Adds an "AI Reply" button to Gmail compose toolbars.
- Sends the current email content to a local AI API and inserts the generated reply into the compose box.
- Works automatically when a compose window is detected.

## Installation

1. Clone or download this repository.
2. In Chrome, go to `chrome://extensions/`.
3. Enable "Developer mode" (top right).
4. Click "Load unpacked" and select the project folder.

## Usage

1. Open Gmail in your browser.
2. Click "Compose" or "Reply" to open a compose window.
3. Click the "AI Reply" button that appears in the toolbar.
4. The extension will send the email content to your local AI API (`http://localhost:8080/api/email/generate`) and insert the generated reply.

## Requirements

- Chrome browser
- Local AI backend running at `http://localhost:8080/api/email/generate`

## File Structure

- `manifest.json` - Chrome extension manifest.
- `content.js` - Main content script that injects the AI Reply button and handles logic.
- `content.css` - (Optional) Styles for the extension.

