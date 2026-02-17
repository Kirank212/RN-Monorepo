# 🚀 React Native Monorepo Complete Setup

## ✨ Project Created Successfully!

Your complete React Native monorepo has been created with the latest versions:
- **React**: 19.1.0
- **React Native**: 0.81.5
- **TypeScript**: 5.2.0

---

## 📁 Project Structure

```
RN-Monorepo/
├── apps/
│   └── main/                          # Main React Native app
│       ├── src/
│       │   ├── App.tsx               # Demo app with shared packages
│       │   └── index.ts              # Entry point
│       ├── ios/                       # iOS native code
│       ├── android/                   # Android native code
│       ├── metro.config.js           # Metro bundler config
│       ├── babel.config.js           # Babel config
│       ├── .eslintrc.js              # ESLint config
│       ├── setup-ios.sh              # iOS setup script
│       ├── setup-android.sh          # Android setup script
│       └── package.json              # App dependencies
│
├── packages/
│   ├── ui/                            # UI Components Library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button.tsx        # Button component
│   │   │   │   └── Card.tsx          # Card component
│   │   │   └── index.ts              # Exports
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── shared/                        # Shared Utilities & Types
│       ├── src/
│       │   ├── utils/
│       │   │   └── common.ts         # Helper functions
│       │   ├── hooks/
│       │   │   └── useFetch.ts       # Data fetching hook
│       │   ├── types/
│       │   │   └── common.ts         # TypeScript types
│       │   └── index.ts              # Exports
│       ├── package.json
│       └── tsconfig.json
│
├── package.json                       # Root workspace config
├── tsconfig.json                      # TypeScript config
├── .gitignore                         # Git ignore rules
├── .eslintrc.json                     # Root ESLint config
├── README.md                          # Main documentation
├── SETUP.md                           # Setup & installation guide
├── PACKAGES.md                        # Package index & reference
└── GETTING_STARTED.md                 # This file
```

---

## 🎯 Getting Started

### Step 1: Install Dependencies

```bash
cd /Users/kirankumarbollem/RN-Monorepo

# Remove old installations (if any)
rm -rf node_modules package-lock.json

# Install all dependencies
npm install
```

**Expected output:** Installation should complete without peer dependency warnings.

### Step 2: Setup iOS (macOS only)

```bash
cd apps/main

# Install CocoaPods dependencies
cd ios
pod install --repo-update
cd ../..

# Alternative: Use setup script
bash apps/main/setup-ios.sh
```

### Step 3: Start Development

```bash
cd apps/main

# Start Metro bundler
npm start
```

You should see:
```
► To debug in Chrome, open the following URL in your Chrome window:
  http://localhost:8081/debugger-ui
```

### Step 4: Run on Device/Simulator

**iOS (macOS):**
```bash
# In a new terminal, from apps/main
npm run ios
```

**Android:**
```bash
# In a new terminal, from apps/main
npm run android
```

---

## 📚 Available Commands

### Development

```bash
# Start Metro bundler
cd apps/main
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Type check
npm run type-check

# Lint code
npm run lint
```

### Building Packages

```bash
# Build UI package
npm run -w @monorepo/ui build

# Build shared package
npm run -w @monorepo/shared build

# Build all packages
npm run -ws build
```

### Monorepo Management

```bash
# Type check entire monorepo
npm run type-check

# Lint entire monorepo
npm run lint

# Clean all node_modules
npm run clean

# Add package to workspace
npm install --workspace=@monorepo/ui <package-name>

# Remove package from workspace
npm uninstall --workspace=@monorepo/ui <package-name>
```

---

## 🎨 Using Shared Packages

### Import Components

```typescript
import { Button, Card } from '@monorepo/ui';

function MyScreen() {
  return (
    <Card title="Hello">
      <Button 
        title="Press me" 
        onPress={() => console.log('Pressed!')}
        variant="primary"
      />
    </Card>
  );
}
```

### Import Utilities

```typescript
import { 
  capitalize, 
  formatDate, 
  useFetch 
} from '@monorepo/shared';

// Use utilities
const text = capitalize('hello world');
const date = formatDate(new Date());

// Use hooks
const { data, loading, error } = useFetch('https://api.example.com/data');
```

---

## 📦 What's Included

### UI Package (`@monorepo/ui`)

**Components:**
- **Button** - Customizable button with variants (primary, secondary)
- **Card** - Container with optional title

