'use strict';

import express from 'express';

const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import search from './controllers/search.js';
import accounts from './controllers/accounts.js';
import index from './controllers/index.js';
import logger from './utils/logger.js';
import category from './controllers/category.js';
import simulation from './controllers/simulation.js';
import algorithm from './controllers/algorithm.js';

router.get("/start", start.createView);
router.get("/dashboard", dashboard.createView);
router.get("/category/:id", category.createView);
router.get("/about", about.createView);
router.get("/search", search.createView);
router.get("/", index.createView);
router.get("/login", accounts.login);
router.get("/register", accounts.register);
router.get("/logout", accounts.logout);
router.get("/algorithm/:id", algorithm.createView);
router.post("/registerQ", accounts.registerQ);
router.post("/authenticate", accounts.authenticate);
router.get("/simulation", simulation.createView);

router.get("/error", (request, response) =>
    response.status(404).end("Page not found")
);

export default router;