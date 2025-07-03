// Base color palette - all colors explicitly defined
const baseColors = {
    // Primary brand colors
    blue50: '#E3F2FD',
    blue100: '#BBDEFB',
    blue200: '#90CAF9',
    blue300: '#64B5F6',
    blue400: '#42A5F5',
    blue500: '#2196F3',
    blue600: '#1E88E5',
    blue700: '#1976D2',
    blue800: '#1565C0',
    blue900: '#0D47A1',

    // Secondary colors
    purple50: '#F3E5F5',
    purple100: '#E1BEE7',
    purple200: '#CE93D8',
    purple300: '#BA68C8',
    purple400: '#AB47BC',
    purple500: '#9C27B0',
    purple600: '#8E24AA',
    purple700: '#7B1FA2',
    purple800: '#6A1B9A',
    purple900: '#4A148C',

    // Success colors
    green50: '#E8F5E8',
    green100: '#C8E6C9',
    green200: '#A5D6A7',
    green300: '#81C784',
    green400: '#66BB6A',
    green500: '#4CAF50',
    green600: '#43A047',
    green700: '#388E3C',
    green800: '#2E7D32',
    green900: '#1B5E20',

    // Warning colors
    yellow50: '#FFF8E1',
    yellow100: '#FFECB3',
    yellow200: '#FFE082',
    yellow300: '#FFD54F',
    yellow400: '#FFCA28',
    yellow500: '#FFC107',
    yellow600: '#FFB300',
    yellow700: '#FFA000',
    yellow800: '#FF8F00',
    yellow900: '#FF6F00',

    // Error colors
    red50: '#FFEBEE',
    red100: '#FFCDD2',
    red200: '#EF9A9A',
    red300: '#E57373',
    red400: '#EF5350',
    red500: '#F44336',
    red600: '#E53935',
    red700: '#D32F2F',
    red800: '#C62828',
    red900: '#B71C1C',

    // Neutral colors
    gray50: '#FAFAFA',
    gray100: '#F5F5F5',
    gray200: '#EEEEEE',
    gray300: '#E0E0E0',
    gray400: '#BDBDBD',
    gray500: '#9E9E9E',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    gray900: '#212121',

    // Pure colors
    white: '#FFFFFF',
    black: '#000000',
} as const;

