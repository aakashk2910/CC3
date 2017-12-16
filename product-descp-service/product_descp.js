module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //To DO: Add the patterns and their corresponding functions
    this.add('role:productDescp,cmd:DisplayProductDescp', getProductName);
    this.add('role:productDescp,cmd:DisplayProductDescp', getProductURL);

    //To DO: add the pattern functions and describe the logic inside the function

    function getProductName(msg, respond){
        if(msg.productId){
            var res = mockData.find(function(product){
                if(product.product_id == msg.productId){
                    return product
                }
            })
            respond(null, {result: res.product_name});
        } else {
            respond(null, {result: ''});
        }
    }

    function getProductName(msg, respond){
        if(msg.productId){
            var res = mockData.find(function(product){
                if(product.product_id == msg.productId){
                    return product
                }
            })
            respond(null, {result: res.product_url});
        } else {
            respond(null, {result: ''});
        }
    }
}