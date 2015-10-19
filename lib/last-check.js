import fs from 'fs';
import path from 'path';
import moment from 'moment';

let lastCheck;

try {
  lastCheck = fs.readFileSync('.last-check', 'utf8');
}
catch (err) {
  console.log(err);
  if (err.code === 'ENOENT') {
    saveCurrentTime();
  }
}

export function saveCurrentTime() {
  lastCheck = moment().toISOString();
  fs.writeFileSync('.last-check', lastCheck);
}

export function getLastCheck() {
  return lastCheck;
}
