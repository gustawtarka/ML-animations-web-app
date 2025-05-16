'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";
import accounts from './accounts.js';
import dataStore from '../models/data-store.js';
import userStore from "../models/user-store.js";


const start = {
    createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    

    logger.info("About page loading!");
let data = dataStore.getAllData();
let allListItems = [];

for (const category of data) {
  if (category.list && Array.isArray(category.list)) {
    allListItems.push(...category.list);
  }
}
  const randomIndex = Math.floor(Math.random() * allListItems.length);
  const randomItem = allListItems[randomIndex];
    
    if (loggedInUser) {
      const viewData = {
        title: 'ML Learning web app',
        fullname: loggedInUser.firstName + " " + loggedInUser.lastName,
        randomItem: randomItem.name,

        
      };
      response.render('start', viewData);
    }
    else response.redirect('/');    
    
  },
    

};

export default start;