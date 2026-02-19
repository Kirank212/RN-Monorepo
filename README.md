# RN-Monorepo

A React Native monorepo that hosts a **mobile app** (iOS/Android) and a **web app** (React Native Web), sharing business logic, a Redux store, API services, and UI components across both platforms.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Apps](#running-the-apps)
  - [Mobile App (iOS / Android)](#mobile-app-ios--android)
  - [Web App](#web-app)
- [Building the Apps](#building-the-apps)
- [Shared Packages](#shared-packages)
- [Linting & Type Checking](#linting--type-checking)
- [Troubleshooting](#troubleshooting)

---

## Project Structure

```
RN-Monorepo/
├── apps/
│   ├── RNMobileApp/        # React Native iOS/Android app
│   └── RNWebApp/           # React Native Web app
├── packages/
│   ├── shared/             # Redux store, API clients, hooks, types, utilities
│   └── ui/                 # Cross-platform UI components
├── package.json            # Root workspace config
└── tsconfig.json
```

- **apps/RNMobileApp** — Native mobile app (React Native 0.81, React 19)
- **apps/RNWebApp** — Web app (React Native Web, React 18)
- **packages/shared** — Redux store, async thunks, API services, and shared types
- **packages/ui** — Reusable cross-platform UI components

> See [DOCUMENTATION.md](./DOCUMENTATION.md) for a detailed architecture overview.

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | >= 20 |
| npm | >= 7 |
| Xcode | Latest (iOS builds only) |
| CocoaPods | Latest (iOS builds only) |
| Android Studio | Latest (Android builds only) |

---

## Installation

Install all workspace dependencies from the **repo root**:

```bash
npm install
```

This installs dependencies for all apps and packages in one step thanks to [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

---

## Running the Apps

### Mobile App (iOS / Android)

**1. Start the Metro bundler** (keep this terminal open):

```bash
npm run dev:mobile
# or
cd apps/RNMobileApp && npm start
```

**2. Run on iOS** (in a second terminal):

```bash
cd apps/RNMobileApp
npm run ios
```

> Requires Xcode and CocoaPods. Run `cd apps/RNMobileApp/ios && pod install` first if pods are not yet installed.

**3. Run on Android** (in a second terminal):

```bash
cd apps/RNMobileApp
npm run android
```

> Requires Android Studio with a running emulator or a connected device.

---

### Web App

```bash
npm run dev:web
# or
cd apps/RNWebApp && npm start
```

The app opens automatically at **http://localhost:3000**.

---

## Building the Apps

Build shared packages first, then the apps:

```bash
# Build shared packages
npm run build:packages

# Build mobile app
npm run build:mobile

# Build web app (outputs to apps/RNWebApp/build/)
npm run build:web
```

---

## Shared Packages

| Package | Import path | Description |
|---------|-------------|-------------|
| `packages/shared` | `@monorepo/shared` | Redux store, API services, typed hooks, utilities |
| `packages/ui` | `@monorepo/ui` | Cross-platform UI components |

Example usage in an app:

```typescript
import { store, fetchUsers, RootState } from '@monorepo/shared';
import { Button } from '@monorepo/ui';
```

---

## Linting & Type Checking

Run ESLint across the entire workspace:

```bash
npm run lint
```

Run TypeScript type checks:

```bash
npm run type-check
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Metro bundler won't start | Run `npm run dev:mobile` with `-- --reset-cache` |
| iOS pod install fails | `cd apps/RNMobileApp/ios && pod install` |
| Module not found errors | Run `npm install` from the repo root |
| Port 3000 already in use (web) | `PORT=3001 npm start` inside `apps/RNWebApp` |
| Type errors | Run `npm run type-check` to see details |
| Clean all `node_modules` | `npm run clean` from the repo root |
