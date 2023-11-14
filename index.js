import inquirer from 'inquirer';
import fs from 'fs';
import { spawnSync } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { cColor } from '@miroyar/ccolor';

const __dirname = dirname(fileURLToPath(import.meta.url));

const testFolder = 'tests';
const testPath = `./${testFolder}/`;
let lastTest = '';

function ask() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'test',
        message: 'Выберите тест',
        choices: fs
          .readdirSync(testPath)
          .filter((folder) => {
            const path = testPath + folder;
            if (fs.lstatSync(path).isDirectory()) return fs.readdirSync(path).includes('index.js');
            else return false;
          })
          .sort((a, b) => {
            if (a === lastTest) return -1;
            else if (b === lastTest) return 1;
            else return 0;
          }),
      },
    ])
    .then(({ test }) => {
      lastTest = test;
      console.log(cColor('==================================================', 'FG'));
      spawnSync('node', [testFolder + '/' + test + '/index'], {
        cwd: __dirname,
        stdio: 'inherit',
      });
      console.log(cColor('==================================================', 'FBG'));
      ask();
    })
    .catch((error) => {
      console.log(error);
    });
}

ask();
