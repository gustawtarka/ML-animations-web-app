'use strict';

import logger from '../utils/logger.js';
import { v4 as uuidv4 } from 'uuid';
import accounts from './accounts.js';


const data = {
createView(request, response) {
 console.log(request.params.id);
  console.log(loggedInUser);
    const viewData = {
    };

    response.render('menu', viewData);
}

};

export default data;
