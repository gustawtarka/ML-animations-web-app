'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";  
import accounts from './accounts.js';
import userStore from "../models/user-store.js";
    
const simulation = {
  createView(request, response) {
      const viewData = {
        title: "Simulation",
      };
      response.render('simulation', viewData);
  },
};

export default simulation;