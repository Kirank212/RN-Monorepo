# RNWebApp — React Native Web

A web-based React Native app using **React Native Web**, sharing the same **Redux store**, **components**, and **API integration** with the mobile app.

## Prerequisites

- Node >= 20, npm >= 7
- Modern browser (Chrome, Firefox, Safari, Edge)

## Install

```bash
# From repo root
npm install

# Or from app directory
cd apps/RNWebApp
npm install
```

## Run

```bash
cd apps/RNWebApp
npm start
```

The app will open at `http://localhost:3000` automatically.

## 🎯 Features

- **React Native Web** for cross-platform compatibility
- **Shared Redux Store** from `@monorepo/shared`
- **React Navigation** web support
- **Same Screens** as mobile app (HomeScreen, UserDetailsScreen)
- **Type-safe** TypeScript + Redux

## 📱 Screens

### HomeScreen
- User list fetched from JSONPlaceholder API
- Click a user to view details
- Loading and error states

### UserDetailsScreen
- Full user information
- Back navigation to user list
- Error handling

## 🗂️ File Structure

```
src/
├── screens/
│   ├── HomeScreen.tsx
│   └── UserDetailsScreen.tsx
├── App.tsx
├── index.tsx
└── index.css
public/
└── index.html
```

## 🔌 Redux Integration

The app uses the **shared store** from `@monorepo/shared`:

```typescript
import { store, fetchUsers, RootState } from '@monorepo/shared';
```

## 🚀 Build for Production

```bash
cd apps/RNWebApp
npm run build
# Output in build/ directory
```

## 🧪 Testing

```bash
cd apps/RNWebApp
npm test
```

## 🚨 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Set `PORT=3001 npm start` |
| Module not found | Run `npm install` again |
| Type errors | Run `npm run type-check` to debug |
| Styles not loading | Check `src/index.css` is imported in `index.tsx` |


---

**Demo tip**: Run `npm start` and navigate through users. Note the same Redux store, API calls, and logic as the mobile app.
