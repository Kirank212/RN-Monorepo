# React Native Monorepo - Setup Guide

## Complete React Native Monorepo

**Tech Stack:**
- React 19.1.0
- React Native 0.81.5
- TypeScript 5.2.0
- npm Workspaces

## Quick Start

### 1. Install Dependencies

```bash
cd /Users/kirankumarbollem/RN-Monorepo

# Clean install
rm -rf node_modules package-lock.json
npm install
```

### 2. Setup iOS (macOS only)

```bash
cd apps/main

# Install pods
cd ios
pod install --repo-update
cd ../..

# Or use the setup script
bash apps/main/setup-ios.sh
```

### 3. Start Development

```bash
cd apps/main

# Start Metro bundler
npm start

# In another terminal, run on iOS
npm run ios

# Or run on Android
npm run android
```

## Project Structure

```
RN-Monorepo/
├── apps/
│   └── main/                    # Main app
│       ├── src/
│       │   ├── App.tsx         # Main component
│       │   └── index.ts        # Entry point
│       ├── ios/                # iOS native
│       ├── android/            # Android native
│       ├── metro.config.js     # Metro bundler config
│       ├── babel.config.js     # Babel config
│       └── package.json
├── packages/
│   ├── ui/                      # UI components
│   │   ├── src/
│   │   │   ├── components/     # Reusable components
│   │   │   └── index.ts        # Exports
│   │   └── package.json
│   └── shared/                  # Shared utilities
│       ├── src/
│       │   ├── utils/          # Helper functions
│       │   ├── hooks/          # React hooks
│       │   ├── types/          # TypeScript types
│       │   └── index.ts        # Exports
│       └── package.json
├── package.json                 # Root workspace
├── tsconfig.json               # TypeScript config
└── README.md
```

## Available Commands

### Root Commands

```bash
# Type check all packages
npm run type-check

# Lint all packages
npm run lint

# Clean all node_modules
npm run clean
```

### App Commands

```bash
cd apps/main

# Start Metro bundler
npm start

# Run on iOS (macOS)
npm run ios

# Run on Android
npm run android

# Type check this app
npm run type-check

# Lint this app
npm run lint
```

### Package Commands

```bash
# Build UI package
npm run -w @monorepo/ui build

# Build shared package
npm run -w @monorepo/shared build

# Type check specific package
npm run -w @monorepo/ui type-check
```

## Using Packages in Apps

### Import UI Components

```typescript
import { Button, Card } from '@monorepo/ui';

function MyComponent() {
  return (
    <Card title="My Card">
      <Button title="Click me" onPress={() => {}} />
    </Card>
  );
}
```

### Import Shared Utilities

```typescript
import { capitalize, formatDate, useFetch } from '@monorepo/shared';

// Use utilities
const text = capitalize('hello');
const date = formatDate(new Date());

// Use hooks
const { data, loading, error } = useFetch('https://api.example.com/data');
```

## Creating New Components

### Add to UI Package

```typescript
// packages/ui/src/components/Input.tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

export const Input: React.FC<InputProps> = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
});
```

Then export from `packages/ui/src/index.ts`:

```typescript
export { Button } from './components/Button';
export { Card } from './components/Card';
export { Input } from './components/Input';  // New
```

## Creating New Utilities

### Add to Shared Package

```typescript
// packages/shared/src/utils/validation.ts
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};
```

Then export from `packages/shared/src/index.ts`:

```typescript
export * from './utils/common';
export * from './utils/validation';  // New
```

## Creating a New App

```bash
# Navigate to apps directory
cd apps

# Create new app with React Native CLI
npx react-native init my-app --template react-native-template-typescript

# Move content to apps/my-app
mv my-app/* my-app
rm -rf my-app

cd ..

# Update my-app package.json name
# Change to: "@monorepo/app-my-app"

# Install all dependencies
npm install
```

## Troubleshooting

### Pod Installation Issues

```bash
cd apps/main/ios
rm -rf Pods Podfile.lock
pod install --repo-update
cd ../../..
npm install
```

### Metro Bundler Errors

```bash
cd apps/main
npm start -- --reset-cache
```

### Clear All Caches

```bash
# From root
npm run clean
npm install

# Reinstall pods
cd apps/main/ios
pod install --repo-update
cd ../../..
```

### Android Gradle Issues

```bash
cd apps/main/android
./gradlew clean
cd ../..
npm start -- --reset-cache
```

## Monorepo Workspace Commands

```bash
# Run command in all workspaces
npm run -ws build

# Run command in specific workspace
npm run -w @monorepo/ui build

# Add package to specific workspace
npm install --workspace=@monorepo/ui react-native-gesture-handler

# Remove package from workspace
npm uninstall --workspace=@monorepo/ui react-native-gesture-handler

# Install peer dependencies
npm install --workspace=@monorepo/app-main
```

## Version Information

- **React**: 19.1.0
- **React Native**: 0.81.5
- **TypeScript**: 5.2.0
- **Babel**: 7.23.0
- **Metro**: 0.77.0

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Setup iOS: `bash apps/main/setup-ios.sh`
3. ✅ Start app: `cd apps/main && npm start`
4. ✅ Run on device: `npm run ios` or `npm run android`
5. 📝 Create new components in `packages/ui/src/components/`
6. 🛠 Create utilities in `packages/shared/src/utils/`
7. 🚀 Deploy when ready

## Resources

- [React Native Documentation](https://reactnative.dev)
- [React 19 Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [npm Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

