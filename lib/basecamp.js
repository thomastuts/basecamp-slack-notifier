import axios from 'axios';

import {getLastCheck} from './last-check';

import {
  BASECAMP_ID,
  BASECAMP_USERNAME,
  BASECAMP_PASSWORD,
  BASECAMP_APP_NAME,
  BASECAMP_APP_CONTACT
} from '../config';

export function getEvents(projectId) {
  console.log(`https://basecamp.com/${BASECAMP_ID}/api/v1/projects/${projectId}/events.json?since=${getLastCheck()}`);
  return axios.get(`https://basecamp.com/${BASECAMP_ID}/api/v1/projects/${projectId}/events.json?since=${getLastCheck()}`, {
    headers: {
      'Authorization': new Buffer([BASECAMP_USERNAME, BASECAMP_PASSWORD].join(':')).toString('base64')
    }
  });
}
