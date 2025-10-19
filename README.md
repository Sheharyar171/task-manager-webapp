# Task Manager Web App

## Project Overview
A simple web app for managing tasks and projects.

## GitHub Actions Workflows

### CI Pipeline (ci.yml)
- **Purpose**: Automates testing and linting on pushes to main.
- **Configuration**: Triggers on push; uses Node.js 20; runs `npm install`, `npm run lint`, `npm test`.
- **Interpreting Results**: Check the Actions tab—green checks for success, red X for failures. Artifacts include test outputs.

### Deployment Pipeline (deploy.yml)
- **Purpose**: Builds and deploys to Heroku.
- **Configuration**: Triggers on push to main; requires HEROKU_API_KEY secret.
- **Interpreting Results**: Logs show build/deploy status; visit Heroku app URL for live site.

### Scheduled Tasks (scheduled-tasks.yml)
- **Purpose**: Runs daily maintenance (e.g., backups).
- **Configuration**: Cron at midnight; uploads logs as artifacts.
- **Interpreting Results**: Download artifacts for logs; notifications via GitHub emails.

### Dependency Updates (dependency-updates.yml)
- **Purpose**: Automates npm/GitHub Actions updates via Dependabot.
- **Configuration**: Weekly schedule; creates PRs for reviews.
- **Interpreting Results**: Monitor PRs in the repo; test before merging.

### Code Review (code-review.yml)
- **Purpose**: Enforces standards and security on PRs.
- **Configuration**: Triggers on PRs; runs linting and CodeQL scans.
- **Interpreting Results**: PR checks must pass for merge; comments show issues.

### Documentation Deployment (documentation.yml)
- **Purpose**: Builds and deploys docs to GitHub Pages.
- **Configuration**: Triggers on docs changes; uses Markdown to HTML.
- **Interpreting Results**: View at https://yourusername.github.io/task-manager-webapp; logs in Actions.

### Custom Workflow (custom-workflow.yml)
- **Purpose**: Generates release notes on new releases.
- **Configuration**: Triggers on release publish; commits notes.
- **Interpreting Results**: Download artifact; integrated into repo.

## Best Practices Compliance
- Secrets for security.
- Version pinning for actions.
- Artifact uploads for traceability.
- Environment protections for deployment.
