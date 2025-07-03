/**
 * Format currency with proper locale and currency symbol
 * @param {number} amount - The amount to format
 * @param {string} [currency='USD'] - The currency code to use
 * @param {string} [locale='en-US'] - The locale to use for formatting
 * @returns {string} The formatted currency string
 */
export const formatCurrency = (
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US',
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * Format date with proper locale and format options
 * @param {Date | string} date - The date to format (can be Date object or date string)
 * @param {FormatDateOptions} [options] - The formatting options
 * @param {string} [options.locale='en-US'] - The locale to use for formatting
 * @param {string} [options.year='numeric'] - Year format (numeric, 2-digit)
 * @param {string} [options.month='long'] - Month format (numeric, 2-digit, long, short, narrow)
 * @param {string} [options.day='numeric'] - Day format (numeric, 2-digit)
 * @returns {string} The formatted date string
 */
const defaultFormatDateParams = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  locale: 'en-US',
} as const;

type FormatDateOptions = Omit<Intl.DateTimeFormatOptions, 'locale'> & {
  locale?: Intl.LocalesArgument;
};
export const formatDate = (
  date: Date | string,
  options: FormatDateOptions = defaultFormatDateParams,
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const { locale = 'en-US', ...dateTimeOptions } = options;

  return new Intl.DateTimeFormat(locale, dateTimeOptions).format(dateObj);
};

/**
 * Truncate text with ellipsis if it exceeds maximum length
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} The truncated text with ellipsis or original text if shorter than maxLength
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};
