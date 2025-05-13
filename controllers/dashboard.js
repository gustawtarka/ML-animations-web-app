'use strict';

import logger from "../utils/logger.js";
import { v4 as uuidv4 } from 'uuid';
import accounts from './accounts.js';
import dataStore from '../models/data-store.js'
//--------------------------------------------- Creates object dashboard

/*
createView(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
            console.log(loggedInUser.id);
    const viewData = {
      title: 'Neutron Star database dashboard',
      starCollection: starStore.getUserStars(loggedInUser.id),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      pfp: loggedInUser.picture,
      timespent: 0,
    };
    logger.info('about to render' + viewData.starCollection);
    response.render('dashboard', viewData);
    }
    else response.redirect('/');
    */
const dashboard = {
    createView(request, response) {
      const loggedInUser = accounts.getCurrentUser(request);
    logger.info('dashboard rendering');
    if (loggedInUser) {
            console.log(loggedInUser.id);

    const viewData = {
      title: 'ML Learning web app',
      catCollection: dataStore.getAllData(),
      
      fullname: loggedInUser.firstName + " " + loggedInUser.lastName
    };
                console.log(dataStore.getAllData());
    response.render('dashboard', viewData);
    }
    else response.redirect('/');
  }
};
//--------------------------------------------- Exports the module
export default dashboard;
