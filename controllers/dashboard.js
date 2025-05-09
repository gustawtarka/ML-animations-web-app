'use strict';

import logger from "../utils/logger.js";
import { v4 as uuidv4 } from 'uuid';
import accounts from './accounts.js';
//--------------------------------------------- Creates object dashboard
const dashboard = {
    createView(request, response) {
    logger.info('dashboard rendering');
    if (loggedInUser) {
            console.log(loggedInUser.id);
    const viewData = {
      title: 'ML Learning web app',
    };
    response.render('dashboard', viewData);
    }
    else response.redirect('/');
  }
};
//--------------------------------------------- Exports the module
export default dashboard;
