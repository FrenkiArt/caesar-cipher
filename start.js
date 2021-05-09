import {Command} from 'commander/esm.mjs';
import fs from 'fs';
import {messageError} from './modules/error-functions.js';
import {checkAction} from './modules/check-actions.js';

import {isShiftNumber} from './modules/is-shift-number.js';

const program = new Command();
const outputOptions = {
  stdin: false,
};
const inputOptions = {
  stdout: false,
};

program
  // .requiredOption('-s, --shift <shift>', 'Шифт')
  .option('-s, --shift <shift>', 'Шифт')
  .option('-i, --input <input>', 'Ввод')
  .option('-o, --output <output>', 'Вывод')
  // .requiredOption('-a, --action <action>', 'Действие');
  .option('-a, --action <action>', 'Действие');

program.parse(process.argv);

const options = program.opts();

console.log(options);

if (options.shift) {
  if (isShiftNumber(options.shift)) {
    // console.log('Проверка shift на число пройдена.');
  }
} else {
  messageError({
    optionName: 'shift',
    optionNameIsMissed: true,
    options: options,
  });
}

if (options.action) {
  checkAction(options.action);
} else {
  messageError({
    optionName: 'action',
    optionNameIsMissed: true,
    options: options,
  });
}

if (options.input) {
  // console.log(options.input);
  // readFile(options.input);
  checkFileExist(options.input);
} else {
  inputOptions.stdin = true;
  console.log('Должна запуститься функция чтения из консоли.');
}

if (options.output) {
  // console.log(options.output);
  outputOptions.path = options.output;

  checkFileExist(options.output);
} else {
  outputOptions.stdout = true;
  console.log('Должна запуститься функция вывода результата в консоль');
}

function readFile(path) {
  console.log(`Читаю файл по пути ${path}`);

  fs.readFile(path, 'utf8', (error, file) => {
    if (error) {
      return console.error(error.message);
    }

    console.log(file);
  });
}

function writeFile(path, content) {
  fs.writeFile(path, content, 'utf8', (error) => {
    if (error) {
      return console.error(error.message);
    }

    console.log(`Файл успешно записан по пути ${path}`);
  });
}

function checkFileExist(path) {
  console.log(`Проверяю существование файла по пути ${path}`);

  fs.access(path, function (error) {
    if (error) {
      console.log(error);
      console.log(`Файл по пути ${path} не найден.`);
    }
    console.log(`Файл по пути ${path} существует.`);
  });
}

console.log('================');
//console.log(process.stdout.write(`Что это?`));
