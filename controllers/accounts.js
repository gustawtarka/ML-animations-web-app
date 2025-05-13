'use strict';

import logger from '../utils/logger.js';
import userStore from '../models/user-store.js';
import { v4 as uuidv4 } from 'uuid';

const accounts = {

  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  },
  
  logout(request, response) {
    response.cookie('user', '');
    response.redirect('/');
  },
  
  register(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('register', viewData);
  },
registerQ(request, response) {
  console.log("testing registerQ");
  const { email, password, firstName, lastName} = request.body;
  console.log(email, password, firstName, lastName);

  if (!email || !password || !firstName || !lastName) {
    console.log("trial for data");
    return response.redirect('/register');
  }

  const user = {
    id: uuidv4(),
    email,
    password,
    firstName,
    lastName,
  };
  
  userStore.addUser(user);
  response.cookie('user', user.email);
  logger.info('registering ' + user.email);
  response.redirect('/start');
},

  
authenticate(request, response) {
  const user = userStore.getUserByEmail(request.body.email);

  if (!user) {
    logger.warn('Login attempt with unknown email: ' + request.body.email);
    return response.redirect('/login');
  }

  if (user.password === request.body.password) {
    response.cookie('user', user.email);
    logger.info('Logging in: ' + user.email);
    response.redirect('/start');
  } else {
    logger.warn('Invalid password for: ' + user.email);
    response.redirect('/login');
  }
},
  
getCurrentUser(request) {
  const userEmail = request.cookies.user;

  if (!userEmail) {
    return null;
  }

  const user = userStore.getUserByEmail(userEmail);

  if (!user) {
    return null;
  }

  return user;
}

}

export default accounts;
