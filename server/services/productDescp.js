/**
 * import the seneca package
 */
const seneca = require('seneca')();
const Promise = require('bluebird');
const config = require('../config');
/**
 * Convert act to Promise
 */
const act = Promise.promisify(seneca.client({ host: config.product_descp_service.host, port: config.product_descp_service.port }).act, { context: seneca });

/**
 * To DO: Define Service Method
 */
const PRODUCT_URL = { role: 'ProductDescp', cmd: 'DisplayURL' };
const PRODUCT_NAME = {role: 'ProductDescp', cmd: 'DisplayName'};
/**
 * Call Service Method
 */
const getProductURL = (productId) => {
    /**
     * To DO: Write act Method
     */
    return act(Object.assign({}, PRODUCT_URL, { productId }));

};
const getProductName = (productId) => {
    /**
     * To DO: Write act Method
     */
    return act(Object.assign({}, PRODUCT_NAME, { productId }));
};
module.exports = {
    getProductURL,
    getProductName
};
