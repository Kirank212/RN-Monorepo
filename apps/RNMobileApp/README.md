# RNMobileApp — React Native Mobile

A fully functional React Native mobile app with **TypeScript**, **Redux state management**, **API integration**, and **navigation**.

## Prerequisites

- Node >= 20, npm >= 7
- Xcode (for iOS) or Android Studio (for Android)
- CocoaPods (for iOS dependencies)

## Install

```bash
# From repo root
npm install

# Or from app directory
cd apps/RNMobileApp
npm install
```

## Run

### Start Metro Bundler
```bash
cd apps/RNMobileApp
npm start
# or with cache reset
npm start -- --reset-cache
```

### Run on iOS
In another terminal:
```bash
cd apps/RNMobileApp
npm run ios
```

### Run on Android
In another terminal:
```bash
cd apps/RNMobileApp
npm run android
```

## 🎯 Features

- **Shared Redux Store** from `@monorepo/shared`
- **Two Screens**: HomeScreen (user list), UserDetailsScreen (API call)
- **Async Thunks** for API calls with loading/error states
- **React Navigation** Stack navigator
- **Type-safe** Redux + React Native components

## 📱 Screens

### HomeScreen
- Displays list of users fetched from JSONPlaceholder API
- Tap a user to navigate to details
- Shows loading state while fetching

### UserDetailsScreen
- Full user details: name, email, phone, company, etc.
- Fetches data based on selected user ID
- Error handling for failed requests

## 🗂️ File Structure

```
src/
├── screens/
│   ├── HomeScreen.tsx
│   └── UserDetailsScreen.tsx
```

## 🔌 Redux Integration

The app uses the **shared store** from `@monorepo/shared`:

```typescript
import { store, fetchUsers, fetchUserDetails, RootState } from '@monorepo/shared';
```

## 🚨 Troubleshooting

| Issue | Solution |
|-------|----------|
| Metro won't start | Try `npm start -- --reset-cache` |
| Pod install fails | Run `cd ios && pod install` then restart |
| Type errors | Run `npm run type-check` to debug |
| App crashes | Check logs in Xcode console or Android Studio |

## 🎨 Interview Notes

- Demonstrates **reusability**: screens use shared Redux store
- **Error handling**: API failures show error messages
- **Type-safe**: Full TypeScript coverage
- **Architecture**: Clear separation of concerns

---

**Demo tip**: Run `npm start`, then `npm run ios` in another terminal. Tap a user to see navigation and API call in action.

