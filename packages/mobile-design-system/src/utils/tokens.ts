import { ThemeProps } from '../tokens';
import { colors, ColorTheme } from '../tokens/colors';
import { radius, spacing } from '../tokens/other';
import { typography } from '../tokens/typography';

/**
 * Returns the theme object based on the specified theme type
 * @param theme - The theme type ('light' or 'dark'). Defaults to 'light'
 * @returns {ThemeProps} ThemeProps object containing the theme values
 */
export const getTheme = (theme: ColorTheme = 'light'): ThemeProps => {
    let themeProps = {
        color: theme === 'dark' ? colors['dark'] : colors['light'],
        spacing,
        radius,
        typography,
    } as const;

    return themeProps;
};

/**
 * Retrieves a specific color token category from the specified theme
 * @param category - The category of color tokens to retrieve
 * @param theme - The theme type ('light' or 'dark'). Defaults to 'light'
 * @returns {ThemeProps[category]} The color tokens for the specified category
 */
export const getColorToken = <T extends keyof ThemeProps>(
    category: T,
    theme: ColorTheme = 'light',
): ThemeProps[T] => {
    const selectedTheme = getTheme(theme);
    return selectedTheme[category];
};