**Add more components here:**
```typescript
// packages/ui/src/components/Input.tsx
export const Input: React.FC<InputProps> = (props) => {
  // Component code
};

// Export from packages/ui/src/index.ts
export { Input } from './components/Input';
```

### Shared Package (`@monorepo/shared`)

**Utilities:**
- `formatDate(date)` - Format date to readable string
- `capitalize(str)` - Capitalize string
- `debounce(func, wait)` - Debounce function
- `throttle(func, limit)` - Throttle function

**Hooks:**
- `useFetch<T>(url, options)` - Fetch data with loading/error states

**Types:**
- `User` - User interface
- `ApiResponse<T>` - Generic API response
- `AppError` - Error interface

---

## 🛠 Creating New Packages

### Step 1: Create Directory

```bash
mkdir packages/my-package
cd packages/my-package
```

### Step 2: Create package.json

```json
{
  "name": "@monorepo/my-package",
  "version": "1.0.0",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "scripts": {
    "build": "tsc",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "react": "19.1.0",
    "react-native": "0.81.5"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-native": "^0.81.0",
    "typescript": "^5.2.0"
  }
}
```

### Step 3: Create tsconfig.json

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### Step 4: Create src/index.ts

```typescript
// src/index.ts
export * from './my-module';
```

### Step 5: Update Root tsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@my-package/*": ["packages/my-package/src/*"]
    }
  }
}
```

### Step 6: Install Dependencies

```bash
npm install
```

---

## 🆕 Creating New Apps

### Step 1: Create with React Native CLI

```bash
cd apps

# Create new app
npx react-native init my-app --template react-native-template-typescript

# Move to correct location
mv my-app/* my-app/.gitignore my-app/
cd ..
```

### Step 2: Update package.json

Change the name in `apps/my-app/package.json`:
```json
{
  "name": "@monorepo/app-my-app",
  "version": "0.0.1",
  "private": true,
  "dependencies": {
    "@monorepo/ui": "*",
    "@monorepo/shared": "*"
  }
}
```

### Step 3: Add Metro Configuration

Copy `metro.config.js` from `apps/main` to `apps/my-app/`:

```bash
cp apps/main/metro.config.js apps/my-app/
```

Then reinstall:
```bash
npm install
```

---

## 🐛 Troubleshooting

### Issue: Pod Installation Fails

```bash
cd apps/main/ios
rm -rf Pods Podfile.lock
pod install --repo-update
cd ../../..
```

### Issue: Metro Bundler Errors

```bash
cd apps/main
npm start -- --reset-cache
```

### Issue: TypeScript Errors

```bash
# Type check to see all errors
npm run type-check

# Check specific workspace
npm run -w @monorepo/app-main type-check
```

### Issue: Module Resolution Issues

Clear caches and reinstall:
```bash
npm run clean
npm install
cd apps/main/ios && pod install && cd ../../..
```

### Issue: Android Build Issues

```bash
cd apps/main/android
./gradlew clean
cd ../..
npm start -- --reset-cache
```

---

## 📖 Documentation

- **[README.md](README.md)** - Project overview and features
- **[SETUP.md](SETUP.md)** - Detailed setup and installation
- **[PACKAGES.md](PACKAGES.md)** - Complete package reference

---

## 🎓 Best Practices

1. **Always use path aliases** - Import from `@monorepo/ui` not relative paths
2. **Keep packages focused** - One responsibility per package
3. **Export public API** - Use index files for clear exports
4. **Type everything** - Use TypeScript for better DX
5. **Test before publishing** - Run type-check and lint
6. **Document new features** - Add to PACKAGES.md

---

## 🔗 Resources

- [React Native Docs](https://reactnative.dev)
- [React 19 Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [npm Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

---

## ✅ Verification Checklist

- [ ] Dependencies installed: `npm install` ✓
- [ ] iOS pods installed: `pod install` (macOS) ✓
- [ ] Types check: `npm run type-check` ✓
- [ ] Linting passes: `npm run lint` ✓
- [ ] App runs: `npm start` ✓
- [ ] Can import from packages: `import { Button } from '@monorepo/ui'` ✓

---

## 🎉 You're All Set!

Your React Native monorepo is ready to use. Start by:

1. Installing dependencies: `npm install`
2. Running the app: `cd apps/main && npm start`
3. Creating new components in `packages/ui`
4. Adding utilities to `packages/shared`

Happy coding! 🚀

---

**Last Updated:** February 17, 2026
**React**: 19.1.0 | **React Native**: 0.81.5 | **TypeScript**: 5.2.0

