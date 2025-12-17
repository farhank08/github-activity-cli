# GitHub User Activity CLI

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

## Running the Application

Run the CLI by providing a GitHub username:

```bash
node index.js <username>
```

### Arguments

- `<username>` – GitHub username whose recent activity should be retrieved

If no username is provided, the CLI exits with an error message.

## Example Usage

```bash
node index.js octocat
```

This command fetches and displays the most recent public events performed by the specified GitHub user.

## How It Works

- The CLI calls GitHub’s public **Events API** for the given user
- The response is parsed and filtered into a human-readable format
- Different event types are displayed with concise summaries

## Output

The CLI displays recent activity such as:

- Repository pushes
- Issue and pull request activity
- Repository creation and other public events

Output is printed directly to standard output for easy inspection.

## Notes

- This project does not require authentication for basic usage
- Results are subject to GitHub API rate limits
- Designed as a minimal CLI utility for inspecting GitHub user activity

## License

This project is licensed under the ISC License.
