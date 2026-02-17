# Monorepo Package Index

## Overview

This is a complete React Native monorepo structure with all dependencies configured for React 19.1.0 and React Native 0.81.5.

## 📦 Packages

### `apps/main` - Main React Native Application

**Package Name:** `@monorepo/app-main`

**Location:** `/apps/main`

**Description:** The main React Native application that demonstrates usage of shared UI components and utilities.

**Key Files:**
- `src/App.tsx` - Main app component
- `src/index.ts` - App entry point
- `app.json` - App configuration
- `metro.config.js` - Metro bundler configuration
- `babel.config.js` - Babel configuration
- `package.json` - App dependencies and scripts

**Scripts:**
- `npm start` - Start Metro bundler
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android device
- `npm run type-check` - Type check the app
- `npm run lint` - Lint the app

**Dependencies:**
- `react`: 19.1.0
- `react-native`: 0.81.5
- `@monorepo/ui`: workspace
- `@monorepo/shared`: workspace

---

### `packages/ui` - UI Components Library

**Package Name:** `@monorepo/ui`

**Location:** `/packages/ui`

**Description:** Reusable UI components for React Native applications.

**Exported Components:**

#### `Button`
Customizable button component with variants.

```typescript
import { Button } from '@monorepo/ui';

<Button 
  title="Click me"
  onPress={() => {}}
  variant="primary" // or "secondary"
  disabled={false}
/>
```

**Props:**
- `title: string` - Button text
- `onPress: () => void` - Press handler
- `variant?: 'primary' | 'secondary'` - Button style (default: 'primary')
- `disabled?: boolean` - Disable button (default: false)

#### `Card`
Container component with optional title.

```typescript
import { Card } from '@monorepo/ui';

<Card title="My Card">
  <Text>Card content</Text>
</Card>
```

**Props:**
- `title?: string` - Card title
- `children: React.ReactNode` - Card content

**Scripts:**
- `npm run -w @monorepo/ui build` - Build the package
- `npm run -w @monorepo/ui type-check` - Type check
- `npm run -w @monorepo/ui lint` - Lint

---

### `packages/shared` - Shared Utilities & Types

**Package Name:** `@monorepo/shared`

**Location:** `/packages/shared`

**Description:** Shared utilities, React hooks, and TypeScript types across the monorepo.

**Exported Utilities:**

#### `utils/common.ts`

- `formatDate(date: Date): string` - Format date to readable string
- `capitalize(str: string): string` - Capitalize first character
- `debounce(func, wait): debounced function` - Debounce function execution
- `throttle(func, limit): throttled function` - Throttle function execution

```typescript
import { formatDate, capitalize, debounce, throttle } from '@monorepo/shared';

const formatted = formatDate(new Date());
const capitalized = capitalize('hello');

const debouncedSearch = debounce((query) => {
  // Search logic
}, 300);

const throttledScroll = throttle(() => {
  // Scroll logic
}, 100);
```

#### `hooks/useFetch.ts`

Custom hook for fetching data from APIs.

```typescript
import { useFetch } from '@monorepo/shared';

interface User {
  id: string;
  name: string;
}

function MyComponent() {
  const { data, loading, error } = useFetch<User[]>('https://api.example.com/users');
  
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  
  return (
    <ScrollView>
      {data?.map(user => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </ScrollView>
  );
}
```

**Returns:**
- `data: T | null` - Fetched data
- `loading: boolean` - Loading state
- `error: Error | null` - Error object if fetch failed

#### `types/common.ts`

Common TypeScript interfaces and types.

```typescript
import { User, ApiResponse, AppError } from '@monorepo/shared';

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface AppError {
  code: string;
  message: string;
  timestamp: Date;
}
```

**Scripts:**
- `npm run -w @monorepo/shared build` - Build the package
- `npm run -w @monorepo/shared type-check` - Type check
- `npm run -w @monorepo/shared lint` - Lint

---

## 📱 Import Paths

### Path Aliases (TypeScript)

```typescript
// ✅ Recommended - Use aliases
import { Button } from '@ui/components';
import { capitalize } from '@shared/utils';

// ❌ Avoid - Use full paths only if necessary
import { Button } from '../../packages/ui/src/components';
```

Aliases are configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@ui/*": ["packages/ui/src/*"],
      "@shared/*": ["packages/shared/src/*"]
    }
  }
}
```

---

## 🚀 Quick Reference

### View Current Structure

```bash
tree -L 2 -I 'node_modules'
```

### Install All Dependencies

```bash
npm install
```

### Run Tests Across All Packages

```bash
npm run -ws test
```

### Build All Packages

```bash
npm run -ws build
```

### Type Check Everything

```bash
npm run type-check
```

### Lint Everything

```bash
npm run lint
```

---

## 📝 Configuration Files

### Root Configuration

- **`package.json`** - Workspace definition and scripts
- **`tsconfig.json`** - TypeScript configuration with path aliases
- **`.gitignore`** - Git ignore rules
- **`.eslintrc.json`** - ESLint configuration
- **`README.md`** - Project documentation
- **`SETUP.md`** - Setup and installation guide

### App Configuration

- **`apps/main/package.json`** - App dependencies
- **`apps/main/tsconfig.json`** - App-specific TypeScript config
- **`apps/main/metro.config.js`** - Metro bundler configuration
- **`apps/main/babel.config.js`** - Babel configuration
- **`apps/main/.eslintrc.js`** - App-specific ESLint config

### Package Configuration

- **`packages/*/package.json`** - Package definition and dependencies
- **`packages/*/tsconfig.json`** - Package-specific TypeScript config

---

## 🔄 Dependency Management

### Add Dependency to Specific Package

```bash
npm install --workspace=@monorepo/ui react-native-gesture-handler
```

### Add Dependency to Root

```bash
npm install --save-dev some-package
```

### Update Dependencies

```bash
# Update specific package
npm update --workspace=@monorepo/ui

# Update all
npm update
```

---

## 📊 Version Matrix

| Package | Version |
|---------|---------|
| React | 19.1.0 |
| React Native | 0.81.5 |
| TypeScript | 5.2.0 |
| Babel | 7.23.0 |
| Metro | 0.77.0 |
| Node.js | 18+ |
| npm | 9+ |

---

## ✅ Checklist

- [x] Root workspace configured
- [x] TypeScript setup complete
- [x] UI package created with components
- [x] Shared package created with utilities
- [x] Main app created and configured
- [x] Metro bundler configured for monorepo
- [x] Path aliases setup
- [x] ESLint configured
- [x] Documentation created

---

## 🎯 Next Steps

1. Run `npm install` to install all dependencies
2. Follow setup guide in `SETUP.md`
3. Start building your app!

