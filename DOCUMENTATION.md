# React Native Monorepo - Documentation

A production-ready React Native monorepo with shared UI components, utilities, and hooks.

---

## 🏗️ Project Architecture

```
RN-Monorepo/
├── apps/
│   └── RNMobileApp/                 # Main React Native App
│       ├── src/
│       │   ├── App.tsx             # Main component
│       │   └── index.ts            # Entry point
│       ├── ios/                    # iOS native code
│       ├── android/                # Android native code
│       ├── metro.config.js         # Metro bundler (monorepo configured)
│       ├── babel.config.js         # Babel config
│       ├── tsconfig.json           # TypeScript config
│       └── package.json            # App dependencies
│
├── packages/
│   ├── ui/                         # UI Components Library (@monorepo/ui)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button.tsx     # Customizable button
│   │   │   │   └── Card.tsx       # Container component
│   │   │   └── index.ts           # Exports
│   │   └── package.json
│   │
│   └── shared/                     # Shared Utils & Types (@monorepo/shared)
│       ├── src/
│       │   ├── utils/
│       │   │   └── common.ts      # formatDate, capitalize, debounce, throttle
│       │   ├── hooks/
│       │   │   └── useFetch.ts    # Data fetching hook
│       │   ├── types/
│       │   │   └── common.ts      # TypeScript interfaces
│       │   └── index.ts           # Exports
│       └── package.json
│
├── package.json                   # Root workspace config
├── tsconfig.json                  # TypeScript configuration
└── DOCUMENTATION.md               # This file
```

### Tech Stack
- **React**: 19.1.0
- **React Native**: 0.81.5
- **TypeScript**: 5.8.3
- **Node.js**: >= 20
- **Package Manager**: npm workspaces

---

## 🚀 How to Run the Project

### Step 1: Install Dependencies

```bash
cd /Users/kirankumarbollem/RN-Monorepo
npm install
```

### Step 2: Setup iOS (macOS only)

```bash
cd apps/RNMobileApp/ios
pod install --repo-update
cd ../../..
```

### Step 3: Start Metro Bundler

```bash
cd apps/RNMobileApp
npm start
```

### Step 4: Run on Device/Simulator

Open another terminal and run:

```bash
cd apps/RNMobileApp

# iOS simulator (macOS)
npm run ios

# Android device/emulator
npm run android
```

### Metro Dev Commands
- Press `r` to reload app
- Press `d` to open dev menu
- Press `j` to open debugger
- Press `Ctrl+C` to exit

---

## 📦 Shared Packages

### 1. @monorepo/ui - UI Components

#### Button Component

```typescript
import { Button } from '@monorepo/ui';

<Button
  title="Click Me"
  onPress={() => console.log('Pressed')}
  variant="primary"      // 'primary' | 'secondary'
  disabled={false}
/>
```

#### Card Component

```typescript
import { Card } from '@monorepo/ui';

<Card title="Card Title">
  <Text>Card content goes here</Text>
</Card>
```

---

### 2. @monorepo/shared - Utilities & Hooks

#### Utility Functions

```typescript
import { 
  formatDate, 
  capitalize, 
  debounce, 
  throttle 
} from '@monorepo/shared';

formatDate(new Date());           // "Feb 17, 2026"
capitalize('hello');              // "Hello"

const debouncedSearch = debounce((query) => {
  console.log('Search:', query);
}, 300);

const throttledScroll = throttle(() => {
  console.log('Scrolling');
}, 100);
```

#### useFetch Hook

```typescript
import { useFetch } from '@monorepo/shared';

interface User {
  id: string;
  name: string;
  email: string;
}

export function UserList() {
  const { data, loading, error } = useFetch<User[]>(
    'https://api.example.com/users'
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <ScrollView>
      {data?.map(user => (
        <Card key={user.id} title={user.name}>
          <Text>{user.email}</Text>
        </Card>
      ))}
    </ScrollView>
  );
}
```

#### Type Definitions

```typescript
import { User, ApiResponse, AppError } from '@monorepo/shared';

interface User {
  id: string;
  name: string;
  email: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  timestamp: Date;
}

interface AppError {
  message: string;
  code: string;
  statusCode: number;
}
```

---

## 💡 Complete Example

```typescript
import { View, ScrollView, Text } from 'react-native';
import { Button, Card } from '@monorepo/ui';
import { capitalize, formatDate, useFetch } from '@monorepo/shared';

export function Dashboard() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Card title={capitalize('dashboard')}>
        <Button
          title="Get Started"
          onPress={() => console.log('Started')}
          variant="primary"
        />
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
        {data && <Text>Last updated: {formatDate(new Date())}</Text>}
      </Card>
    </ScrollView>
  );
}
```
