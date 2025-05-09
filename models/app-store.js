'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js'; // Imports the json document for database

const appStore = {

  store: new JsonStore('./models/app-store.json', { info: {} }), // imports the infrmation from app-store
  collection: 'info',
  array: 'creators',

  getAppInfo() {
    return this.store.findAll(this.collection); // Method to find the app info from the json file so it can be referred to with the use of keys
  },

};
//exports the data from the json file with the use of this java script file
export default appStore;
