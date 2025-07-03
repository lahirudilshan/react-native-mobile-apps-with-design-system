# Playground App

A React Native development and testing environment for the mobile design system components with comprehensive Storybook integration.

## 🎯 Purpose

The Playground app serves as the primary development and testing environment for:

- **Component Development**: Interactive testing of design system components
- **Storybook Integration**: Both mobile and web Storybook support
- **Visual Testing**: Component documentation and visual regression testing
- **Cross-Platform Testing**: iOS and Android compatibility validation

## 🚀 Tech Stack

- **React Native**: 0.80.1
- **React**: 19.1.0
- **TypeScript**: Full type safety
- **Storybook**: v9 with React Native Web support
- **Vitest**: Unit testing framework
- **ESLint**: Code linting with Storybook rules

## 📦 Key Features

### 🎭 Dual Storybook Support

- **Web Storybook**: Runs on localhost:6006 for browser-based component testing
- **React Native Storybook**: Native mobile component testing
- **Unified Stories**: Shared stories across both platforms

### 🧩 Component Testing

- **Design System Components**: Avatar, Badge, Button, UserCard, ProductCard
- **App-Specific Components**: ProfileCard with comprehensive stories
- **Interactive Controls**: Real-time prop manipulation
- **Theme Testing**: Light/dark mode switching

### 🛠 Development Tools

- **Hot Reloading**: Instant feedback during development
- **Cache Management**: Built-in cache clearing utilities
- **Accessibility Testing**: A11y addon integration
- **Deep Controls**: Advanced component prop manipulation

## 📁 Project Structure

```
apps/playground/
├── .storybook/              # Web Storybook configuration
│   └── main.ts              # Stories discovery and addons
├── .rnstorybook/            # React Native Storybook config
├── src/
│   └── components/
│       └── profile-card/    # Example component with stories
│           ├── ProfileCard.tsx
│           ├── ProfileCard.stories.tsx
│           └── index.ts
├── android/                 # Android native code
├── ios/                     # iOS native code
├── __tests__/               # Test files
├── App.tsx                  # Main app component
├── package.json             # Dependencies and scripts
├── vitest.config.ts         # Vitest configuration
└── README.md                # This file
```

## 📜 Available Scripts

### 🏃‍♂️ Development

```bash
# Start React Native Metro bundler
yarn start

# Start with cache reset
yarn start-reset

# Run on iOS simulator
yarn ios

# Run on Android emulator
yarn android
```

### 📚 Storybook

```bash
# Start web Storybook (localhost:6006)
yarn storybook

# Generate story files
yarn storybook:generate

# Build Storybook for production
yarn storybook:build

# Clean Storybook cache
yarn storybook:clean
```

### 🧪 Testing & Quality

```bash
# Run unit tests
yarn test

# Run ESLint
yarn lint
```

## 🎨 Storybook Configuration

### Story Discovery

Automatically discovers stories from:

- `../../../apps/miniApps/src/**/*.stories.?(ts|tsx|js)`
- `../../../packages/mobile-design-system/src/**/*.stories.?(ts|tsx|js)`

### Addons

- **@storybook/addon-react-native-server**: React Native support
- **storybook-addon-deep-controls**: Advanced prop controls
- **@chromatic-com/storybook**: Visual testing
- **@storybook/addon-docs**: Documentation generation
- **@storybook/addon-a11y**: Accessibility testing
- **@storybook/addon-vitest**: Test integration

## 🧩 Example Components

### ProfileCard

A comprehensive example component demonstrating:

- Design system integration (Avatar, Badge, Button)
- Theme provider usage
- Interactive Storybook stories
- TypeScript props interface
- Responsive styling

## 🚀 Getting Started

1. **Install dependencies** (from project root):

   ```bash
   yarn install
   ```

2. **Build design system**:

   ```bash
   yarn package:build
   ```

3. **Start Storybook**:

   ```bash
   cd apps/playground
   yarn storybook
   ```

   Open http://localhost:6006 in your browser

4. **Run on mobile**:

   ```bash
   # iOS
   yarn ios

   # Android
   yarn android
   ```

## 🔧 Development Workflow

1. **Component Development**: Create components in `src/components/`
2. **Story Creation**: Add `.stories.tsx` files for Storybook
3. **Testing**: Write unit tests in `__tests__/`
4. **Visual Testing**: Use Storybook for visual regression testing
5. **Integration**: Test components in the main App.tsx

## 🎯 Use Cases

- **Design System Development**: Primary environment for component creation
- **Component Documentation**: Interactive documentation via Storybook
- **Visual Testing**: Cross-platform component validation
- **Prototyping**: Rapid UI prototyping and testing
- **Team Collaboration**: Shared component library showcase

## 🔗 Related

- **Mobile Design System**: `../../packages/mobile-design-system/`
- **MiniApps**: `../miniApps/` - Example implementation
- **Root Scripts**: Available from project root for convenience

---

**Built for efficient React Native component development and testing**
