# Claude Configuration for Nuxt v4 Project

## Project Information
This is a Nuxt v4 project with TypeScript support.

## Development Commands
- `yarn dev` - Start development server
- `yarn build` - Build for production

## Project Structure
- `app/` - Main application directory (Nuxt v4 convention)a
- `public/` - Static assets
- `nuxt.config.ts` - Nuxt configuration
- `package.json` - Dependencies and scripts

## App Folder Rules (Nuxt v4)
The `app/` directory follows Nuxt v4 conventions:

### Core Files
- `app.vue` - Root application component
- `error.vue` - Global error page component

### Directory Structure
- `components/` - Vue components (auto-imported)
- `composables/` - Vue composables (auto-imported)
- `layouts/` - Application layouts
- `middleware/` - Route middleware
- `pages/` - File-based routing pages
- `plugins/` - Nuxt plugins
- `server/` - Server-side code (API routes, middleware)
- `utils/` - Utility functions (auto-imported)
- `assets/` - Assets processed by build tools
- `public/` - Static assets served directly

### Auto-Import Rules
- Components in `components/` are auto-imported
- Composables in `composables/` are auto-imported
- Utilities in `utils/` are auto-imported
- Use PascalCase for component names
- Use camelCase for composables and utilities

### File Naming
- Pages: Use kebab-case (e.g., `user-profile.vue`)
- Components: Use PascalCase (e.g., `UserProfile.vue`)
- Composables: Prefix with `use` (e.g., `useAuth.ts`)
- Layouts: Use kebab-case (e.g., `default.vue`, `admin.vue`)

## Key Technologies
- Nuxt v4
- TypeScript
- Vue 3

## Notes
- This project is migrating from Quasar to Nuxt v4
- Current branch: refactor/0.0.1
- Main branch: main