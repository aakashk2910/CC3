/**
 * import the seneca package
 */
const seneca = require('seneca')();
const Promise = require('bluebird');
const config = require('../config');
/**
 * Convert act to Promise
 */
const act = Promise.promisify(seneca.client({ host: config.product_price_service.host, port: config.product_price_service.port }).act, { context: seneca });

/**
 * To DO: Define Service Method
 */
const PRODUCT_PRICE = { role: 'productDescp', cmd: 'DispalyProductDescp' };
/**
 * To DO: Call Service Method
 */

const getProductPrice = (productId) => {
    /**
     * To DO: Write act Method
     */
    return act(Object.assign({}, PRODUCT_PRICE, { productId }));
};
module.exports = {
    getProductPrice
};
