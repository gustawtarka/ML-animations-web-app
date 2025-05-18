'use strict';

import logger from '../utils/logger.js';
import dataStore from '../models/data-store.js';
import { v4 as uuidv4 } from 'uuid';
import accounts from './accounts.js';


const category = {
createView(request, response) {
    const categoryId = request.params.id;
    console.log(request.params.id);
    const loggedInUser = accounts.getCurrentUser(request);
    console.log(dataStore.getDataEntry(categoryId));
    console.log("---------------------------------------");
    console.log(dataStore.getDataEntry(categoryId).list);
    const entry = (dataStore.getDataEntry(categoryId));
    const listList = dataStore.getDataEntry(categoryId).list;
    console.log("grub" + listList.length);
    
    const viewData = {
      title: 'Category',
      singleCat: entry,
      listList: listList,  
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };

    response.render('category', viewData);
},

};

export default category;
