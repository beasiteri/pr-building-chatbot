# Bun React Express Full-Stack Boilerplate

A modern full-stack starter template built with:
- **[Bun](https://bun.com)** – fast JavaScript runtime 
- **Express** – backend API
- **React** + **Vite** + **TypeScript** – frontend
- **TailwindCSS** – styling
- **shadcn/ui** – UI components
- **Prettier** – code formatting
- **Husky** + **lint-staged** – pre-commit formatting
  
Designed for scalable full-stack development using a clean monorepo structure.

## Setup
```bash
# Install Bun (once)
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# Create project
mkdir <project-name>
cd <project-name>
bun init
```

Enable workspaces in package.json:
```bash
"workspaces": ["packages/*"]
```

Create structure:
```bash
packages/
  client/
  server/
```

## Backend
```bash
cd packages/server
bun init
bun add express
bun add -d @types/express
```

Run server:
```bash
bun run index.ts
```

## Frontend (React + Vite + TS)
```bash
cd packages/client
bun create vite .
bun install
bun run dev
```

Add proxy in vite.config.ts:
```bash
server: {
  proxy: {
    '/api': 'http://localhost:3000'
  }
}
```

## Run Client & Server Together
Install concurrently (root):
```bash
bun add -d concurrently
```

Add script in root package.json:
```bash
"scripts": {
  "dev": "bun run index.ts"
}
```

Run both:
```bash
bun run dev
```

## TailwindCSS
```bash
cd packages/client
bun install tailwindcss @tailwindcss/vite
```

Add Tailwind plugin to vite.config.ts and import in index.css:
```bash
@import "tailwindcss";
```

## shadcn/ui
```bash
cd packages/client
bunx --bun shadcn@latest init
bunx --bun shadcn@latest add button
```

## Prettier
Install in root:
```bash
bun add -d prettier
```

Add .prettierrc and script:
```bash
"scripts": {
  "format": "prettier --write ."
}
```

Run:
```bash
bun run format
```

## Husky + lint-staged (Pre-commit formatting)
```bash
bun add -d husky lint-staged
bunx husky init
```

In .husky/pre-commit:
```bash
bunx lint-staged
```

Create .lintstagedrc in root:
```bash
{
  "*.{js,jsx,ts,tsx,css}": "prettier --write"
}
```

### Notes
- Add an empty line at the end of files.
- Avoid hidden spaces in file/folder names.
- To check for invalid characters:
```bash
ls -la | cat -A
```


