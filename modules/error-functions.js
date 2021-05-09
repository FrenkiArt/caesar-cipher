/**
 * Эта функция выводит в консоль сообщение об ошибке.
 * @param {object} args - объект с передаваемыми свойствами.
 */
export function messageError(args) {
  openMessageError();

  if (args.optionNameIsMissed) {
    console.error(`Вы не ввели аргумент ${args.optionName}`);
    console.log('Пожалуйста, введите его. Это обязательный аргумент');

    process.exitCode = 1;
    // process.exit(1);
  }

  if (args.wrongAction) {
    console.error(
      `Вы должны использовать только команды "encode" или "decode".`
    );
  }

  if (args.notNumber) {
    console.error(`"shift" должен быть числом`);
    console.log(`А у вас "${args.argument}"`);
  }

  closeMessageError();
}

/**
 * Эта функция содержит шаблон для начала сообщения об ошибке.
 * Можно передать в качестве аргумента массив, и тогда выведутся
 * элементы этого массива.
 */
function openMessageError(array) {
  if (array) {
    array.forEach((element) => {
      console.log(element);
    });
  } else {
    console.log('');
    console.log('!!!---------!!!');
  }
}

/**
 * Эта функция содержит шаблон для конца сообщения об ошибке.
 * Можно передать в качестве аргумента массив, и тогда выведутся
 * элементы этого массива.
 */
function closeMessageError() {
  if (array) {
    array.forEach((element) => {
      console.log(element);
    });
  } else {
    console.log('!!!---------!!!');
    console.log('');
  }
}
