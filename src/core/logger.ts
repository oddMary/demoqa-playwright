import fs from 'fs';
import path from 'path';

const logDir = path.resolve(process.cwd(), 'logs');
const logFile = path.join(logDir, 'test.log');

function stripAnsi(text: string): string {
  return text.replace(
    // eslint-disable-next-line no-control-regex
    /\x1B\[[0-9;]*m/g,
    '',
  );
}

function writeToFile(message: string) {
  fs.mkdirSync(logDir, { recursive: true });
  fs.appendFileSync(logFile, stripAnsi(message) + '\n', 'utf-8');
}

export class Logger {
  static step(message: string): void {
    const line = message;

    console.log(line);
    writeToFile(line);
  }
}
