import { colors } from './colors';
import { spacing, radius } from './other';
import { typography } from './typography';

const theme = {
    spacing,
    radius,
    typography,
} as const;

export type ThemeProps = typeof theme & {
    color: (typeof colors)['light'];
};
