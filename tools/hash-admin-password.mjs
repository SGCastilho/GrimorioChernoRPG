#!/usr/bin/env node
import process from 'node:process';
import { hashPassword } from '../api/_lib/admin/auth.mjs';

function readSecret(label) {
  if (!process.stdin.isTTY) throw new Error('Execute este comando em um terminal interativo.');
  return new Promise((resolve, reject) => {
    let value = '';
    process.stdout.write(label);
    process.stdin.setRawMode(true);
    process.stdin.resume();
    const cleanup = () => {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      process.stdin.off('data', onData);
    };
    const onData = chunk => {
      for (const character of chunk.toString('utf8')) {
        if (character === '\u0003') {
          cleanup();
          process.stdout.write('\n');
          reject(new Error('Operação cancelada.'));
          return;
        }
        if (character === '\r' || character === '\n') {
          cleanup();
          process.stdout.write('\n');
          resolve(value);
          return;
        }
        if (character === '\u007f' || character === '\b') {
          if (value) {
            value = value.slice(0, -1);
            process.stdout.write('\b \b');
          }
        } else if (character >= ' ') {
          value += character;
          process.stdout.write('*');
        }
      }
    };
    process.stdin.on('data', onData);
  });
}

try {
  const first = await readSecret('Nova senha administrativa: ');
  const second = await readSecret('Confirme a senha: ');
  if (first !== second) throw new Error('As senhas não coincidem.');
  console.log(await hashPassword(first));
  console.error('Copie o valor acima para GRIMORIO_ADMIN_PASSWORD_HASH. A senha original não foi armazenada.');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
