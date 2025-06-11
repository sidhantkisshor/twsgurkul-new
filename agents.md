# AI Agent Guide

This guide provides instructions for AI agents working with this codebase, based on the `agents.md` specification.

## Project Structure

-   `/src`: Main source code directory.
    -   `/assets`: Static assets like images and fonts.
    -   `/pages`: Contains the main pages of the application. Each subdirectory represents a page/route.
        -   `/Home`: Components and logic for the home page.
        -   `/Footprint`: Components and logic for the Footprint page.
        -   `/Crypto`: Components and logic for the Crypto page.
    -   `App.tsx`: The root component, which defines the application's routing.
    -   `main.tsx`: The entry point of the application.
-   `/public`: Static assets that are publicly accessible.
-   `package.json`: Project dependencies and scripts.
-   `tailwind.config.js`: Tailwind CSS configuration.
-   `vite.config.ts`: Vite configuration.

## Coding Conventions

### General
-   Use TypeScript for all new code.
-   Follow the existing code style in each file.
-   Use meaningful variable and function names.
-   Add comments for complex logic.

### React
-   Use functional components with hooks.
-   Keep components small and focused on a single responsibility.
-   Ensure proper prop typing for all components.
-   Component file names should be in `PascalCase.tsx`.

### Styling
-   Use Tailwind CSS for styling.
-   Follow the utility-first approach.
-   Use custom CSS only when absolutely necessary.

## Testing Requirements

Currently, there are no testing frameworks configured in this project. When adding tests, please use a framework like Vitest or React Testing Library.

Test scripts should be added to `package.json`.

## Pull Request Guidelines

When creating a Pull Request, please ensure it:
1.  Includes a clear description of the changes.
2.  References any related issues.
3.  Keeps PRs focused on a single concern.

## Programmatic Checks

Before submitting changes, run the following checks:

```bash
# Lint check
npm run lint

# Type check (requires adding "type-check": "tsc --noEmit" to package.json scripts)
tsc --noEmit

# Build check
npm run build
```
All checks must pass before code can be merged.

## AI Agent Tooling: Stagewise

This project is equipped with `stagewise`, a powerful tool that enhances collaboration with AI-powered code editors like Cursor. `stagewise` provides a browser toolbar that connects your frontend UI directly to the AI agent in your editor.

### What is Stagewise?

`stagewise` allows you to interact with your web application's UI and send context-rich information to your AI assistant. You can:

-   **Select any DOM element** in your web app.
-   **Leave comments or instructions** on the selected element.
-   **Send DOM elements, screenshots, and metadata** to your AI agent.

This process eliminates the need to manually copy and paste code snippets or describe UI components, making the development workflow with AI agents much more efficient.

### How to use Stagewise

When you run this project in development mode (`npm run dev`), the `stagewise` toolbar will appear in your browser.

1.  **Open your application** in the browser (e.g., `http://localhost:5173`).
2.  **Use the toolbar** to select elements on the page.
3.  **Write your prompt or comment** for the AI agent in the toolbar's input field.
4.  **Send the prompt** to your AI-powered code editor.

The AI agent will receive the prompt along with the context of the selected element, allowing it to understand your request better and provide more accurate assistance.

### Supported AI Agents

`stagewise` supports several AI agents, including:

-   Cursor
-   Windsurf
-   GitHub Copilot

For an up-to-date list of supported agents and more detailed documentation, please visit the official `stagewise` website: [stagewise.io](https://stagewise.io/) 