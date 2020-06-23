import { combineEpics } from 'redux-observable';
import { values } from 'lodash';

import * as postsEpics from './posts/epics.js';
import * as questionsEpics from './questions/epics.js';
import * as regEpics from './calc-reg/epics.js';

export default combineEpics(
  ...values(postsEpics),
  ...values(questionsEpics),
  ...values(regEpics)
);
