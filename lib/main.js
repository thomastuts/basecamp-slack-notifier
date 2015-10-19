import moment from 'moment';

import {notify} from './slack';
import {getEvents} from './basecamp';
import {getLastCheck, saveCurrentTime} from './last-check';
import {BASECAMP_PROJECTS, CHECK_INTERVAL_IN_SECONDS} from '../config';

function checkProjects() {
  console.log('Checking for project events...');
  BASECAMP_PROJECTS.forEach((project) => {
    getEvents(project.id)
      .then((response) => {
        let events = response.data.reverse();
        events.forEach((event) => {
          notify(`*${event.creator.name}* ${event.action} *${event.target}* (${moment(event.created_at).format('HH:mm:ss')})`);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  saveCurrentTime();
}

checkProjects();

setInterval(checkProjects, CHECK_INTERVAL_IN_SECONDS * 1000);
