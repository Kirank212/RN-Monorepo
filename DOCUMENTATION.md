
# Project Architecture

## Overview

This monorepo hosts a React Native mobile app and a React Native Web app that share state, API services, and UI components. The repo is organized with NPM workspaces to centralize dependency management while keeping app-specific runtime requirements isolated.

## Goals

- Share business logic and UI components across mobile and web.
- Keep React versions app-specific to avoid runtime conflicts.
- Maintain a scalable structure for adding more apps or packages.
- Enforce consistent TypeScript and linting standards across the workspace.

## High-Level Structure

- apps/
	- RNMobileApp: Native iOS/Android app
	- RNWebApp: Web app (React Native Web + React DOM)
- packages/
	- shared: Redux store, API clients, hooks, types, utilities
	- ui: Cross-platform UI components
- scripts/
	- postinstall: Workspace setup utilities

## Folder Structure

```
RN-Monorepo/
├── apps/
│   ├── RNMobileApp/
│   │   ├── App.tsx
│   │   ├── app.json
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── navigation/
│   │       └── screens/
│   └── RNWebApp/
│       ├── public/
│       ├── src/
│       │   ├── App.tsx
│       │   ├── index.tsx
│       │   └── screens/
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   ├── shared/
│   │   ├── src/
│   │   │   ├── api/
│   │   │   ├── hooks/
│   │   │   ├── store/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   └── package.json
│   └── ui/
│       ├── src/
│       │   └── components/
│       └── package.json
├── scripts/
│   └── postinstall.js
├── package.json
└── tsconfig.json
```

## Dependency Strategy

### App-Specific React Versions

- Mobile app uses React 19.x to align with the React Native runtime.
- Web app uses React 18.x for compatibility with React DOM and React Native Web.

This keeps each runtime stable and avoids React internals mismatches across platforms.

### Shared Packages

- Shared packages declare `react` and `react-native` as peer dependencies.
- Apps provide the actual React runtime versions.
- Shared packages avoid bundling their own React copies.

## Module Boundaries

### apps/RNMobileApp

- Entry point: app bootstrap and navigation setup.
- Uses the shared Redux store and hooks from packages/shared.
- Uses UI primitives from packages/ui.
- Platform-native dependencies remain here (e.g., React Native config).

### apps/RNWebApp

- Web entry point that wires React DOM and React Native Web.
- Reuses the same screens and store as the mobile app.
- Has web-specific tooling and bundler configuration.

### packages/shared

- Redux store, slices, and async thunks.
- API service layer for remote data access.
- Types and utility helpers shared across apps.

### packages/ui

- Cross-platform UI components.
- Styling and theming hooks (if present) are centralized here.

## Usage of Shared Packages

### Shared Store (packages/shared)

- Exposes a Redux store and typed hooks.
- Apps import the store and wrap their root with `Provider`.
- Async thunks and API services live here to ensure consistency.

### Shared UI (packages/ui)

- Provides reusable components that work on web and mobile.
- Apps import components directly from `@monorepo/ui`.
- Styling is kept compatible with React Native and React Native Web.

### Typical Import Patterns

- Store and hooks from shared:
	- `@monorepo/shared`
- UI components from ui:
	- `@monorepo/ui`

## State Management

- Redux Toolkit is used for state and async flows.
- Store is created in packages/shared and imported by both apps.
- Typed hooks are exposed from shared for consistent usage.

## Navigation

- React Navigation is used for both mobile and web.
- The navigation config is shared where possible.
- Platform-specific navigation wrappers live in each app when necessary.

## Build and Tooling

- TypeScript is used across apps and packages.
- ESLint is configured at the root and used by all workspaces.
- Each app has its own build/start scripts tailored to its runtime.

## Runtime Composition

### Mobile

1. Mobile app starts the React Native runtime.
2. Shared store and UI components are imported from packages.
3. Screens render with shared logic and platform-native UI.

### Web

1. Web app starts React DOM and React Native Web.
2. Shared store and UI components are imported from packages.
3. Screens render identically with web-specific bootstrapping.

## Extension Points

- Add new shared packages under packages/ (e.g., analytics, auth).
- Add new apps under apps/ (e.g., admin web, tablet app).
- Extend shared store slices for new features.
- Add new UI components in packages/ui and consume across apps.

## Non-Goals

- A single React version across all apps is not required.
- Sharing platform-native code that is not portable.

## Summary

This architecture maximizes code reuse while preserving platform independence. Shared packages provide a clean boundary for business logic and UI primitives, while each app maintains the runtime configuration required by its platform.
