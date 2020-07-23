import { Crypt, Compare } from 'password-crypt';
/**
 * Соль для пароля
 * @type {string}
 */
export const salt = "grDT@";
/**
 * Валидация значения в зависимости от Regex
 * @param { RegExp } regex
 * @param { String } value
 * @returns {Boolean}
 */
export const validateRegex = (regex, value) => {
    return regex.test(value);
}
/**
 * Хэширование пароля
 * @param pswd
 * @returns {function(*=): *}
 */
export async function cryptPswd (pswd) {
    return await Crypt(salt, pswd);
}
/**
 * Сравнение хэшов паролей
 * @param { String } newPswd
 * @param { String } hashPwd
 * @returns {function(*): *}
 */
export async function cryptComparePswd (newPswd, hashPwd) {
    return await Compare(salt, newPswd, hashPwd);
}
/**
 * Запись данных пользователя в файл
 * @param { Array } storage
 * @param { Object } user
 */
export const recordUser = (storage, user) => {
    storage.push(user);
}
/**
 * Поиск пользователя в массиве и возврат его.
 * @param { Array } storage
 * @param { String } login
 * @returns { Object | Null} - user
 */
export const searchUser = (storage, login) => {
    const index = storage.findIndex((item) => (
        item.email.toLowerCase() === login.toLowerCase()) ||
        (item.tel.toLowerCase() === login.toLowerCase())
    );

    return storage[index] || null;
}
