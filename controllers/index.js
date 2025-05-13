'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";  
import accounts from './accounts.js';
import userStore from "../models/user-store.js";
    
const index = {
  createView(request, response) {
      const viewData = {
        title: "Login or Signup",
      };
      response.render('index', viewData);
  },
};

export default index;