// Light theme color mappings
const lightColors = {
    // Base colors for direct access
    base: baseColors,

    // Text colors
    text: {
        primary: baseColors.gray900,
        secondary: baseColors.gray600,
        tertiary: baseColors.gray500,
        disabled: baseColors.gray400,
        inverse: baseColors.white,
        link: baseColors.blue600,
        success: baseColors.green700,
        warning: baseColors.yellow700,
        error: baseColors.red700,
    },

    // Background colors
    background: {
        primary: baseColors.white,
        secondary: baseColors.gray50,
        tertiary: baseColors.gray100,
        inverse: baseColors.gray900,
        overlay: baseColors.black,
        success: baseColors.green50,
        warning: baseColors.yellow50,
        error: baseColors.red50,
    },

    // Border colors
    border: {
        primary: baseColors.gray300,
        secondary: baseColors.gray200,
        tertiary: baseColors.gray100,
        focus: baseColors.blue500,
        success: baseColors.green300,
        warning: baseColors.yellow300,
        error: baseColors.red300,
        disabled: baseColors.gray200,
    },

    // Button colors
    button: {
        solid: {
            primary: {
                text: baseColors.white,
                background: baseColors.blue500,
                border: baseColors.blue500,
                hover: {
                    text: baseColors.white,
                    background: baseColors.blue600,
                    border: baseColors.blue600,
                },
                active: {
                    text: baseColors.white,
                    background: baseColors.blue700,
                    border: baseColors.blue700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.gray200,
                    border: baseColors.gray200,
                },
            },
            secondary: {
                text: baseColors.white,
                background: baseColors.purple500,
                border: baseColors.purple500,
                hover: {
                    text: baseColors.white,
                    background: baseColors.purple600,
                    border: baseColors.purple600,
                },
                active: {
                    text: baseColors.white,
                    background: baseColors.purple700,
                    border: baseColors.purple700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.gray200,
                    border: baseColors.gray200,
                },
            },
            success: {
                text: baseColors.white,
                background: baseColors.green500,
                border: baseColors.green500,
                hover: {
                    text: baseColors.white,
                    background: baseColors.green600,
                    border: baseColors.green600,
                },
                active: {
                    text: baseColors.white,
                    background: baseColors.green700,
                    border: baseColors.green700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.gray200,
                    border: baseColors.gray200,
                },
            },
            warning: {
                text: baseColors.gray900,
                background: baseColors.yellow500,
                border: baseColors.yellow500,
                hover: {
                    text: baseColors.gray900,
                    background: baseColors.yellow600,
                    border: baseColors.yellow600,
                },
                active: {
                    text: baseColors.gray900,
                    background: baseColors.yellow700,
                    border: baseColors.yellow700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.gray200,
                    border: baseColors.gray200,
                },
            },
            error: {
                text: baseColors.white,
                background: baseColors.red500,
                border: baseColors.red500,
                hover: {
                    text: baseColors.white,
                    background: baseColors.red600,
                    border: baseColors.red600,
                },
                active: {
                    text: baseColors.white,
                    background: baseColors.red700,
                    border: baseColors.red700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.gray200,
                    border: baseColors.gray200,
                },
            },
        },
        outline: {
            primary: {
                text: baseColors.blue600,
                background: baseColors.white,
                border: baseColors.blue500,
                hover: {
                    text: baseColors.blue700,
                    background: baseColors.blue50,
                    border: baseColors.blue600,
                },
                active: {
                    text: baseColors.blue800,
                    background: baseColors.blue100,
                    border: baseColors.blue700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.white,
                    border: baseColors.gray200,
                },
            },
            secondary: {
                text: baseColors.purple600,
                background: baseColors.white,
                border: baseColors.purple500,
                hover: {
                    text: baseColors.purple700,
                    background: baseColors.purple50,
                    border: baseColors.purple600,
                },
                active: {
                    text: baseColors.purple800,
                    background: baseColors.purple100,
                    border: baseColors.purple700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.white,
                    border: baseColors.gray200,
                },
            },
            success: {
                text: baseColors.green600,
                background: baseColors.white,
                border: baseColors.green500,
                hover: {
                    text: baseColors.green700,
                    background: baseColors.green50,
                    border: baseColors.green600,
                },
                active: {
                    text: baseColors.green800,
                    background: baseColors.green100,
                    border: baseColors.green700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.white,
                    border: baseColors.gray200,
                },
            },
            warning: {
                text: baseColors.yellow700,
                background: baseColors.white,
                border: baseColors.yellow500,
                hover: {
                    text: baseColors.yellow800,
                    background: baseColors.yellow50,
                    border: baseColors.yellow600,
                },
                active: {
                    text: baseColors.yellow900,
                    background: baseColors.yellow100,
                    border: baseColors.yellow700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.white,
                    border: baseColors.gray200,
                },
            },
            error: {
                text: baseColors.red600,
                background: baseColors.white,
                border: baseColors.red500,
                hover: {
                    text: baseColors.red700,
                    background: baseColors.red50,
                    border: baseColors.red600,
                },
                active: {
                    text: baseColors.red800,
                    background: baseColors.red100,
                    border: baseColors.red700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.white,
                    border: baseColors.gray200,
                },
            },
        },
        ghost: {
            primary: {
                text: baseColors.blue600,
                background: 'transparent',
                border: 'transparent',
                hover: {
                    text: baseColors.blue700,
                    background: baseColors.blue50,
                    border: 'transparent',
                },
                active: {
                    text: baseColors.blue800,
                    background: baseColors.blue100,
                    border: 'transparent',
                },
                disabled: {
                    text: baseColors.gray400,
                    background: 'transparent',
                    border: 'transparent',
                },
            },
            secondary: {
                text: baseColors.purple600,
                background: 'transparent',
                border: 'transparent',
                hover: {
                    text: baseColors.purple700,
                    background: baseColors.purple50,
                    border: 'transparent',
                },
                active: {
                    text: baseColors.purple800,
                    background: baseColors.purple100,
                    border: 'transparent',
                },
                disabled: {
                    text: baseColors.gray400,
                    background: 'transparent',
                    border: 'transparent',
                },
            },
        },
    },

    // Input colors
    input: {
        text: baseColors.gray900,
        placeholder: baseColors.gray500,
        background: baseColors.white,
        border: baseColors.gray300,
        focus: {
            border: baseColors.blue500,
            shadow: baseColors.blue500,
        },
        error: {
            border: baseColors.red500,
            shadow: baseColors.red500,
        },
        disabled: {
            text: baseColors.gray400,
            background: baseColors.gray100,
            border: baseColors.gray200,
        },
    },

    // Card colors
    card: {
        background: baseColors.white,
        border: baseColors.gray200,
        shadow: baseColors.black,
    },

    // Badge colors
    badge: {
        primary: {
            text: baseColors.blue700,
            background: baseColors.blue100,
        },
        secondary: {
            text: baseColors.purple700,
            background: baseColors.purple100,
        },
        success: {
            text: baseColors.green700,
            background: baseColors.green100,
        },
        warning: {
            text: baseColors.yellow800,
            background: baseColors.yellow100,
        },
        error: {
            text: baseColors.red700,
            background: baseColors.red100,
        },
        neutral: {
            text: baseColors.gray700,
            background: baseColors.gray100,
        },
    },
} as const;

