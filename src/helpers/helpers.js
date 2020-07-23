/**
 * Валидация значения в зависимости от Regex
 * @param regex
 * @param value
 * @returns {Boolean}
 */
export const validateRegex = (regex, value) => {
    return regex.test(value);
}
