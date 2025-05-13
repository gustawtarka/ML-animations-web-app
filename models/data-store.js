'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const dataStore = {
    store: new JsonStore('./models/data-store.json', { data: [] }),
    collection: 'data',

    getAllData() {
        return this.store.findAll(this.collection);
    },
    getDataEntry(id) {
        return this.store.findOneBy(this.collection, (data => data.id === id));
    },
    getDataCategory(category) {
        return this.store.findBy(this.collection, (data => data.name == category))
    },
}

export default dataStore;