// TODO: add real dark colors later when needed
const darkColors: ColorThemeProps = {
    // Base colors for direct access
    base: baseColors,

    // Text colors
    text: {
        primary: baseColors.gray900,
        secondary: baseColors.gray600,
        tertiary: baseColors.gray500,
        disabled: baseColors.gray400,
        inverse: baseColors.white,
        link: baseColors.blue600,
        success: baseColors.green700,
        warning: baseColors.yellow700,
        error: baseColors.red700,
    },

    // Background colors
    background: {
        primary: baseColors.white,
        secondary: baseColors.gray50,
        tertiary: baseColors.gray100,
        inverse: baseColors.gray900,
        overlay: baseColors.black,
        success: baseColors.green50,
        warning: baseColors.yellow50,
        error: baseColors.red50,
    },

    // Border colors
    border: {
        primary: baseColors.gray300,
        secondary: baseColors.gray200,
        tertiary: baseColors.gray100,
        focus: baseColors.blue500,
        success: baseColors.green300,
        warning: baseColors.yellow300,
        error: baseColors.red300,
        disabled: baseColors.gray200,
    },

    // Button colors
    button: {
        solid: {
            primary: {
                text: baseColors.white,
                background: baseColors.blue500,
                border: baseColors.blue500,
                hover: {
                    text: baseColors.white,
                    background: baseColors.blue600,
                    border: baseColors.blue600,
                },
                active: {
                    text: baseColors.white,
                    background: baseColors.blue700,
                    border: baseColors.blue700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.gray200,
                    border: baseColors.gray200,
                },
            },
            secondary: {
                text: baseColors.white,
                background: baseColors.purple500,
                border: baseColors.purple500,
                hover: {
                    text: baseColors.white,
                    background: baseColors.purple600,
                    border: baseColors.purple600,
                },
                active: {
                    text: baseColors.white,
                    background: baseColors.purple700,
                    border: baseColors.purple700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.gray200,
                    border: baseColors.gray200,
                },
            },
            success: {
                text: baseColors.white,
                background: baseColors.green500,
                border: baseColors.green500,
                hover: {
                    text: baseColors.white,
                    background: baseColors.green600,
                    border: baseColors.green600,
                },
                active: {
                    text: baseColors.white,
                    background: baseColors.green700,
                    border: baseColors.green700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.gray200,
                    border: baseColors.gray200,
                },
            },
            warning: {
                text: baseColors.gray900,
                background: baseColors.yellow500,
                border: baseColors.yellow500,
                hover: {
                    text: baseColors.gray900,
                    background: baseColors.yellow600,
                    border: baseColors.yellow600,
                },
                active: {
                    text: baseColors.gray900,
                    background: baseColors.yellow700,
                    border: baseColors.yellow700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.gray200,
                    border: baseColors.gray200,
                },
            },
            error: {
                text: baseColors.white,
                background: baseColors.red500,
                border: baseColors.red500,
                hover: {
                    text: baseColors.white,
                    background: baseColors.red600,
                    border: baseColors.red600,
                },
                active: {
                    text: baseColors.white,
                    background: baseColors.red700,
                    border: baseColors.red700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.gray200,
                    border: baseColors.gray200,
                },
            },
        },
        outline: {
            primary: {
                text: baseColors.blue600,
                background: baseColors.white,
                border: baseColors.blue500,
                hover: {
                    text: baseColors.blue700,
                    background: baseColors.blue50,
                    border: baseColors.blue600,
                },
                active: {
                    text: baseColors.blue800,
                    background: baseColors.blue100,
                    border: baseColors.blue700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.white,
                    border: baseColors.gray200,
                },
            },
            secondary: {
                text: baseColors.purple600,
                background: baseColors.white,
                border: baseColors.purple500,
                hover: {
                    text: baseColors.purple700,
                    background: baseColors.purple50,
                    border: baseColors.purple600,
                },
                active: {
                    text: baseColors.purple800,
                    background: baseColors.purple100,
                    border: baseColors.purple700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.white,
                    border: baseColors.gray200,
                },
            },
            success: {
                text: baseColors.green600,
                background: baseColors.white,
                border: baseColors.green500,
                hover: {
                    text: baseColors.green700,
                    background: baseColors.green50,
                    border: baseColors.green600,
                },
                active: {
                    text: baseColors.green800,
                    background: baseColors.green100,
                    border: baseColors.green700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.white,
                    border: baseColors.gray200,
                },
            },
            warning: {
                text: baseColors.yellow700,
                background: baseColors.white,
                border: baseColors.yellow500,
                hover: {
                    text: baseColors.yellow800,
                    background: baseColors.yellow50,
                    border: baseColors.yellow600,
                },
                active: {
                    text: baseColors.yellow900,
                    background: baseColors.yellow100,
                    border: baseColors.yellow700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.white,
                    border: baseColors.gray200,
                },
            },
            error: {
                text: baseColors.red600,
                background: baseColors.white,
                border: baseColors.red500,
                hover: {
                    text: baseColors.red700,
                    background: baseColors.red50,
                    border: baseColors.red600,
                },
                active: {
                    text: baseColors.red800,
                    background: baseColors.red100,
                    border: baseColors.red700,
                },
                disabled: {
                    text: baseColors.gray400,
                    background: baseColors.white,
                    border: baseColors.gray200,
                },
            },
        },
        ghost: {
            primary: {
                text: baseColors.blue600,
                background: 'transparent',
                border: 'transparent',
                hover: {
                    text: baseColors.blue700,
                    background: baseColors.blue50,
                    border: 'transparent',
                },
                active: {
                    text: baseColors.blue800,
                    background: baseColors.blue100,
                    border: 'transparent',
                },
                disabled: {
                    text: baseColors.gray400,
                    background: 'transparent',
                    border: 'transparent',
                },
            },
            secondary: {
                text: baseColors.purple600,
                background: 'transparent',
                border: 'transparent',
                hover: {
                    text: baseColors.purple700,
                    background: baseColors.purple50,
                    border: 'transparent',
                },
                active: {
                    text: baseColors.purple800,
                    background: baseColors.purple100,
                    border: 'transparent',
                },
                disabled: {
                    text: baseColors.gray400,
                    background: 'transparent',
                    border: 'transparent',
                },
            },
        },
    },

    // Input colors
    input: {
        text: baseColors.gray900,
        placeholder: baseColors.gray500,
        background: baseColors.white,
        border: baseColors.gray300,
        focus: {
            border: baseColors.blue500,
            shadow: baseColors.blue500,
        },
        error: {
            border: baseColors.red500,
            shadow: baseColors.red500,
        },
        disabled: {
            text: baseColors.gray400,
            background: baseColors.gray100,
            border: baseColors.gray200,
        },
    },

    // Card colors
    card: {
        background: baseColors.white,
        border: baseColors.gray200,
        shadow: baseColors.black,
    },

    // Badge colors
    badge: {
        primary: {
            text: baseColors.blue700,
            background: baseColors.blue100,
        },
        secondary: {
            text: baseColors.purple700,
            background: baseColors.purple100,
        },
        success: {
            text: baseColors.green700,
            background: baseColors.green100,
        },
        warning: {
            text: baseColors.yellow800,
            background: baseColors.yellow100,
        },
        error: {
            text: baseColors.red700,
            background: baseColors.red100,
        },
        neutral: {
            text: baseColors.gray700,
            background: baseColors.gray100,
        },
    },
} as const;

// Export theme-specific colors for future theme switching
const lightTheme = lightColors;
const darkTheme = darkColors;

export const colors = {
    light: lightTheme,
    dark: darkTheme,
};
export type BaseColorsProps = typeof baseColors;
export type ColorThemeProps = typeof lightTheme;
export type ColorTheme = 'light' | 'dark';
