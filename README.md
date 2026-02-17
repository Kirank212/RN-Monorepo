# React Native Monorepo

A monorepo structure for React Native applications with shared packages and components.

## Project Structure

```
RN-Monorepo/
├── apps/                    # React Native applications
│   └── main/               # Main app (created with React Native CLI)
├── packages/               # Shared packages
│   ├── ui/                 # UI components library
│   └── shared/             # Shared utilities and libraries
├── package.json           # Root workspace configuration
└── tsconfig.json          # TypeScript configuration
```

## Setup

### Prerequisites
- Node.js >= 16
- Yarn >= 3.x (or npm)
- React Native CLI

### Installation

1. Install dependencies:
```bash
yarn install
```

2. Link packages within workspace:
```bash
yarn install
```

## Creating a New App

```bash
npx react-native init MyNewApp
mv MyNewApp apps/
```

Then add/update the app's `package.json` to ensure it's part of the workspace.

## Creating a New Package

1. Create a new directory in `packages/`:
```bash
mkdir packages/my-package
```

2. Add a `package.json`:
```json
{
  "name": "@monorepo/my-package",
  "version": "1.0.0",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "files": ["src"]
}
```

3. Create `src/index.ts` with exports

## Usage

Import from packages:
```typescript
import { Button } from '@ui/components';
import { Utils } from '@shared/utils';
```

## Scripts

- `yarn lint` - Run ESLint across all packages
- `yarn type-check` - Type check all packages
- `yarn workspace <name> <script>` - Run script in specific workspace

## Yarn Workspace Commands

```bash
# Install dependencies across all workspaces
yarn install

# Run script in all workspaces
yarn workspaces run <script>

# Run script in specific workspace
yarn workspace @monorepo/ui build

# Add dependency to specific workspace
yarn workspace @monorepo/ui add react-native
```
