'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";
import accounts from './accounts.js';
import userStore from "../models/user-store.js";

//--------------------------------------------- Creates object about
const about = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("About page loading!");
    
    if (loggedInUser) {
      const viewData = {
      };
      response.render('about', viewData);
    }
    else response.redirect('/');    
    
  },
  
};

export default about;
