<img src="resources/images/logo.png" alt="Project Logo" width="200" />

<h1>React Native Apps with Storybook and Design System</h1>

<p>
  A powerful React Native monorepo starter kit featuring a comprehensive shared design system, Storybook integration, and TypeScript support. Build scalable, consistent mobile applications with reusable components, theme system, utilities, and modern development tools. Perfect for teams looking to streamline their React Native development workflow and maintain design consistency across multiple apps.
</p>

---

## 🚀 Tech Stack

-   **React Native**: 0.80.x
-   **React**: 19.1.x
-   **TypeScript**
-   **Storybook**: v9
-   **Monorepo**: Yarn Workspaces
-   **Component Library**: mobile-design-system

---

## 🛠️ Development Environment

| Tool                | Version                        |
| ------------------- | ------------------------------ |
| Node.js             | 21+ (see `.nvmrc`)             |
| Java JDK            | 17 (see `.java-version`)       |
| Yarn                | 4.8.1                          |
| Android Build Tools | 35.0.0                         |
| Android SDK         | Min: 24 / Target & Compile: 35 |
| NDK                 | 27.1.12297006                  |
| Kotlin              | 2.1.20                         |

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
│       │   ├── components/        # Basic UI components
│       │   │   ├── avatar/        # Avatar component
│       │   │   ├── badge/         # Badge component
│       │   │   └── button/        # Button component
│       │   ├── widgets/           # Complex components
│       │   │   └── UserCard/      # User card widget
│       │   ├── domain/            # Domain-specific components
│       │   │   └── ecommerce/     # E-commerce components
│       │   │       └── ProductCard/ # Product card component
│       │   ├── providers/         # Context providers
│       │   │   └── theme-provider/ # Theme management
│       │   ├── tokens/            # Design tokens
│       │   ├── utils/             # Utility functions
│       │   │   ├── formatters/    # Data formatters
│       │   │   └── validators/    # Validation utilities
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

Located at `packages/mobile-design-system/`, this package contains a comprehensive collection of reusable UI components, widgets, domain-specific components, theme system, and utilities.

### 🧩 Available Components

#### Basic Components

-   **Avatar** – Profile pictures with fallback support (small, medium, large sizes)
-   **Badge** – Status indicators, notifications, and labels
-   **Button** – Multiple variants (primary, secondary, outline) and sizes

#### Complex Widgets

-   **UserCard** – User information display with actions and status indicators

#### Domain-Specific Components

-   **ProductCard** – E-commerce product display with pricing, ratings, and actions

### 🎭 Theme System

-   **ThemeProvider** – Context provider for theme management
-   **useTheme** – Hook for accessing and toggling themes
-   **Design Tokens** – Spacing, colors, typography, and border radius tokens
-   **Light/Dark Mode** – Built-in theme switching support

### 🛠 Utilities

-   **Formatters** – Currency, date, and text formatting functions
-   **Validators** – Email, phone, password, and credit card validation

### 📚 Storybook Integration

Comprehensive Storybook documentation with interactive examples for all components including:

-   Avatar variations and fallback states
-   Badge variants and styling options
-   Button states and interactions
-   UserCard with different user types and statuses
-   ProductCard with various product scenarios

---

## 🧪 Playground App

Located at `apps/playground/`, this React Native app serves as the development and testing environment for UI components. Features React Native 0.80.1, React 19.1.0, and full Storybook v9 integration for both mobile and web platforms.

---

## 📱 MiniApps

Located at `apps/miniApps/`, this demo application showcases real-world usage of the design system components. Uses React Native 0.80.0 and React 19.1.0 with examples like ProfileCard implementation.

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

3. **Run Playground App to see Storybook**:

    ```bash
    # Start development environment
    yarn playground:dev

    # Or run Storybook directly
    yarn storybook:mobile
    ```

4. **Run MiniApps**:
    ```bash
    # Start Metro and demo app
    yarn miniApps:dev
    ```

---

## 🎯 Key Features

-   **Comprehensive Component Library** with basic components, complex widgets, and domain-specific components
-   **Advanced Theme System** with light/dark mode support and customizable design tokens
-   **TypeScript Support** for full type safety and enhanced developer experience
-   **Storybook Integration** for interactive component documentation and testing
-   **Utility Functions** including formatters and validators for common use cases
-   **Cross-Platform Compatibility** ensuring seamless iOS and Android support
-   **Monorepo Architecture** with Yarn Workspaces for efficient development workflow

---

## ✅ Code Quality Tools

-   **ESLint** – Code linting with custom rules
-   **Prettier** – Consistent code formatting
-   **Lefthook / Husky** – Git hooks for pre-commit validation
-   **TypeScript** – Static type checking

---

## 🧪 Testing

-   **Vitest** – Unit testing framework in Playground app
-   **Storybook** – Component testing and visual documentation
-   **React Native Testing Library** – Component integration testing

---

## 📄 License

[MIT](LICENSE)

---

**Built with ❤️ for scalable React Native development**
