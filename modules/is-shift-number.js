import {messageError} from './error-functions.js';

/**
 * Эта функция проверяет можно ли привести к целому числу
 * переданный аргумент.
 * @param {string} n Проверяемый аргумент.
 */
export function isShiftNumber(n) {
  if (!parseInt(n)) {
    messageError({argument: n, notNumber: true});
    return false;
  }

  return true;
}
