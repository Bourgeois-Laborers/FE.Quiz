# FE.Quiz

A real-time quiz platform built with Nuxt 4, Vue 3, and Socket.IO. Create and join interactive quiz sessions with live updates and seamless user experience.

## Tech Stack

- **Framework**: Nuxt 4 (Vue 3, TypeScript)
- **Styling**: TailwindCSS 4.x with shadcn-vue components
- **State Management**: Pinia
- **Real-time Communication**: Socket.IO Client
- **HTTP Client**: ofetch (built-in Nuxt)
- **Form Validation**: vee-validate + Zod
- **Icons**: Lucide Vue Next
- **Package Manager**: Yarn

## Prerequisites

- Node.js 18+
- Yarn package manager
- Backend API server (default: `http://localhost:3000/api`)
- Socket.IO server (default: `ws://localhost:3000`)

## Setup

1. **Install dependencies**:

```bash
yarn install
```

2. **Environment Configuration** (optional):
   Create a `.env` file in the root directory:

```env
NUXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
NUXT_PUBLIC_SOCKET_URL=ws://localhost:3000/api
```

## Development

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Preview the production build locally:

```bash
yarn preview
```

Generate static site:

```bash
yarn generate
```

## Project Structure

```
app/
├── components/          # Vue components
│   ├── base/           # shadcn-vue UI components
├── composables/        # Vue composables
├── layouts/            # Nuxt layouts
├── pages/              # File-based routing
├── services/           # API and Socket.IO services
├── stores/             # Pinia state stores
└── assets/             # Static assets and styles
```
