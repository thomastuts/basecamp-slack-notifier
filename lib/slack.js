import axios from 'axios';

import {SLACK_WEBHOOK_URL} from '../config';

export function notify(message, channel) {
  let cleanString = message.replace('<span>', '').replace('</span>', '');
  console.log('[SLACK]', cleanString);
  axios.post(SLACK_WEBHOOK_URL, {
    text: cleanString,
    channel
  });
}
