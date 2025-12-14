# 🧰 GitHub User Activity CLI

A simple **Node.js command‑line application** that fetches and displays a GitHub user's recent activity using the GitHub public API. This project demonstrates CLI design, API consumption, error handling, and asynchronous JavaScript execution.

Project from https://roadmap.sh/projects/github-user-activity

---

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-25.x-green?style=for-the-badge&logo=node.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![GitHub API](https://img.shields.io/badge/GitHub-API-black?style=for-the-badge&logo=github)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</div>

---

## 📚 Table of Contents

1. Quick Start
2. Features
3. Project Structure
4. How It Works
5. CLI Usage
6. Tech Stack
7. License

---

## 🚀 Quick Start

Install dependencies:

```
npm install
```

Run the CLI:

```
node index.js <github_username>
```

Example:

```
node index.js farhank08
```

---

## ✨ Features

- Fetches real‑time GitHub activity
- Uses GitHub Events API
- Proper error handling for invalid users or network issues
- Clean async/await structure
- Minimal, fast, and dependency‑light CLI tool

---

## 📂 Project Structure

```
GitHub User Activity CLI/
├─ index.js
└─ package.json
```

---

## 🔧 How It Works

1. Reads the GitHub username from `process.argv`.
2. Sends a GET request to GitHub’s public events API:  
   `https://api.github.com/users/<username>/events`
3. Parses and logs each event (commits, issues, pushes, etc.).
4. Handles rate limits, missing users, and errors gracefully.

---

# 📘 CLI Usage

### **Command Format**

| Command                    | Description                               |
| -------------------------- | ----------------------------------------- |
| `node index.js <username>` | Fetches GitHub event history for the user |

### Example Output

```
Recent activity for torvalds:
- Pushed to repo linux
- Created branch topic/arm-fixes
- Commented on issue #12345
...
```

---

## 🧱 Tech Stack

| Layer          | Technology           |
| -------------- | -------------------- |
| Runtime        | Node.js              |
| HTTP Client    | Native fetch / HTTPS |
| Input Handling | Node process.argv    |
| Output         | Console logging      |

---

## 📜 License

MIT License — free for educational and portfolio use.
