'use strict';

import logger from "../utils/logger.js";
import accounts from './accounts.js';



const getCategories = (loggedInUser) => {
  const categories = [];
  return categories;
}

const search = {
  
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("Search page loading!");
    if (loggedInUser) {
     const viewData = {
     };
       logger.debug(viewData.categories);
      response.render('search', viewData);
      }
    else response.redirect('/'); 
  },
  
  findResult(request, response) {
    const category = request.body.category;
    logger.debug('Algorithm = ' + category);

    const viewData = {
    };
    logger.debug(viewData.foundStars);
    response.render('search', viewData);
  },
};

export default search;
