'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */



 module.exports = {
    /**
     * Promise to fetch all records
     *
     * @return {Promise}
     */
    find(params, populate) {
      return strapi.query('comments').find(params, populate);
    },
 
    findOne(params, populate) {
      return strapi.query('comments').findOne(params, populate);
    },
 
 
 
  };
   