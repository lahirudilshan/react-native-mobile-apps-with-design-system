# Mobile Design System

A comprehensive React Native design system built with TypeScript, providing reusable components, widgets, and utilities for mobile applications.

## 🚀 Features

-   **Comprehensive Component Library**: Basic UI components, complex widgets, and domain-specific components
-   **Theme System**: Built-in light/dark theme support with customizable design tokens
-   **TypeScript Support**: Full type safety and IntelliSense support
-   **Storybook Integration**: Interactive component documentation and testing
-   **Utility Functions**: Formatters, validators, and helper functions
-   **Cross-Platform**: Works seamlessly on iOS and Android

## 📦 Installation

```bash
npm install @fbn/mobile-design-system
# or
yarn add @fbn/mobile-design-system
```

## 🎨 Components

### Basic Components

#### Avatar

Display user profile pictures with fallback support.

```tsx
import { Avatar } from '@fbn/mobile-design-system';

<Avatar source={{ uri: 'https://example.com/avatar.jpg' }} size="large" fallbackText="JD" />;
```

#### Badge

Show status indicators, notifications, or labels.

```tsx
import { Badge } from '@fbn/mobile-design-system';

<Badge variant="success" text="Active" />
<Badge variant="error" count={5} />
```

#### Button

Customizable buttons with multiple variants and states.

```tsx
import { Button } from '@fbn/mobile-design-system';

<Button variant="primary" size="large" onPress={() => console.log('Pressed')}>
    Click Me
</Button>;
```

### Widgets (Complex Components)

#### UserCard

Display user information with actions and status indicators.

```tsx
import { UserCard } from '@fbn/mobile-design-system';

const user = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://example.com/avatar.jpg',
    role: 'Developer',
    status: 'active',
    joinedDate: new Date('2023-01-15'),
};

<UserCard
    user={user}
    onMessage={() => console.log('Message user')}
    onViewProfile={() => console.log('View profile')}
/>;
```

### Domain-Specific Components

#### ProductCard (E-commerce)

Display product information with pricing, ratings, and actions.

```tsx
import { ProductCard } from '@fbn/mobile-design-system';

const product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    originalPrice: 129.99,
    image: 'https://example.com/product.jpg',
    rating: 4.5,
    isOnSale: true,
    isFavorite: false,
};

<ProductCard
    product={product}
    onAddToCart={() => console.log('Added to cart')}
    onToggleFavorite={() => console.log('Toggled favorite')}
/>;
```

## 🎭 Theme System

### ThemeProvider

Wrap your app with the ThemeProvider to enable theme support.

```tsx
import { ThemeProvider } from '@fbn/mobile-design-system';

function App() {
    return <ThemeProvider initialTheme="light">{/* Your app content */}</ThemeProvider>;
}
```

### useTheme Hook

Access theme values and toggle between themes.

```tsx
import { useTheme } from '@fbn/mobile-design-system';

function MyComponent() {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <View style={{ backgroundColor: theme.colors.background }}>
            <Button onPress={toggleTheme}>Switch to {isDark ? 'Light' : 'Dark'} Theme</Button>
        </View>
    );
}
```

### Design Tokens

Access design tokens directly for custom styling.

```tsx
import { designTokens } from '@fbn/mobile-design-system';

const styles = StyleSheet.create({
    container: {
        padding: designTokens.spacing.md,
        borderRadius: designTokens.borderRadius.lg,
    },
});
```

## 🛠 Utilities

### Formatters

Utility functions for formatting data.

```tsx
import { formatCurrency, formatDate, truncateText } from '@fbn/mobile-design-system';

const price = formatCurrency(99.99, 'USD'); // "$99.99"
const date = formatDate(new Date(), 'short'); // "12/25/23"
const text = truncateText('Long text here', 10); // "Long text..."
```

### Validators

Validation functions for common use cases.

```tsx
import {
    isValidEmail,
    isValidPhoneNumber,
    validatePasswordStrength,
    isValidCreditCard,
} from '@fbn/mobile-design-system';

const emailValid = isValidEmail('user@example.com'); // true
const phoneValid = isValidPhoneNumber('+1234567890'); // true
const passwordStrength = validatePasswordStrength('MyPassword123!'); // { score: 4, feedback: [...] }
const cardValid = isValidCreditCard('4111111111111111'); // true
```

## 📚 Storybook

This design system includes comprehensive Storybook documentation with interactive examples for all components.

### Available Stories

-   **Avatar**: Different sizes, fallback states, and image loading
-   **Badge**: Various variants, counts, and custom styling
-   **Button**: All variants, sizes, states, and loading indicators
-   **UserCard**: Different user types, statuses, and interaction states
-   **ProductCard**: Product variations, sale states, ratings, and actions

### Running Storybook

```bash
# In the playground app
cd apps/playground
yarn storybook
```

## 🏗 Project Structure

```
packages/mobile-design-system/
├── src/
│   ├── components/          # Basic UI components
│   │   ├── avatar/
│   │   ├── badge/
│   │   └── button/
│   ├── widgets/             # Complex components
│   │   └── UserCard/
│   ├── domain/              # Domain-specific components
│   │   └── ecommerce/
│   │       └── ProductCard/
│   ├── providers/           # Context providers
│   │   └── theme-provider/
│   ├── tokens/              # Design tokens
│   ├── utils/               # Utility functions
│   │   ├── formatters/
│   │   └── validators/
│   └── index.ts             # Main exports
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Development

### Prerequisites

-   Node.js 18+
-   Yarn
-   React Native development environment

### Setup

```bash
# Install dependencies
yarn install

# Build the design system
yarn build

# Run tests
yarn test

# Run Storybook
cd apps/playground
yarn storybook
```

### Available Scripts

-   `yarn build` - Build the design system
-   `yarn test` - Run tests
-   `yarn lint` - Run ESLint
-   `yarn type-check` - Run TypeScript checks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and stories for new components
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Related Packages

-   **Playground App**: Interactive testing environment
-   **Mini Apps**: Example implementations using the design system

---

**Built with ❤️ for React Native developers**
