import React, { createContext, useContext, useState, useMemo, PropsWithChildren } from 'react';
import { ThemeProps } from '../tokens';
import { ColorTheme } from '../tokens/colors';
import { getTheme } from '../utils/tokens';

// contexts
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// providers
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    initialTheme = 'light',
}) => {
    // states
    const [colorScheme, setColorScheme] = useState<ColorTheme>(initialTheme);

    /**
     * toggle theme
     * @description toggle theme between light and dark
     * @returns void
     */
    const toggleTheme = useMemo(() => {
        return () => setColorScheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    const contextValue = useMemo(
        () => ({
            theme: getTheme(colorScheme),
            colorScheme,
            setColorScheme,
            toggleTheme,
        }),
        [colorScheme, toggleTheme],
    );

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

/**
 * use them hook for manage them in any place
 * @returns {ThemeContextProps}
 */
export const useTheme = (): ThemeContextProps => {
    // context
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};

// types
export type ThemeContextProps = {
    theme: ThemeProps;
    colorScheme: ColorTheme;
    setColorScheme: (scheme: ColorTheme) => void;
    toggleTheme: () => void;
};
type ThemeProviderProps = PropsWithChildren<{
    initialTheme?: ColorTheme;
}>;
