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

Select the **Blank** project template.

Enable workspaces in **package.json**:
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

Add proxy in **vite.config.ts** (client):
```bash
server: {
  proxy: {
    '/api': 'http://localhost:3000'
  }
}
```

## Run Client & Server Together
Install **concurrently** (root):
```bash
bun add -d concurrently
```

Create or update **index.ts** in the root:
```bash
import concurrently from 'concurrently';

concurrently([
  {
    name: 'server',
    command: 'bun run dev',
    cwd: 'packages/server',
    prefixColor: 'cyan',
  },
  {
    name: 'client',
    command: 'bun run dev',
    cwd: 'packages/client',
    prefixColor: 'green',
  },
]);
```

Add script in **package.json** (root):
```bash
"scripts": {
  "dev": "bun run index.ts"
}
```

Run both (root):
```bash
bun run dev
```

## TailwindCSS
```bash
cd packages/client
bun install tailwindcss @tailwindcss/vite
```

Configure **vite.config.ts** (client):
```bash
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
```

Import Tailwind in **index.css**:
```bash
@import "tailwindcss";
```

## shadcn/ui
Modify the **tsconfig.json** and the **tsconfig.app.json** (client):
```bash
 "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

Install **types/node** (client):
```bash
bun add -D @types/node
```

Modify the **vite.config.ts** (client):
```bash
import path from 'path'
...
resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
```

Initialize **shadcn** (client):
```bash
cd packages/client
bunx --bun shadcn@latest init
```

**What This Does**
- Creates a **components.json** file in the client folder
  - Tracks installed components
  - Managed internally by the CLI (do not modify manually)
- Updates **index.css** with additional theme configuration

**Installing Components**
Browse available components at:
https://ui.shadcn.com/docs/components

Example: Install a Button component:
```bash
bunx --bun shadcn@latest add button
```

**Usage**
Import the component:
```bash
import { Button } from './components/ui/button';
```

Use it in your JSX:
```bash
<Button>Click me</Button>
```

## Prettier
Install in root:
```bash
bun add -d prettier
```

For styling rules create a **.prettierrc** file in root:
```bash
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 3
}
```
- **singleQuote** – Uses single quotes (') instead of double quotes (") in JavaScript files.
Note: JSON files must always use double quotes.
- **semi** – Adds a semicolon at the end of each statement.
- **trailingComma** – Controls whether Prettier adds a trailing comma to the last item in:
  - arrays
  - objects
  - function arguments
  With "es5", trailing commas are added where valid in ES5 (but not in function definitions or inline arrow functions).

Add script in **package.json** (root):
```bash
"scripts": {
  "format": "prettier --write ."
}
```

To avoid formatting third-party code (such as dependencies), create a **.prettierignore** file in the root of your project.
This file specifies which files or directories Prettier should ignore, like node_modules, bun.lock.

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


