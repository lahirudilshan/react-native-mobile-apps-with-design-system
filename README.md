<p align="center">
  <img src="docs/logo.png" alt="Project Logo" height="120"/>
</p>

<h1 align="center">React Native Apps with storybook and Design System</h1>

<p align="center">
  A powerful React Native monorepo starter kit featuring a shared design system, Storybook integration, and TypeScript support. Build scalable, consistent mobile applications with reusable components, comprehensive documentation, and modern development tools. Perfect for teams looking to streamline their React Native development workflow and maintain design consistency across multiple apps.
</p>

---

## 🚀 Tech Stack

- **React Native**: 0.80.x  
- **React**: 19.1.x  
- **TypeScript**  
- **Storybook**: v9  
- **Monorepo**: Yarn Workspaces  
- **Component Library**: mobile-design-system 

---

## 🛠️ Development Environment

| Tool                | Version                          |
|---------------------|----------------------------------|
| Node.js             | 21+ (see `.nvmrc`)               |
| Java JDK            | 17 (see `.java-version`)         |
| Yarn                | 4.8.1                            |
| Android Build Tools | 35.0.0                           |
| Android SDK         | Min: 24 / Target & Compile: 35   |
| NDK                 | 27.1.12297006                    |
| Kotlin              | 2.1.20                           |

---

## 📁 Project Structure

```

├── apps/
│   ├── miniApps/                  # Feature-specific RN app
│   │   ├── android/               # Android native code
│   │   ├── ios/                   # iOS native code
│   │   ├── src/                   # Source code
│   │   │   └── components/        # App-specific components
│   │   │       └── profile-card/  # Profile card component
│   │   ├── __tests__/             # Test files
│   │   ├── App.tsx                # Main app component
│   │   └── package.json           # App dependencies
│   │
│   └── playground/                # Component testing app with Storybook
│       ├── android/               # Android native code
│       ├── ios/                   # iOS native code
│       ├── __tests__/             # Test files
│       ├── .rnstorybook/          # React Native Storybook config
│       ├── .storybook/            # Web Storybook config
│       ├── App.tsx                # Main app component
│       └── package.json           # App dependencies
│
├── packages/
│   └── mobile-design-system/      # Shared UI component library
│       ├── src/                   # Source code
│       │   ├── components/        # UI components
│       │   │   ├── avatar/        # Avatar component
│       │   │   ├── badge/         # Badge component
│       │   │   └── button/        # Button component
│       │   └── index.ts           # Main exports
│       ├── package.json           # Package dependencies
│       └── tsconfig.json          # TypeScript configuration
│
├── plop-templates/                # Templates for code generation
├── .husky/                        # Git hooks
├── .vscode/                       # VS Code configuration
├── package.json                   # Root dependencies
└── yarn.lock                      # Dependency lock file

```

---

## 🎨 Mobile Design System

Located at `packages/mobile-design-system/`, this package contains reusable UI components with individual Storybook stories.

### Available Components

- **Avatar** – Supports image or initials with `small`, `medium`, `large` sizes.
- **Badge** – Display status or notifications.
- **Button** – `primary`, `secondary`, `outline` variants in multiple sizes.

---

## 🧪 Playground App

Located at `apps/playground/`, this React Native app is for developing and testing UI components.  
Uses React Native `0.80.1`, React `19.1.0`, and integrates with Storybook v9.

---

## 📱 MiniApps

Located at `apps/miniApps/`, this is a demo application showing usage of the design system components like `ProfileCard`.  
Uses React Native `0.80.0` and React `19.1.0`.

---

## 📜 Available Scripts

### 🔧 Root Scripts

```bash
# Linting & Formatting
yarn lint               # Run ESLint
yarn lint:fix           # Auto-fix ESLint issues
yarn format             # Format with Prettier

# Dependency Management
yarn deps:check         # Check dependency alignment
yarn deps:fix           # Fix dependencies via rnx-align-deps

# Storybook
yarn storybook:web          # Run Storybook for web
yarn storybook:mobile       # Run Storybook for mobile
yarn storybook:clean        # Clean cache
yarn storybook:all          # Run all Storybook scripts

# Package Ops
yarn package:watch          # Watch for design system changes
yarn package:build          # Build the design system

# MiniApps
yarn miniApps:dev           # Dev mode
yarn miniApps:start         # Start Metro
yarn miniApps:start-reset   # Metro with reset cache
yarn miniApps:clean         # Clean builds

# Playground
yarn playground:dev            # Dev mode
yarn playground:start          # Start Metro
yarn playground:start-reset    # Metro with reset cache
yarn playground:clean          # Clean builds
```

### 📦 Design System Scripts

```bash
# Build & Dev
yarn clean
yarn build
yarn watch

# Code Quality
yarn lint
yarn format

# Dependency Alignment
yarn deps:check
yarn deps:fix
```

### 📱 App-specific Scripts

```bash
# Platform-specific
yarn android
yarn ios

# Development
yarn start
yarn test
```

---

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   yarn install
   ```

2. **Build the design system**:
   ```bash
   yarn package:build
   ```

3. **Run Playground App to see storybook**:
   ```bash
   # Start
   yarn playground:dev
   ```

4. **Run MiniApps**:
   ```bash
   # Start Metro
   yarn miniApps:dev
   ```

---

## ✅ Code Quality Tools

- **ESLint** – Code linting
- **Prettier** – Formatting
- **Lefthook / Husky** – Git hooks

---

## 🧪 Testing

- **Vitest** – Unit testing in Playground
- **Storybook** – Component testing & documentation

---

## 📄 License

[MIT](LICENSE)
