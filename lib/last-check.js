import fs from 'fs';
import path from 'path';
import moment from 'moment';

let lastCheck = moment().toISOString();

export function saveCurrentTime() {
  lastCheck = moment().toISOString();
}

export function getLastCheck() {
  return lastCheck;
}
