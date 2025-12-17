# GitHub User Activity CLI

A Node.js **command-line interface (CLI)** that fetches and displays **recent public activity** for a GitHub user using the **GitHub Events API**. The tool accepts a GitHub username as input and prints a readable summary of the user’s latest activity directly in the terminal.

Project from https://roadmap.sh/projects/github-user-activity

## Prerequisites

- Node.js runtime

## Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd github-user-activity
```

2. **Install dependencies**

```bash
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
