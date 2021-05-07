import {messageError} from './error-functions.js';

/**
 * Эта функция проверяет правильно ли введена команда экшена.
 * @param {string} action Имя экшена.
 */
export function checkAction(action) {
  if (action === 'encode') {
    // console.log('action is', action);
  } else if (action === 'decode') {
    // console.log('action is', action);
  } else {
    messageError({wrongAction: true});
  }
}
