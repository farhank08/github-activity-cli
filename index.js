async function getGitHubActivity(username) {
	const response = await fetch(
		`https://api.github.com/users/${username}/events`,
		{
			headers: {
				Accept: 'application/vnd.github.v3+json',
				'User-Agent': 'GitHub-Activity-Fetcher',
			},
		}
	);

	if (!response.ok) {
		if (response.status === 404) {
			throw new Error('User not found');
		} else {
			throw new Error(
				`Error fetching data: ${response.statusText}`
			);
		}
	}

	return response.json();
}

function displayActivity(events) {
	if (events.length === 0) {
		console.log('No recent activity found.');
		return;
	}

	events.forEach((event) => {
		const eventType = event.type;
		const repoName = event.repo.name;
		let action;

		switch (eventType) {
			case 'CreateEvent':
				action = `Created ${event.payload.ref_type} in ${repoName}`;
				break;
			case 'IssuesEvent':
				action = `Issue ${event.payload.issue.number} ${event.payload.action} in ${repoName}`;
				break;
			case 'PushEvent':
				action = `Pushed ${event.payload.ref} to ${repoName}`;
				break;
			case 'PullRequestEvent':
				action = `Pull request ${event.payload.number} ${event.payload.action} in ${repoName}`;
				break;
			case 'ForkEvent':
				action = `Forked ${repoName}`;
				break;
			case 'WatchEvent':
				action = `Starred ${repoName}`;
				break;
			default:
				action = `${eventType} in ${repoName}`;
				break;
		}
		console.log(`- ${action}`);
	});
}

const username = process.argv[2];

if (!username) {
	console.error('Please provide a GitHub username');
	process.exit(1);
}

getGitHubActivity(username)
	.then((events) => {
		console.log(`Recent activity for ${username}:`);
		displayActivity(events);
	})
	.catch((error) => {
		console.error(error.message);
		process.exit(1);
	});
