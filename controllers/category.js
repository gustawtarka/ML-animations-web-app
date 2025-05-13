'use strict';

import logger from '../utils/logger.js';
import dataStore from '../models/data-store.js';
import { v4 as uuidv4 } from 'uuid';
import accounts from './accounts.js';


const category = {
createView(request, response) {
    const catetoryId = request.params.id;
  console.log(request.params.id);
    const loggedInUser = accounts.getCurrentUser(request);
    console.log(dataStore.getDataEntry(catetoryId));
    
    const viewData = {
      title: 'Category',
      singleCat: dataStore.getDataEntry(catetoryId),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };

    response.render('category', viewData);
},

};

export default category;
