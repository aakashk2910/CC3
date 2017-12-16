module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:productDescp,cmd:DisplayProductPrice', getProductPrice);

    //To DO: add the pattern functions and describe the logic inside the function
    function getProductPrice(msg, respond){
        if(msg.productId){
            var res = mockData.find(function(product){
                if(product.product_id == msg.productId){
                    return product
                }
            })
            respond(null, {result: res.product_price});
        } else {
            respond(null, {result: ''});
        }
    }
}