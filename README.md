
# NovekTech Digital Menu Platform

This project is a modern, scalable digital menu platform for restaurants, built with React, TypeScript, Vite, and Shadcn UI. It supports multiple restaurants, a beautiful public menu for each, and a secure admin dashboard for restaurant owners.

## Features
- Multi-restaurant support (e.g. `/melani`, `/cocoa`, ...)
- Digital menu for each restaurant
- Centralized admin dashboard (`/admin`) for restaurant management
- Modern UI with Shadcn components (Dashboard 01, sidebar, cards, etc.)
- Ready for monorepo structure (frontend, backend, shared)
- Scalable and secure authentication (BetterAuth recommended)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Visit:
   - Home: `http://localhost:5173/`
   - Melani menu: `/melani`
   - Admin dashboard: `/admin`

## Folder Structure
```
src/
  Home.tsx           # Home page
  admin/
    Dashboard.tsx    # Admin dashboard
  restaurants/
    Melani.tsx       # Melani restaurant menu
    ...              # Other restaurants
  components/ui/     # Shadcn UI components
```

## Deployment
- Frontend: Vercel, Netlify, or cPanel (upload build output)
- Backend: Node.js (Express/Fastify/NestJS) or FastAPI (deploy separately)
- Monorepo recommended for scalability

## Authentication
- Use BetterAuth or similar for secure, scalable login and role management

## License
MIT

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
