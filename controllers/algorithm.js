'use strict';

import logger from '../utils/logger.js';
import dataStore from '../models/data-store.js';
import { v4 as uuidv4 } from 'uuid';
import accounts from './accounts.js';


const algorithm = {
createView(request, response) {
    
    const viewData = {
      title: 'Algorithm',
    };

    response.render('algorithm', viewData);
},

};

export default algorithm;
