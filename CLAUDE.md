# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `yarn dev` (runs on http://localhost:8080)
- **Build for production**: `yarn build`
- **Preview production build**: `yarn preview`
- **Generate static site**: `yarn generate`
- **Install dependencies**: `yarn install`

## Architecture Overview

This is a **Nuxt 4** real-time quiz platform with the following architecture:

### Core Technology Stack

- **Framework**: Nuxt 4 (Vue 3, TypeScript, file-based routing)
- **Styling**: TailwindCSS 4.x with shadcn-vue components
- **State Management**: Pinia stores
- **Real-time**: Custom Socket.IO wrapper for live updates
- **HTTP Client**: Custom ofetch wrapper with error handling
- **Forms**: vee-validate + Zod validation
- **Package Manager**: Yarn

### Key Configuration

- **Dev server**: Runs on port 8080 (configured in nuxt.config.ts:10)
- **Component auto-imports**: Disabled (nuxt.config.ts:14)
- **shadcn components**: Located in `~/components/base/` with no prefix
- **API defaults**: HTTP client defaults to `http://localhost:3000/api`, Socket.IO defaults to `ws://localhost:3000`

### Directory Structure & Patterns

**Services Layer** (`app/services/`):

- `http/http.client.ts`: Centralized HTTP client using ofetch with automatic error handling
- `socket/socket-io.client.ts`: Centralized Socket.IO wrapper with reconnection logic and error handling
- `auth.service.ts` & `session.service.ts`: Business logic services

New services must be added with consistent naming and style patterns. Each service manage single buisness entity.

**State Management** (`app/stores/`):

- Pinia stores using composition API pattern
- `auth.store.ts`: Handles user authentication with localStorage persistence
- `session.store.ts`: Manages quiz session state

New stores must be added with consistent naming and style patterns.

**Components**:

- `app/components/base/`: shadcn-vue UI components (Button, Dialog, Form, Input, etc.)
- `app/components/*/**`: Specific components divided by pages

New components must be added with consistent naming and style patterns.

**Key Implementation Details**:

- Authentication uses localStorage for persistence with auto-restoration
- HTTP client includes automatic credential handling and structured error responses
- Socket client has built-in reconnection with exponential backoff
- All services follow dependency injection pattern for testability

### Environment Configuration

The application expects these environment variables:

- `NUXT_PUBLIC_API_BASE_URL`: Backend API URL (default: http://localhost:3000/api)
- `NUXT_PUBLIC_SOCKET_URL`: Socket.IO server URL (default: ws://localhost:3000)

### Important Notes

- Components auto-import is disabled - manually import all components
- Uses `import.meta.client` for client-side only code (localStorage access)
- Error handling is centralized in service layers with consistent error objects
- All HTTP requests include credentials automatically
